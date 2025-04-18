import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHorseHeadIcon],svg[hugeicons-horse-head-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.014 22.534c-.21 0-.41-.08-.56-.25c-4.92-5.47-1.51-9-1.47-9.03a.76.76 0 0 1 .69-.2c.25.05.45.23.54.47c.7 1.85 3.09 1.54 3.19 1.52c.2-.03.4.02.56.15l1.77 1.36s.08-.01.14-.08l1.35-1.63c.05-.07.05-.23-.04-.32l-1.29-1.37a5.1 5.1 0 0 1-1.31-2.71c-.14-.89-.75-1.75-1.22-2.21l-.9-.93c-.2-.2-.26-.49-.17-.76l.6-1.81c-.63.2-1.35.59-1.71 1.36c-.11.24-.35.41-.62.43c-6.6.55-9.81 5.54-9.81 15.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-10.3 3.63-15.92 10.78-16.71c1.23-1.99 3.84-2.04 3.96-2.04c.22-.03.47.11.61.31s.18.45.11.68l-.86 2.57l.57.58c.66.63 1.45 1.78 1.65 3.04c.11.72.44 1.4.92 1.91l1.28 1.37c.58.61.63 1.59.12 2.27l-1.35 1.63c-.49.67-1.44.85-2.17.39l-1.59-1.22c-1.06.08-2.72-.16-3.78-1.34c-.41 1.1-.54 3.17 2.06 6.06c.28.31.25.78-.06 1.06c-.14.13-.32.19-.5.19z" color="currentColor"></svg:path>`,
})
export class HugeiconsHorseHeadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
