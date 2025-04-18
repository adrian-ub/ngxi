import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMove02Icon],svg[hugeicons-move-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.875 13.158l2.136 1.83v-9.76a1.752 1.752 0 1 1 3.503 0v5.256l2.99.478c1.931.29 2.896.435 3.576.842c1.123.673 1.937 1.684 1.937 3.16c0 1.027-.254 1.717-.871 3.57c-.392 1.175-.588 1.762-.907 2.227a4 4 0 0 1-2.194 1.582c-.543.156-1.162.156-2.4.156h-1.05c-1.647 0-2.47 0-3.203-.302a4 4 0 0 1-.385-.183c-.697-.379-1.216-1.018-2.255-2.296l-3.361-4.139a1.742 1.742 0 0 1 2.484-2.42M16.919 2.368l.805-.758a.4.4 0 0 1 .273-.108m1.109.866l-.838-.762a.4.4 0 0 0-.271-.104m1.109 7.109l-.806.757a.4.4 0 0 1-.303.108m-1.078-.865l.837.762a.4.4 0 0 0 .24.103m0-7.974v7.974m3.137-5.08l.757.805a.4.4 0 0 1 .109.273m-.866 1.11l.762-.839a.4.4 0 0 0 .104-.271m-7.104 1.11l-.757-.806a.4.4 0 0 1-.108-.304m.865-1.079l-.762.838a.4.4 0 0 0-.103.24m7.969 0h-7.97" color="currentColor"></svg:path>`,
})
export class HugeiconsMove02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
