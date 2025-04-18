import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiGpsIcon],svg[zmdi-gps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M425 219h44v42h-44q-7 67-54.5 114.5T256 431v44h-43v-44q-66-8-114-55.5T44 261H0v-42h44q7-67 55-114.5T213 49V5h43v44q67 8 114.5 55.5T425 219M235 389q62 0 105.5-43.5T384 240t-43.5-105.5T235 91t-106 43.5T85 240t44 105.5T235 389"></svg:path>`,
})
export class ZmdiGpsIcon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
