import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiUmbrellaClosedOutlineIcon],svg[mdi-umbrella-closed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c.4 0 .8.2.9.6L17.5 15H13v4c0 1.7-1.3 3-3 3s-3-1.3-3-3v-1h2v1c0 .6.4 1 1 1s1-.4 1-1v-4H6.5l4.6-12.4c.1-.4.5-.6.9-.6m0 3.9L9.4 13h5.3z"></svg:path>`,
})
export class MdiUmbrellaClosedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
