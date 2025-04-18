import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsTestTubesOutline24pxIcon],svg[healthicons-test-tubes-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 5h8V2H8z"></svg:path><svg:path fill-rule="evenodd" d="M15 6H9v12.824C9 20.578 10.343 22 12 22s3-1.422 3-3.177zm-2 8V8h-2v6zm-2 2h2v2.823c0 .76-.554 1.177-1 1.177s-1-.418-1-1.177z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsTestTubesOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
