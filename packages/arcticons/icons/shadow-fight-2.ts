import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShadowFight2Icon],svg[arcticons-shadow-fight-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.706 25.402a91 91 0 0 1-29.033-6.248m20.485 4.54l-.297 1.847"></svg:path><svg:circle cx="29.345" cy="11.846" r="2.461" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.53 25.301l1.557-4.204l-2.6-5.652l-7.596 4.48l3.305 4.92m4.53-10.555l-3.759 15.645M13.483 42.733l11.484-12.798l8.028 4.51l1.08 8.51"></svg:path><svg:circle cx="24.196" cy="24.846" r=".75" fill="currentColor"></svg:circle><svg:circle cx="29.529" cy="25.301" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.398 17.35a18.7 18.7 0 1 1 30.797 19.62M11.95 38.071a18.7 18.7 0 0 1-6.68-14.325"></svg:path>`,
})
export class ArcticonsShadowFight2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
