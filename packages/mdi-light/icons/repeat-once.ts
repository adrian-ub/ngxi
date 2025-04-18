import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightRepeatOnceIcon],svg[mdi-light-repeat-once-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 7.5l-3.54 3.54l-.7-.71L18.09 8H6v4H5V7h13.09l-2.33-2.33l.7-.71zM17 17v-4h1v5H4.91l2.33 2.33l-.7.71L3 17.5l3.54-3.54l.7.71L4.91 17zm-7-3h1v-3h-1v-1h2v4h1v1h-3z"></svg:path>`,
})
export class MdiLightRepeatOnceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
