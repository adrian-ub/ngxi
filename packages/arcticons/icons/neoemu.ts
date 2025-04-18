import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNeoemuIcon],svg[arcticons-neoemu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M13.812 35.951c-6.31 0-11.713-7.845-9.986-13.915s7.66-9.987 20.174-9.987s18.447 3.917 20.174 9.987S40.5 35.95 34.188 35.95c-4.27 0-2.936-.991-10.188-.991s-5.918.991-10.188.991Z"></svg:path><svg:circle cx="13.217" cy="21.025" r="3.924" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="13.217" cy="21.025" r="2.077" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24.279" cy="20.708" r="1.43" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="29.406" cy="14.296" r=".75" fill="currentColor"></svg:circle><svg:circle cx="28.69" cy="18.309" r="1.43" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="33.566" cy="17.74" r="1.43" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="38.214" cy="18.42" r="1.43" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" d="M22.216 34.992A56 56 0 0 1 24 34.96c7.252 0 5.918.991 10.188.991c5.7 0 10.657-6.4 10.291-12.112c-12.97-3.12-22.263.16-22.263 11.153Z"></svg:path><svg:circle cx="24.994" cy="16.695" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsNeoemuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
