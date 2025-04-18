import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRemoveModeratorIcon],svg[material-symbols-light-remove-moderator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.042 15.473L7.377 4.796L12 3.077l7 2.615V11.1q0 1.025-.22 2.102t-.738 2.271m1.758 5.743l-3.288-3.289q-.893 1.071-2.065 1.868T12 20.961q-3.148-.932-5.074-3.727T5 11.1V6.416L2.862 4.277l.707-.708l16.939 16.939z"></svg:path>`,
})
export class MaterialSymbolsLightRemoveModeratorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
