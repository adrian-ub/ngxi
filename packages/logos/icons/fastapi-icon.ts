import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosFastapiIconIcon],svg[logos-fastapi-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009688" d="M128 0C57.33 0 0 57.33 0 128s57.33 128 128 128s128-57.33 128-128S198.67 0 128 0m-6.67 230.605v-80.288H76.699l64.128-124.922v80.288h42.966z"></svg:path>`,
})
export class LogosFastapiIconIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
