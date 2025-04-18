import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMicrosoft365Icon],svg[arcticons-microsoft-365-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.507 3.241L8.443 9.74a8.6 8.6 0 0 0-4.508 7.563V30.7a8.6 8.6 0 0 0 4.508 7.564m15.668-5.597l-2.826-1.557a8.6 8.6 0 0 1-4.45-7.532v-4.072"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.166 19.275v4.45a8.6 8.6 0 0 1-4.508 7.564l-11.466 6.202a8.6 8.6 0 0 1-7.435.358q.33.222.687.414l11.465 6.202a8.6 8.6 0 0 0 8.182 0l11.465-6.202a8.6 8.6 0 0 0 4.508-7.563"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.557 9.739L28.092 3.536a8.6 8.6 0 0 0-7.585-.295a8.6 8.6 0 0 0-3.673 7.048v8.986l3.288-1.661a8.6 8.6 0 0 1 7.756 0l11.465 5.793a8.6 8.6 0 0 1 4.72 7.484l.001-.191V17.302a8.6 8.6 0 0 0-4.507-7.563"></svg:path>`,
})
export class ArcticonsMicrosoft365Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
