import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCloudSavingDone01Icon],svg[hugeicons-cloud-saving-done-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.5 18a4.5 4.5 0 1 0-.022-9m0 0q.021-.247.022-.5a5.5 5.5 0 0 0-10.98-.477M17.478 9a5.5 5.5 0 0 1-.578 2M6.52 8.023A5 5 0 0 0 6 17.9m.52-9.877Q6.757 8 7 8c1.126 0 2.165.372 3 1M9 19s1 0 2 2c0 0 3.177-5 6-6" color="currentColor"></svg:path>`,
})
export class HugeiconsCloudSavingDone01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
