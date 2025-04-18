import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFolderAltLightIcon],svg[lets-icons-folder-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M3.5 7.5c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C5.4 3.5 6.1 3.5 7.5 3.5h9c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C20.5 5.4 20.5 6.1 20.5 7.5v9c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092c-.535.273-1.235.273-2.635.273h-9c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C3.5 18.6 3.5 17.9 3.5 16.5z"></svg:path><svg:path d="M3.5 8.5h2.764c.97 0 1.455 0 1.866.197a2 2 0 0 1 .36.222c.36.28.576.713 1.01 1.581s.65 1.302 1.01 1.58q.17.131.36.223c.41.197.896.197 1.866.197H17.5c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.152-.367.152-.833.152-1.765"></svg:path><svg:path stroke-linecap="round" d="M7 16h8"></svg:path></svg:g>`,
})
export class LetsIconsFolderAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
