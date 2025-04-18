import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggGirlIcon],svg[gg-girl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill-rule="evenodd" d="M12.024 2H12C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10c0-5.258-4.058-9.568-9.212-9.97v-.002A10 10 0 0 0 12.025 2M12 20a8 8 0 0 0 7.742-10.022a10.02 10.02 0 0 1-8.981-4.376a7.98 7.98 0 0 1-5.692 2.4A8 8 0 0 0 12 20m-.021-16h.045z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgGirlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
