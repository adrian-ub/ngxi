import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesGifSolidIcon],svg[bubbles-gif-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.73 5.675q.123.18.193.408h1.062A2.14 2.14 0 0 0 8.182 4.7a2.4 2.4 0 0 0-.734-.393a2.8 2.8 0 0 0-.89-.14q-.566 0-1.046.202q-.48.2-.837.584a2.7 2.7 0 0 0-.557.93a3.7 3.7 0 0 0-.197 1.245q0 .91.335 1.574q.337.66.936 1.02q.6.357 1.396.357q.714 0 1.265-.29a2.15 2.15 0 0 0 .865-.832q.315-.54.315-1.278v-.691H6.698v.815h1.326a1.46 1.46 0 0 1-.174.694a1.2 1.2 0 0 1-.497.477a1.6 1.6 0 0 1-.76.169q-.482 0-.848-.233a1.56 1.56 0 0 1-.57-.689Q4.97 7.77 4.97 7.117q0-.646.205-1.096q.208-.453.57-.686q.363-.233.826-.233q.26 0 .478.068q.219.064.388.193q.172.13.292.312M11.084 10V4.245H10.04V10zm1.129-5.755V10h1.042V7.555h2.391v-.874h-2.391V5.12h2.644v-.874z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M.5 2v10a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-15a2 2 0 0 0-2 2m1 10V2a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class BubblesGifSolidIcon {
  readonly viewBox = input("0 0 20 14")
  readonly width = input("1.43em")
  readonly height = input("1em")
}
