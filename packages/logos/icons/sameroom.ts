import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosSameroomIcon],svg[logos-sameroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="256" height="256" fill="#78787A" rx="14"></svg:rect><svg:path fill="#FFF" d="M80.437 114.495c0 18.828-15.263 34.09-34.091 34.09s-34.09-15.262-34.09-34.09s15.262-34.09 34.09-34.09s34.091 15.262 34.091 34.09"></svg:path><svg:path fill="#1B94B8" d="M65.57 114.495c0 10.617-8.607 19.223-19.224 19.223s-19.223-8.606-19.223-19.223s8.606-19.224 19.223-19.224s19.224 8.607 19.224 19.224"></svg:path><svg:path fill="#FFF" d="M245.168 114.495c0 18.828-15.264 34.09-34.092 34.09s-34.09-15.262-34.09-34.09s15.262-34.09 34.09-34.09s34.092 15.262 34.092 34.09"></svg:path><svg:path fill="#1B94B8" d="M230.301 114.495c0 10.617-8.607 19.223-19.224 19.223s-19.224-8.606-19.224-19.223s8.607-19.224 19.224-19.224s19.224 8.607 19.224 19.224"></svg:path><svg:path d="M127.903 209.484c-17.907 0-38.038-5.336-58.089-21.416a8.66 8.66 0 0 1 10.833-13.514c48.448 38.867 96.529 2.085 98.55.495c3.763-2.948 9.2-2.296 12.156 1.45c2.951 3.751 2.326 9.175-1.416 12.14c-.398.317-26.926 20.845-62.034 20.845"></svg:path>`,
})
export class LogosSameroomIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
