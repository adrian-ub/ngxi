import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggAtlasianIcon],svg[gg-atlasian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.507 11.556c-.317-.452-.725-.397-.911.122L5 18.908h5.178c.52-2.058.07-4.865-1.097-6.533z" opacity=".8"></svg:path><svg:path d="M12.875 7.126c-1.268 1.81-1.676 4.958-.912 7.03l1.75 4.751h5.251l-4.597-12.48c-.19-.519-.602-.572-.919-.12z"></svg:path></svg:g>`,
})
export class GgAtlasianIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
