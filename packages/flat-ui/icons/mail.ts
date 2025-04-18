import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiMailIcon],svg[flat-ui-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#D35400" fill-rule="evenodd" d="M96.015 38.988H4.006c-1.104 0-2 .897-2 2.005v57.001c0 1.108.896 2.006 2 2.006h92.009a2.003 2.003 0 0 0 2.001-2.006V40.993a2.003 2.003 0 0 0-2.001-2.005" clip-rule="evenodd"></svg:path><svg:path fill="#ECF0F1" fill-rule="evenodd" d="M5 15.974v82.004C5 99.095 5.896 100 7 100h86.001A2.01 2.01 0 0 0 95 97.979V1.99a2.01 2.01 0 0 0-1.999-2.021l-71.997.008z" clip-rule="evenodd"></svg:path><svg:path d="m40 72l54.997-33L95 45.98L51.028 72z" opacity=".1"></svg:path><svg:path fill="#F39C12" fill-rule="evenodd" d="M2 97.991c0 1.11.895 2.009 2 2.009h92c1.104 0 2-.899 2-2.009V42L50 71L2 42z" clip-rule="evenodd"></svg:path><svg:path fill="#F1C40F" fill-rule="evenodd" d="m5 15.974l16.001.01V0z" clip-rule="evenodd"></svg:path><svg:path fill="#F1C40F" d="m2 42l.052 54L50 71z"></svg:path><svg:path fill="#E57E22" d="M98 42L50 71l48 25z"></svg:path><svg:path fill-rule="evenodd" d="M98 97.991V96L50 71l47.328 28.482c.409-.367.672-.896.672-1.491m-96 0V96l48-25L2.672 99.482A2 2 0 0 1 2 97.991" clip-rule="evenodd" opacity=".3"></svg:path>`,
})
export class FlatUiMailIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
