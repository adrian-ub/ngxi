import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAppSearchProfilerIcon],svg[oui-app-search-profiler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.63 8h7.38v2h-7.38z" class="ouiIcon__fillSecondary"></svg:path><svg:path fill="currentColor" d="M7 8h3.19v2H7z"></svg:path><svg:path fill="currentColor" d="M7 16h7.38v2H7z" class="ouiIcon__fillSecondary"></svg:path><svg:path fill="currentColor" d="M15.81 16H19v2h-3.19zM7 12h9v2H7z"></svg:path><svg:path fill="currentColor" d="M13 0C5.82 0 0 5.82 0 13s5.82 13 13 13s13-5.82 13-13A13 13 0 0 0 13 0m0 24C6.925 24 2 19.075 2 13S6.925 2 13 2s11 4.925 11 11s-4.925 11-11 11m9.581-.007l1.414-1.414l7.708 7.708l-1.414 1.414z"></svg:path>`,
})
export class OuiAppSearchProfilerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
