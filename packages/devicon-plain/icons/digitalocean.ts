import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainDigitaloceanIcon],svg[devicon-plain-digitalocean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M63.724 110.725V92.543c19.352 0 34.282-19.008 26.817-39.118c-2.765-7.438-8.57-13.499-16.312-16.254c-19.905-7.162-38.982 7.714-38.982 26.722H17c0-30.303 29.582-54.27 61.93-44.352c14.1 4.407 25.158 15.427 29.582 29.476c9.953 32.231-14.1 61.708-44.788 61.708z"></svg:path><svg:path fill="currentColor" d="M64 92.543H45.753V74.637H64v17.906zm-18.247 14.05H31.929v-14.05h13.824v14.05zm-13.824-14.05H20.318v-11.57h11.611v11.57z"></svg:path>`,
})
export class DeviconPlainDigitaloceanIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
