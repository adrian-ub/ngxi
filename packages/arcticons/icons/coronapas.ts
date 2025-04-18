import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoronapasIcon],svg[arcticons-coronapas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.342 30.023H30.21m-12.868 3.091H30.21m-12.521-4.255s-5.507-5.616-.375-6.524"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.677 28.859s-4.44-4.795-3.072-7.53s5.242-1.309 6.17.282"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.317 20.346a1.46 1.46 0 0 1 1.459-1.563V17.76m0-1.426v-1.448m-2.188 2.143h1.438m7.184 14.54H17.342m12.521-2.71s5.507-5.616.375-6.524"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.876 28.859s4.44-4.795 3.071-7.53s-5.242-1.309-6.17.282"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.234 20.346a1.46 1.46 0 0 0-1.459-1.563V17.76m.001-1.426v-1.448m2.189 2.143h-1.439m-.75 4.582v7.248"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.404 6.549H10.612a1.94 1.94 0 0 0-1.985 1.895v33.161a1.94 1.94 0 0 0 1.985 1.895h26.792a1.94 1.94 0 0 0 1.984-1.895V8.444a1.94 1.94 0 0 0-1.984-1.895"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.803 6.343a1.88 1.88 0 0 0-1.949-1.838l-24.55 1.912a1.937 1.937 0 0 0-1.688 2.121"></svg:path>`,
})
export class ArcticonsCoronapasIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
