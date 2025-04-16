import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsCircleStackSolidIcon],svg[heroicons-circle-stack-solid-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375S7.03 1.5 12 1.5s9 2.183 9 4.875"></svg:path><svg:path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.3 8.3 0 0 0 1.897-1.384q.024.182.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875q0-.186.025-.368a8.3 8.3 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75"></svg:path><svg:path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.3 8.3 0 0 0 1.897-1.384q.024.182.025.368c0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875q0-.186.025-.368a8.3 8.3 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5"></svg:path><svg:path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.3 8.3 0 0 0 1.897-1.384q.024.182.025.368c0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875q0-.186.025-.368a8.3 8.3 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25"></svg:path></svg:g>`,
})
export class HeroiconsCircleStackSolidIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
