import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoleIcon],svg[arcticons-mole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.503 9.711a13.703 13.703 0 0 1 20.994 0M18.73 17.887a50 50 0 0 0-14.23.527v24.77c5.675-2.187 12.167-1.673 19.5-.527m5.27-24.77a50 50 0 0 1 14.23.527v24.77c-5.674-2.187-12.167-1.673-19.5-.527"></svg:path><svg:circle cx="24" cy="18.413" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.752 14.115a6.85 6.85 0 0 1 10.496 0M24 23.684v18.973m3.162-11.595h12.122m-31.094 0h12.12m-6.06-6.324v12.648"></svg:path>`,
})
export class ArcticonsMoleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
