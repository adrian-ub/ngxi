import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosOpenZeppelinIconIcon],svg[logos-open-zeppelin-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#63D2F9" d="M256 283.747v-73.86h-80.434c-21.874 0-42.136 11.482-53.339 30.228l-26.076 43.632z"></svg:path><svg:path fill="#4E5EE4" d="M0 0v73.861h211.857L256 0z"></svg:path><svg:path fill="#63B0F9" d="M101.392 115.433L.233 283.747h86.185L207.387 82.383h-47.592c-23.938 0-46.116 12.55-58.403 33.05"></svg:path>`,
})
export class LogosOpenZeppelinIconIcon {
  readonly viewBox = input("0 0 256 284")
  readonly width = input("0.91em")
  readonly height = input("1em")
}
