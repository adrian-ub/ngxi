import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laDeviantartIcon],svg[la-deviantart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.375 4l-.281.313l-.407.375l-.093.125l-.063.125l-1.781 3.375l-.156.093H8.188v7.5h3.593l-3.469 6.625l-.124.219V28h5.437l.281-.313l.406-.375l.094-.125l.063-.125l1.781-3.375l.156-.093h7.407v-7.5h-3.594l3.468-6.625l.125-.219V4zm.844 2h2.593v2.781l-3.937 7.469l-.281.594l.406.5l.344.406l.281.344h3.188v3.5H15.78l-.281.187l-.594.375l-.187.157l-.125.218L12.78 26h-2.594v-2.781l3.907-7.469l.312-.563l-.406-.53l-.344-.407l-.281-.344h-3.188v-3.5h6.032l.25-.187l.593-.375l.22-.156l.124-.22z"></svg:path>`,
})
export class LaDeviantartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
