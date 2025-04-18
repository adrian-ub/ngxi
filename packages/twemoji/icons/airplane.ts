import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiAirplaneIcon],svg[twemoji-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#66757F" d="M30 23.828a.997.997 0 0 1-1.414 0l-1.414-1.414a.997.997 0 0 1 0-1.414L30 18.172a1 1 0 0 1 1.414 0l1.414 1.414a.997.997 0 0 1 0 1.414zm-15-15a.997.997 0 0 1-1.414 0l-1.414-1.414a.997.997 0 0 1 0-1.414L15 3.172a1 1 0 0 1 1.414 0l1.414 1.414a.997.997 0 0 1 0 1.414z"></svg:path><svg:path fill="#55ACEE" d="M2 22c2 0 11 1 11 1s1 9 1 11s-2 2-3 1s-4-6-4-6s-5-3-6-4s-1-3 1-3M4 6.039C7 6 29 7 29 7s.924 22 .962 25s-2.763 4.002-3.862.001S21 15 21 15S7.045 10.583 3.995 9.898C0 9 .999 6.077 4 6.039"></svg:path><svg:path fill="#CCD6DD" d="M27 3c2-2 7-3 8-2s0 6-2 8s-19 18-19 18s-6.5 4.5-8 3s3-8 3-8S25 5 27 3"></svg:path><svg:path fill="#66757F" d="M14 22s.5.5-4 5s-5 4-5 4s-.5-.5 4-5s5-4 5-4M29 4a3 3 0 0 1 3 3h.805c.114-.315.195-.645.195-1a3 3 0 0 0-3-3c-.355 0-.685.081-1 .195z"></svg:path>`,
})
export class TwemojiAirplaneIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
