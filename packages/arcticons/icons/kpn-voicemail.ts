import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKpnVoicemailIcon],svg[arcticons-kpn-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.835 2.606c-10.078.985-18.229 9.135-19.227 19.211c-.442 4.47.492 8.688 2.422 12.296c.636 1.189.816 2.568.433 3.86l-.91 3.069c-.437 1.472.933 2.842 2.405 2.405l3.068-.91c1.293-.383 2.672-.203 3.861.433c3.608 1.93 7.826 2.864 12.295 2.422c10.077-.998 18.227-9.15 19.212-19.227C46.72 12.59 35.41 1.279 21.835 2.606"></svg:path><svg:circle cx="16" cy="24" r="6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="32" cy="24" r="6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16 30h16"></svg:path>`,
})
export class ArcticonsKpnVoicemailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
