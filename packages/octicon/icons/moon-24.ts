import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconMoon24Icon],svg[octicon-moon-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.768 3.96l-.002-.005a9 9 0 0 0-.218-.779c-.13-.394.21-.8.602-.67q.435.144.855.328l.01.005A10.002 10.002 0 0 1 12 22a10 10 0 0 1-9.162-5.985l-.004-.01a10 10 0 0 1-.329-.855c-.13-.392.277-.732.67-.602q.386.126.78.218l.004.002A9 9 0 0 0 14.999 6a9 9 0 0 0-.231-2.04M16.5 6c0 5.799-4.701 10.5-10.5 10.5q-.64 0-1.26-.075A8.5 8.5 0 1 0 16.425 4.74q.075.62.075 1.259Z"></svg:path>`,
})
export class OcticonMoon24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
