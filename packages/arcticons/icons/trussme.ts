import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTrussmeIcon],svg[arcticons-trussme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="39.2" cy="8.8" r="3.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.82 5.5a3.3 3.3 0 1 1 0 6.6H5.5V5.5zM35.9 39.19a3.3 3.3 0 1 1 6.6 0v3.32h-6.6z"></svg:path><svg:circle cx="8.82" cy="39.2" r="3.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.12 39.2H35.9m3.3-3.31V12.1m-3.3-3.3H12.12"></svg:path><svg:circle cx="24" cy="24" r="7.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.867 11.133l-7.575 7.575M11.154 36.867L18.72 29.3m-9.9-17.2v23.8"></svg:path><svg:circle cx="39.2" cy="8.8" r=".75" fill="currentColor"></svg:circle><svg:circle cx="8.81" cy="8.8" r=".75" fill="currentColor"></svg:circle><svg:circle cx="39.2" cy="39.2" r=".75" fill="currentColor"></svg:circle><svg:circle cx="8.81" cy="39.2" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 13.8v-10m28.7 38.7h10"></svg:path><svg:circle cx="39.2" cy="44.129" r="1.629" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="42.5" cy="44.129" r="1.629" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="35.9" cy="44.129" r="1.629" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsTrussmeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
