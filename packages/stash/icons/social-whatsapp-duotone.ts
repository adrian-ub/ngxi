import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashSocialWhatsappDuotoneIcon],svg[stash-social-whatsapp-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 4.428a7.572 7.572 0 0 0-6.183 11.944a.75.75 0 0 1 .077.731L4.82 19.586l3.147-.913a.75.75 0 0 1 .554.054A7.572 7.572 0 1 0 12 4.428M2.928 12a9.072 9.072 0 1 1 5.176 8.195L3.71 21.47a.75.75 0 0 1-.897-1.018l1.542-3.568A9.03 9.03 0 0 1 2.928 12"></svg:path><svg:path d="M4.428 12a7.572 7.572 0 1 1 4.093 6.727a.75.75 0 0 0-.554-.054l-3.147.913l1.074-2.483a.75.75 0 0 0-.077-.731A7.53 7.53 0 0 1 4.428 12m8.944 2.753c-.372.22-1.187.287-2.736-1.262s-1.482-2.363-1.262-2.736c.56-.057 1.097-.432 1.595-.93c.369-.369.07-1.264-.666-2c-.737-.737-1.632-1.035-2-.667c-2.372 2.371-1.184 5.482 1 7.667c2.214 2.214 5.238 3.428 7.666 1c.369-.369.07-1.264-.666-2c-.737-.737-1.632-1.035-2-.667c-.499.498-.874 1.035-.93 1.595" opacity=".5"></svg:path></svg:g>`,
})
export class StashSocialWhatsappDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
