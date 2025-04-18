import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShieldBlockchainIcon],svg[hugeicons-shield-blockchain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.998 2c-2.85 0-4.697 2.019-6.882 2.755c-.888.3-1.333.449-1.512.66c-.18.21-.233.519-.338 1.135c-1.127 6.596 1.336 12.694 7.209 15.068c.631.255.947.382 1.526.382s.896-.128 1.527-.383c5.873-2.373 8.333-8.471 7.206-15.067c-.106-.616-.158-.925-.338-1.136s-.624-.36-1.512-.659C16.698 4.019 14.848 2 11.998 2"></svg:path><svg:path d="M12 16c.14 0 .27-.064.529-.19l2.086-1.023c.923-.453 1.385-.679 1.385-1.037v-4.5M12 16c-.14 0-.27-.064-.529-.19l-2.086-1.023C8.462 14.334 8 14.108 8 13.75v-4.5M12 16v-4.5m4-2.25c0-.358-.462-.584-1.385-1.037L12.53 7.191C12.269 7.064 12.139 7 12 7c-.14 0-.27.064-.529.19L9.385 8.214C8.462 8.666 8 8.892 8 9.25m8 0c0 .358-.462.584-1.385 1.037l-2.086 1.022c-.26.127-.39.191-.529.191M8 9.25c0 .358.462.584 1.385 1.037l2.086 1.022c.26.127.39.191.529.191"></svg:path></svg:g>`,
})
export class HugeiconsShieldBlockchainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
