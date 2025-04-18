import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiTrendingDownSolidIcon],svg[mynaui-trending-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.571 6.514a.75.75 0 0 0-1.142.972l4.458 5.24c.142.168.275.323.396.447c.133.134.29.268.495.366c.297.142.628.197.955.16c.225-.026.417-.103.587-.186c.155-.077.33-.181.52-.293l2.845-1.686c.202-.12.32-.189.41-.234a1 1 0 0 1 .09-.038a.25.25 0 0 1 .126.016a1 1 0 0 1 .076.06c.077.067.173.164.337.331l3.4 3.458L14.25 18c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-.75-.75l-2.816 2.816l-3.39-3.448l-.063-.065c-.247-.252-.509-.52-.84-.659a1.75 1.75 0 0 0-.912-.118c-.356.049-.678.24-.98.421l-.079.046l-2.825 1.674a8 8 0 0 1-.44.251a1 1 0 0 1-.096.04a.25.25 0 0 1-.132-.021a1 1 0 0 1-.077-.07a8 8 0 0 1-.336-.38z"></svg:path>`,
})
export class MynauiTrendingDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
