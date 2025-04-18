import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHockeyIcon],svg[hugeicons-hockey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m11.861 19.224l8.987-15.503c.32-.553.117-1.25-.457-1.565c-.565-.31-1.286-.143-1.637.38L8.612 17.67c-.376.562-1.151.742-1.758.409c-.804-.442-.684-1.23-.408-1.93c.263-.67-.02-1.421-.67-1.778c-.861-.474-1.746-.041-2.205.716c-1.319 2.175-.218 5.269 1.913 6.44c2.267 1.246 5.112-.12 6.377-2.302"></svg:path><svg:circle cx="18.5" cy="19.5" r="2.5"></svg:circle><svg:path d="m16 7l2 1.5"></svg:path></svg:g>`,
})
export class HugeiconsHockeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
