import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eiRetweetIcon],svg[ei-retweet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M38 35h-2V17c0-.6-.4-1-1-1H18v-2h17c1.7 0 3 1.3 3 3z"></svg:path><svg:path fill="currentColor" d="m37 36.5l-6.8-7.8l1.6-1.4l5.2 6.2l5.2-6.2l1.6 1.4zm-5-.5H15c-1.7 0-3-1.3-3-3V15h2v18c0 .6.4 1 1 1h17z"></svg:path><svg:path fill="currentColor" d="M18.2 22.7L13 16.5l-5.2 6.2l-1.6-1.4l6.8-7.8l6.8 7.8z"></svg:path>`,
})
export class EiRetweetIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
