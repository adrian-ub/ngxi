import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackKnIcon],svg[flagpack-kn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#C51918" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"></svg:path><svg:path fill="#5EAA22" fill-rule="evenodd" d="M0 0v24L32 0z" clip-rule="evenodd"></svg:path><svg:path fill="#272727" stroke="#FFD018" stroke-width="2.5" d="m.636 27.952l.723.807l.902-.602L38.52 3.954l1.2-.8l-.963-1.074l-5.32-5.936l-.724-.807l-.901.602l-36.261 24.203l-1.2.8l.963 1.074z"></svg:path><svg:path fill="#F7FCFF" fill-rule="evenodd" d="M12.089 16.918L11 18.813l-.695-2.134l-2.162-.688l1.801-1.1l-.217-2.233l1.778 1.367l1.842-1.02l-.516 2.273l1.477 1.701zm10-6.553L21 12.26l-.695-2.134l-2.162-.688l1.801-1.1l-.217-2.233l1.778 1.367l1.842-1.02l-.516 2.273l1.477 1.701z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FlagpackKnIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
