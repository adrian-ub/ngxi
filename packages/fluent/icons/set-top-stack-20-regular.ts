import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSetTopStack20RegularIcon],svg[fluent-set-top-stack-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M8 4.75a.5.5 0 0 1 .443.268l.878 1.68l1.738.208a.5.5 0 0 1 .253.887l-1.254 1l.429 1.844a.5.5 0 0 1-.744.542L8 10.137l-1.743 1.042a.5.5 0 0 1-.744-.542l.429-1.845l-1.254-.999a.5.5 0 0 1 .253-.887l1.738-.208l.878-1.68A.5.5 0 0 1 8 4.75zm0 1.58l-.557 1.065a.5.5 0 0 1-.384.265l-.812.097l.565.45a.5.5 0 0 1 .175.504l-.234 1.006l.99-.592a.5.5 0 0 1 .514 0l.99.592l-.234-1.006a.5.5 0 0 1 .175-.504l.565-.45l-.812-.097a.5.5 0 0 1-.384-.265L8 6.329z" fill="currentColor"></svg:path><svg:path d="M2 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5zm2-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4z" fill="currentColor"></svg:path><svg:path d="M6 15a2 2 0 0 1-1.732-1H12a3 3 0 0 0 3-3V5.268A2 2 0 0 1 16 7v4a4 4 0 0 1-4 4H6z" fill="currentColor"></svg:path><svg:path d="M8 17a2 2 0 0 1-1.732-1H12a5 5 0 0 0 5-5V7.268A2 2 0 0 1 18 9v2a6 6 0 0 1-6 6H8z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentSetTopStack20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
