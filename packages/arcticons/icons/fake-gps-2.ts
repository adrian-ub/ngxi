import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFakeGps2Icon],svg[arcticons-fake-gps-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.507 42.19C24.58 43.039 24 43.5 24 43.5s-.58-.462-1.507-1.31"></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="3.986 3.986" stroke-linecap="round" stroke-linejoin="round" d="M19.66 39.392c-4.204-4.48-9.948-12.147-9.948-20.604C9.712 10.897 16.11 4.5 24 4.5s14.288 6.397 14.288 14.288c0 9.435-7.15 17.888-11.334 22.027"></svg:path><svg:circle cx="24" cy="18.788" r="6" fill="none" stroke="currentColor" stroke-dasharray="3.764 3.764" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsFakeGps2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
