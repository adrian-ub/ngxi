import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ShieldFillIcon],svg[f7-shield-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.988 51.297c.375 0 .961-.14 1.57-.445C42.66 43.469 47.185 40.375 47.185 31.96V14.289c0-2.414-1.055-3.187-3-4.008c-2.743-1.125-11.532-4.289-14.25-5.25c-.633-.187-1.266-.328-1.946-.328c-.656 0-1.289.14-1.922.328c-2.718.985-11.507 4.149-14.25 5.25c-1.945.797-3 1.594-3 4.008v17.672c0 8.414 4.547 11.484 17.625 18.89c.61.305 1.172.446 1.547.446"></svg:path>`,
})
export class F7ShieldFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
