import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAiMicIcon],svg[hugeicons-ai-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 17c-3.17 0-5.75-2.58-5.75-5.75v-4C6.25 4.08 8.83 1.5 12 1.5c.41 0 .75.34.75.75S12.41 3 12 3a4.26 4.26 0 0 0-4.25 4.25v4A4.26 4.26 0 0 0 12 15.5a4.26 4.26 0 0 0 4.25-4.25c0-.41.34-.75.75-.75s.75.34.75.75c0 3.17-2.58 5.75-5.75 5.75m0 6c-.41 0-.75-.34-.75-.75v-2.28c-4.48-.38-8-4.15-8-8.72c0-.41.34-.75.75-.75s.75.34.75.75c0 4 3.25 7.25 7.25 7.25s7.25-3.25 7.25-7.25c0-.41.34-.75.75-.75s.75.34.75.75c0 4.57-3.52 8.34-8 8.72v2.28c0 .41-.34.75-.75.75m3.9-14.99c.07.56.54.99 1.1.99s1.03-.42 1.1-.99c.11-.87.79-1.55 1.66-1.66c.56-.07.99-.54.99-1.1s-.43-1.03-.99-1.1a1.91 1.91 0 0 1-1.66-1.66A1.12 1.12 0 0 0 17 1.5c-.56 0-1.03.42-1.1.99a1.91 1.91 0 0 1-1.66 1.66c-.56.07-.99.54-.99 1.1s.43 1.03.99 1.1c.87.11 1.55.79 1.66 1.66m1.1-1.4c-.31-.57-.79-1.05-1.36-1.36c.57-.31 1.05-.79 1.36-1.36c.31.57.79 1.05 1.36 1.36c-.57.31-1.05.79-1.36 1.36" color="currentColor"></svg:path>`,
})
export class HugeiconsAiMicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
