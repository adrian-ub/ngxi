import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShieldMoonOutlineIcon],svg[material-symbols-light-shield-moon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.525 15.5q.72 0 1.41-.256q.692-.256 1.232-.767q.137-.143.095-.277t-.254-.204q-.931-.285-1.675-.847t-1.25-1.449q-.481-.836-.665-1.782t.167-1.837q.08-.212-.073-.335q-.152-.123-.331-.073q-1.264.44-1.985 1.51q-.721 1.069-.721 2.317q0 1.664 1.184 2.832t2.866 1.168M12 20.962q-3.014-.895-5.007-3.651T5 11.1V5.692l7-2.615l7 2.615V11.1q0 3.454-1.993 6.21T12 20.963m0-1.062q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.23l-6 2.23V11.1q0 3.025 1.7 5.5t4.3 3.3m0-7.88"></svg:path>`,
})
export class MaterialSymbolsLightShieldMoonOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
