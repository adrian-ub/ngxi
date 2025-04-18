import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifKrIcon],svg[cif-kr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#FFF" d="M.5.5h300v200H.5z"></svg:path><svg:path fill="#000" d="M101.927 38.106L74.192 79.711L46.456 61.22l27.735-41.605z"></svg:path><svg:path fill="#FFF" d="M86.904 23.082L54.547 71.621l-3.468-2.312l32.357-48.538zm10.475 6.916L65.021 78.532l-3.467-2.311l32.358-48.534z"></svg:path><svg:path fill="#000" d="m254.465 139.808l-27.735 41.605l-27.736-18.49l27.735-41.605z"></svg:path><svg:path fill="#FFF" d="m239.526 124.755l-32.358 48.534l-3.467-2.312l32.357-48.533zm10.316 6.962l-32.357 48.538l-3.468-2.311l32.357-48.539z"></svg:path><svg:path fill="#FFF" d="m245.221 161.183l-2.311 3.467l-34.672-23.113l2.312-3.467z"></svg:path><svg:circle cx="150.5" cy="100.5" r="50" fill="#C60C30"></svg:circle><svg:path fill="#003478" d="M108.898 72.765c-7.659 11.488-4.555 27.01 6.934 34.669c11.488 7.659 27.01 4.554 34.669-6.934s23.18-14.592 34.669-6.934s14.592 23.18 6.934 34.669c-15.317 22.977-46.361 29.185-69.337 13.867c-22.978-15.317-29.187-46.361-13.869-69.337"></svg:path><svg:path fill="#000" d="m74.188 121.311l27.735 41.605l-27.736 18.49L46.452 139.8z"></svg:path><svg:path fill="#FFF" d="M54.543 129.401L86.9 177.94l-3.468 2.311l-32.357-48.538zm10.482-6.955l32.358 48.534l-3.467 2.311l-32.358-48.534z"></svg:path><svg:path fill="#000" d="m226.735 19.623l27.735 41.605l-27.736 18.49l-27.735-41.605z"></svg:path><svg:path fill="#FFF" d="m207.162 27.678l32.358 48.534l-3.467 2.312l-32.358-48.535zm10.328-6.899l32.357 48.538l-3.467 2.312l-32.357-48.539z"></svg:path><svg:path fill="#FFF" d="m242.948 36.4l2.311 3.468l-34.67 23.112l-2.312-3.467z"></svg:path><svg:path fill="#000" d="m227.94 43.842l4.623 6.933l-6.934 4.623l-4.623-6.933z"></svg:path><svg:path fill="#FFF" d="m79.992 145.026l2.312 3.467l-13.87 9.246l-2.31-3.468z"></svg:path></svg:g>`,
})
export class CifKrIcon {
  readonly viewBox = input("0 0 301 201")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
