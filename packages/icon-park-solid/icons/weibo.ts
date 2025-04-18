import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWeiboIcon],svg[icon-park-solid-weibo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWeibo0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4.159" d="M12.562 16.41c-3.344 3.25-10.399 12.736-5.2 19.522c5.2 6.785 19.92 4.168 25.997-.613c6.077-4.78 5.477-7.734 4.16-9.036s-5.163.014-6.24-1.757s1.917-6.195-.634-7.595c-2.55-1.4-6.954 3.65-8.943 2.338c-1.99-1.312 2.189-5.596 0-6.83c-2.19-1.235-5.796.722-9.14 3.972Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4.159" d="M43.379 16.516a12.95 12.95 0 0 0-3.642-8.073a12.96 12.96 0 0 0-7.723-3.84m5.278 12.328c-.13-1.64-.867-3.117-2-4.228a7.25 7.25 0 0 0-4.24-2.01"></svg:path><svg:path fill="#000" d="M25 30c0 2.21-2.686 4-6 4s-6-1.79-6-4s2.686-4 6-4s6 1.79 6 4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWeibo0)"></svg:path>`,
})
export class IconParkSolidWeiboIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
