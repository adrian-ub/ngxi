import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignDotChartOutlinedIcon],svg[ant-design-dot-chart-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8M288 604a64 64 0 1 0 128 0a64 64 0 1 0-128 0m118-224a48 48 0 1 0 96 0a48 48 0 1 0-96 0m158 228a96 96 0 1 0 192 0a96 96 0 1 0-192 0m148-314a56 56 0 1 0 112 0a56 56 0 1 0-112 0"></svg:path>`,
})
export class AntDesignDotChartOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
