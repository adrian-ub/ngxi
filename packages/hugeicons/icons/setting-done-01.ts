import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSettingDone01Icon],svg[hugeicons-setting-done-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20.232 10.055c.48-.54 1.308-1.356 1.264-1.689c.034-.323-.141-.627-.491-1.234l-.494-.856c-.373-.648-.56-.972-.877-1.101c-.318-.13-.677-.028-1.395.176l-1.22.344c-.46.106-.94.046-1.359-.17l-.337-.194a2 2 0 0 1-.788-.968l-.334-.997c-.22-.66-.33-.99-.59-1.179C13.348 2 13 2 12.306 2h-1.114c-.695 0-1.042 0-1.303.188c-.262.19-.371.52-.591 1.18l-.334.996a2 2 0 0 1-.788.968l-.337.195c-.419.215-.9.275-1.359.169l-1.22-.344c-.718-.204-1.077-.306-1.395-.176c-.317.129-.504.453-.877 1.1l-.494.857c-.35.607-.525.911-.49 1.234c.033.323.267.584.736 1.105l1.03 1.152c.253.32.432.876.432 1.375c0 .5-.18 1.056-.431 1.375L2.74 14.526c-.469.521-.703.781-.737 1.105s.141.627.491 1.234l.494.856c.373.648.56.972.877 1.101c.318.13.677.028 1.395-.176l1.22-.344a2 2 0 0 1 1.36.17l.336.194c.359.23.635.569.788.968l.334.997c.22.66.34 1.003.541 1.148c.06.043.3.24.888.221M15 17.218s1 .284 1.5 1.284c0 0 1.096-2.5 2.508-3"></svg:path><svg:path d="M22 16.999a5 5 0 1 1-10 0a5 5 0 0 1 10 0m-7.84-7.556c-.84-.684-1.5-.948-2.46-.948c-1.8.024-3.444 1.51-3.444 3.444c0 1.065.324 1.74.936 2.448"></svg:path></svg:g>`,
})
export class HugeiconsSettingDone01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
