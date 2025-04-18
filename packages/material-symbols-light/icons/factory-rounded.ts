import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFactoryRoundedIcon],svg[material-symbols-light-factory-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 21q-.667 0-1.141-.475T3 19.386v-7.662q0-.492.258-.902t.717-.602l2.894-1.215q.404-.162.768.06q.363.223.363.667v.75l3.894-1.565q.404-.162.755.081q.351.244.351.67V11h8v8.385q0 .666-.475 1.14t-1.14.475zm6.615-3.462h1.538v-3.076h-1.538zm-4 0h1.538v-3.076H7.231zm8 0h1.538v-3.076h-1.538zm5.646-7.423h-2.875l.821-5.856q.03-.22.196-.355t.381-.135h.283q.183 0 .316.124q.134.123.159.309z"></svg:path>`,
})
export class MaterialSymbolsLightFactoryRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
