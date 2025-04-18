import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDigitalClockIcon],svg[hugeicons-digital-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 19.25v2m14-2v2m-17-10c0-2.828 0-4.243.879-5.121C3.757 5.25 5.172 5.25 8 5.25h8c2.828 0 4.243 0 5.121.879C22 7.007 22 8.422 22 11.25v2c0 2.828 0 4.243-.879 5.121c-.878.879-2.293.879-5.121.879H8c-2.828 0-4.243 0-5.121-.879C2 17.493 2 16.078 2 13.25zm8-6l-.541-1.387a2 2 0 0 0-.058-.139c-.016-.034-.034-.065-.07-.127c-.182-.315-.294-.484-.49-.596c-.584-.335-2.098-.335-2.682 0c-.196.112-.308.281-.49.596c-.036.062-.054.093-.07.127s-.03.07-.058.14L5 5.25"></svg:path><svg:path d="M6.506 10.24v4.015m10.993-3.992v3.97M9.49 10.99h.019m-.019 2.506h.019m3.5.737h1.477a.5.5 0 0 0 .5-.5v-2.97a.5.5 0 0 0-.5-.5h-1.477a.5.5 0 0 0-.5.5v2.97a.5.5 0 0 0 .5.5"></svg:path></svg:g>`,
})
export class HugeiconsDigitalClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
