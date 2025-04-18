import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPodiumIcon],svg[hugeicons-podium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9.294 14c-1.374 0-2.062 0-2.637-.236a3.35 3.35 0 0 1-1.551-1.315c-.343-.543-.494-1.254-.796-2.675c-.258-1.216-.387-1.823-.262-2.305a1.98 1.98 0 0 1 .931-1.233C5.395 6 5.983 6 7.159 6h9.683c1.175 0 1.763 0 2.179.236c.457.258.793.704.93 1.233c.126.482-.003 1.09-.26 2.305c-.303 1.421-.454 2.132-.797 2.675a3.34 3.34 0 0 1-1.551 1.315C16.768 14 16.08 14 14.706 14M6 6l.515-2.06A2.56 2.56 0 0 1 9 2m9 4l-.515-2.06A2.56 2.56 0 0 0 15 2"></svg:path><svg:path d="m9.284 12l.776 5.573c.045.322.068.484.023.61c-.206.582-.995.204-1.422.38a.9.9 0 0 0-.341.248c-.112.13-.181.308-.32.665c-.261.674-.85 1.623-.217 2.262c.26.262.72.262 1.64.262h5.153c.921 0 1.382 0 1.641-.262c.633-.64.044-1.588-.217-2.262c-.139-.357-.208-.535-.32-.665a.9.9 0 0 0-.34-.248c-.428-.176-1.217.202-1.423-.38c-.045-.126-.022-.288.023-.61L14.716 12"></svg:path></svg:g>`,
})
export class HugeiconsPodiumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
