import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightContactEmergencyIcon],svg[material-symbols-light-contact-emergency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.558 11.692h.884v-1.93l1.667.965l.443-.761L18.884 9l1.668-.965l-.443-.762l-1.667.966V6.308h-.884v1.93l-1.668-.965l-.442.762L17.115 9l-1.667.966l.442.761l1.668-.965zM2.616 19.616q-.691 0-1.153-.463T1 18V6q0-.69.463-1.153t1.152-.463h18.77q.69 0 1.153.463T23 6v12q0 .69-.462 1.153t-1.153.463zM9 14.23q1.039 0 1.77-.731t.73-1.77t-.73-1.768T9 9.23t-1.77.73t-.73 1.77t.73 1.769t1.77.73m-5.784 4.386h11.569q-1.05-1.356-2.554-2.178T9 15.616t-3.23.822t-2.554 2.178"></svg:path>`,
})
export class MaterialSymbolsLightContactEmergencyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
