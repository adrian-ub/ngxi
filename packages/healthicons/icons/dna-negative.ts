import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsDnaNegativeIcon],svg[healthicons-dna-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsDnaNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM35 6v3.23a16.91 16.91 0 0 1-10.629 15.699q-.178.07-.355.147l-.016.007A14.9 14.9 0 0 0 17.185 31h13.63a14.9 14.9 0 0 0-4.569-4.71a19 19 0 0 0 1.95-1.078A16.92 16.92 0 0 1 34.907 37H35v5h-2v-3H15v3h-2v-5h.092A16.91 16.91 0 0 1 23.63 23.072q.178-.072.355-.148l.016-.007A14.9 14.9 0 0 0 30.815 17h-13.63a14.9 14.9 0 0 0 4.569 4.71a19 19 0 0 0-1.95 1.078A16.91 16.91 0 0 1 13 9.23V6h2v3h18V6zM16.162 33h15.677c.53 1.264.89 2.608 1.056 4h-17.79a15 15 0 0 1 1.056-4m15.677-18H16.162a15 15 0 0 1-1.057-4h17.79a15 15 0 0 1-1.057 4" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsDnaNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsDnaNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
