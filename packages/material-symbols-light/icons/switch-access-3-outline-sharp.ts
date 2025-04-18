import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwitchAccess3OutlineSharpIcon],svg[material-symbols-light-switch-access-3-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.596 21v-3h1v1.385q0 .269.173.442t.443.173h7.173q.269 0 .442-.173t.173-.443V4h-8.404v2h-1V3H21v4.817h.962v3.654H21V21zM3 17.77v-2.885h2.904v2.884zm7.077-2.616l-.688-.708l1.94-1.946H3v-1h8.329l-1.94-1.946l.688-.708L13.231 12zM3 9.116V6.212h2.904v2.904z"></svg:path>`,
})
export class MaterialSymbolsLightSwitchAccess3OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
