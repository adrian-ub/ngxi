import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBreastPumpIcon],svg[hugeicons-breast-pump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.214 22h2.572c1.61 0 2.414 0 2.961-.436q.176-.141.317-.317c.436-.547.436-1.352.436-2.961V14a5 5 0 0 0-10 0v4.286c0 1.61 0 2.414.436 2.961a2 2 0 0 0 .317.317C8.8 22 9.605 22 11.214 22M15 14h2.5M15 18h2.5m-5-9V6M15 6H9c-.488 0-.732 0-.963.027A4 4 0 0 0 5.6 7.246c-.16.168-.306.364-.599.754"></svg:path><svg:circle cx="4.5" cy="9.5" r="1.5"></svg:circle><svg:path d="M15 6c1.02-.509 2.6-1.824 3.34-2.71C18.87 2.657 19.5 2 21 2v8c-1.5 0-2.13-.657-2.66-1.29C17.6 7.822 16.02 6.507 15 6"></svg:path></svg:g>`,
})
export class HugeiconsBreastPumpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
