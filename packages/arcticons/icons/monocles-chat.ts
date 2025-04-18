import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMonoclesChatIcon],svg[arcticons-monocles-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.004 27.816s1.342-1.052 2.164-.65c2.756 1.347 3.96 5.414 9.71 2.302c-3.924 7.14-10.172 4.097-11.874 1.598c-1.701 2.5-7.95 5.541-11.873-1.598c5.749 3.112 6.954-.955 9.71-2.303c.821-.401 2.163.651 2.163.651"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.423 27.343v-4.941"></svg:path><svg:circle cx="30.826" cy="19.381" r="3.742" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="37.423" cy="19.381" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.578 27.343v-4.941"></svg:path><svg:circle cx="17.174" cy="19.381" r="3.742" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="10.578" cy="19.381" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.15 34.36L2.5 45.5l11.14-2.65"></svg:path>`,
})
export class ArcticonsMonoclesChatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
