import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsHeadingH2Icon],svg[gridicons-heading-h2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 7h2v10H9v-4H5v4H3V7h2v4h4zm8 8c.51-.41.6-.62 1.06-1.05q.656-.601 1.23-1.28a6.4 6.4 0 0 0 .85-1.28c.199-.39.305-.822.31-1.26a3 3 0 0 0-.27-1.28a2.9 2.9 0 0 0-.76-1a3.5 3.5 0 0 0-1.17-.63a4.8 4.8 0 0 0-1.5-.22q-.54 0-1.07.1a5 5 0 0 0-1 .29a4.4 4.4 0 0 0-.86.49q-.431.315-.82.68l1.24 1.22a6 6 0 0 1 1-.7c.35-.201.747-.304 1.15-.3a1.9 1.9 0 0 1 1.27.38c.311.278.477.684.45 1.1a2.13 2.13 0 0 1-.36 1.11a7 7 0 0 1-1 1.25c-.44.43-.98.92-1.59 1.43S13.75 15.11 13 15.7V17h8v-2z"></svg:path>`,
})
export class GridiconsHeadingH2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
