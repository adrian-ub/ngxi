import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHeadsetConnectedIcon],svg[hugeicons-headset-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 13.805c0-.346 0-.519.042-.673c.12-.448.44-.621.759-.803c.359-.205.539-.307.716-.325a.85.85 0 0 1 .577.155c.23.16.389.466.552.714c.755 1.146 1.132 1.719 1.27 2.35c.112.51.112 1.044 0 1.553c-.201.922-.837 1.694-1.308 2.41c-.241.365-.361.548-.514.655a.85.85 0 0 1-.577.155c-.177-.018-.357-.12-.716-.325c-.32-.182-.638-.355-.76-.803c-.041-.154-.041-.327-.041-.672zm-9 1.31C9.862 14.41 10.89 14 11.996 14c1.109 0 2.14.412 3.004 1.121M13.63 17.5a3.06 3.06 0 0 0-1.634-.482a3.06 3.06 0 0 0-1.627.477M12 20h.006M6 13.805c0-.436-.01-.827-.291-1.133c-.103-.111-.238-.188-.51-.343c-.359-.204-.539-.307-.716-.325c-.534-.054-.821.402-1.13.87c-.754 1.145-1.131 1.718-1.27 2.35a3.65 3.65 0 0 0 0 1.552c.202.922.838 1.694 1.31 2.41c.296.45.58.861 1.09.81c.177-.018.357-.12.716-.325c.272-.155.407-.232.51-.343c.281-.306.291-.697.291-1.133z"></svg:path><svg:path d="M20 12v-1.125C20 6.525 16.418 3 12 3s-8 3.526-8 7.875V12"></svg:path></svg:g>`,
})
export class HugeiconsHeadsetConnectedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
