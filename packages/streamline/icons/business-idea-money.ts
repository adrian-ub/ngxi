import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBusinessIdeaMoneyIcon],svg[streamline-business-idea-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.276 3.979a1 1 0 0 0-.943-.667H6.56a.893.893 0 0 0-.19 1.765l1.178.257a1 1 0 0 1-.214 1.978h-.666a1 1 0 0 1-.943-.667M7 3.312v-1m0 6v-1"></svg:path><svg:path d="M11.5 5.031a4.5 4.5 0 1 0-6.5 4v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1.5a4.48 4.48 0 0 0 2.5-4M5 13.5h4"></svg:path></svg:g>`,
})
export class StreamlineBusinessIdeaMoneyIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
