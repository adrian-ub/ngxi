import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderAudioIcon],svg[hugeicons-folder-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.009 20.5c-4.718 0-7.078 0-8.543-1.465C2 17.572 2 15.215 2 10.5V7.444c0-1.816 0-2.724.38-3.406A3 3 0 0 1 3.54 2.88c.682-.38 1.59-.38 3.409-.38c1.164 0 1.747 0 2.257.191c1.164.436 1.644 1.493 2.169 2.542l.634 1.267m-5.005 0h9.759c2.108 0 3.163 0 3.92.506c.328.218.61.5.829.827c.34.51.452 1.155.488 2.167m-1 8.583v-3.166c0-1.769 0-2.653-.54-2.873s-1.176.405-2.447 1.656c-.662.651-1.047.791-1.971.791c-.82 0-1.229 0-1.523.194C13.915 15.58 14 16.363 14 17s-.085 1.419.519 1.815c.294.194.704.194 1.523.194c.924 0 1.309.14 1.97.791c1.272 1.251 1.908 1.877 2.448 1.656c.54-.22.54-1.104.54-2.873" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderAudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
