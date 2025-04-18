import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSettingsInputComponentSharpIcon],svg[material-symbols-light-settings-input-component-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.904 22v-4.458L2 15.638v-2.772h4.808v2.773l-1.904 1.903V22zm7.596 0v-4.458L9.596 15.64v-2.773h4.808v2.773L12.5 17.542V22zm7.596 0v-4.458l-1.904-1.903v-2.773H22v2.773l-1.904 1.903V22zM2 11.866V6.173h1.904V2h1v4.173h1.904v5.693zm7.596 0V6.173H11.5V2h1v4.173h1.904v5.693zm7.596 0V6.173h1.904V2h1v4.173H22v5.693z"></svg:path>`,
})
export class MaterialSymbolsLightSettingsInputComponentSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
