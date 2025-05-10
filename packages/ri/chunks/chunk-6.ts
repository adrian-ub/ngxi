import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riWebhookLineIcon],svg[ri-webhook-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.869 14.14c-.213.351-.319.638-.149 1.085c.47 1.236-.193 2.439-1.439 2.766c-1.175.308-2.32-.465-2.554-1.723c-.207-1.114.658-2.206 1.886-2.38c.067-.01.134-.014.22-.02q.07-.003.16-.01l1.869-3.132c-1.175-1.169-1.874-2.534-1.72-4.227c.11-1.196.58-2.23 1.44-3.077a4.89 4.89 0 0 1 6.098-.64c1.862 1.196 2.715 3.527 1.988 5.521l-1.707-.463c.229-1.109.06-2.105-.688-2.958c-.494-.563-1.128-.858-1.85-.967c-1.445-.218-2.864.71-3.285 2.129c-.478 1.61.246 2.925 2.222 3.916c-.829 1.394-1.651 2.792-2.491 4.18m4.915-5.867l1.806 3.186c3.041-.94 5.334.743 6.156 2.545c.994 2.177.315 4.755-1.637 6.098c-2.002 1.379-4.535 1.143-6.31-.628l1.393-1.165c1.752 1.136 3.285 1.082 4.423-.262a3.05 3.05 0 0 0-.05-3.979c-1.151-1.295-2.695-1.335-4.56-.091c-.775-1.373-1.562-2.736-2.311-4.119c-.253-.466-.532-.736-1.102-.835c-.95-.165-1.565-.981-1.602-1.897a2.08 2.08 0 0 1 1.33-2.041a2.075 2.075 0 0 1 2.35.64c.454.574.598 1.22.36 1.927a7 7 0 0 1-.159.407zm-2.232 8.622h3.66q.077.102.146.2c.097.138.19.268.297.384a2.07 2.07 0 0 0 2.913.1a2.074 2.074 0 0 0 .086-2.969c-.794-.814-2.151-.892-2.889-.03c-.447.524-.906.586-1.5.577c-1.524-.024-3.047-.008-4.57-.008c.1 2.142-.71 3.476-2.317 3.793c-1.572.31-3.02-.492-3.53-1.956c-.58-1.663.137-2.994 2.206-4.05l-.469-1.7c-2.255.492-3.948 2.68-3.773 5.142c.155 2.173 1.908 4.104 4.052 4.45a4.88 4.88 0 0 0 3.273-.584c1.306-.74 2.064-1.906 2.415-3.349"></svg:path>`,
})
export class RiWebhookLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWechat2FillIcon],svg[ri-wechat-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.458 18.185C3.359 16.677 2 14.4 2 11.908C2 7.323 6.475 3.6 12 3.6s10 3.723 10 8.308c0 4.584-4.475 8.308-10 8.308a11.4 11.4 0 0 1-3.272-.462c-.092-.03-.216-.03-.308-.03c-.185 0-.37.06-.525.153l-2.191 1.262c-.062.03-.124.061-.186.061a.34.34 0 0 1-.339-.338c0-.093.03-.154.062-.246c.03-.031.308-1.047.463-1.662c0-.062.03-.154.03-.215q0-.37-.277-.554m3.21-7.673c.717 0 1.285-.569 1.285-1.286S9.385 7.94 8.668 7.94s-1.285.568-1.285 1.286c0 .717.567 1.285 1.285 1.285m6.666 0c.718 0 1.285-.569 1.285-1.286s-.567-1.286-1.285-1.286c-.717 0-1.285.568-1.285 1.286c0 .717.568 1.285 1.285 1.285"></svg:path>`,
})
export class RiWechat2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWechat2LineIcon],svg[ri-wechat-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.667 11.511a1.276 1.276 0 0 1-1.285-1.285c0-.718.568-1.286 1.285-1.286c.718 0 1.285.568 1.285 1.286c0 .717-.567 1.285-1.285 1.285m6.667 0a1.276 1.276 0 0 1-1.285-1.285c0-.718.568-1.286 1.285-1.286s1.285.568 1.285 1.286c0 .717-.568 1.285-1.285 1.285m-8.511 7.704l.715-.436a4 4 0 0 1 2.706-.536q.317.05.52.076q.61.081 1.237.081c4.42 0 7.9-3.022 7.9-6.6S16.42 5.2 12 5.2c-4.421 0-7.9 3.022-7.9 6.6c0 1.365.5 2.673 1.431 3.78q.073.088.215.236a4 4 0 0 1 1.1 3.102zm-.63 2.727a1 1 0 0 1-1.527-.93l.189-2.26a2 2 0 0 0-.55-1.551a7 7 0 0 1-.303-.333C2.806 15.447 2.1 13.695 2.1 11.8c0-4.75 4.432-8.6 9.9-8.6c5.467 0 9.9 3.85 9.9 8.6s-4.433 8.6-9.9 8.6q-.765-.001-1.5-.098q-.229-.03-.568-.084a2 2 0 0 0-1.353.268z"></svg:path>`,
})
export class RiWechat2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWechatChannelsFillIcon],svg[ri-wechat-channels-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.194 3.181c1.162-.47 2.155-.019 2.672 1.277C23.26 7.944 20 21.133 17.441 21.133c-.828 0-1.657-.688-2.624-1.926a23 23 0 0 1-1.357-1.974c-.374-.6-.742-1.232-1.095-1.87L12 14.69l-.018.032a44 44 0 0 1-1.442 2.511c-.467.75-.922 1.416-1.358 1.974c-.966 1.238-1.795 1.926-2.623 1.926C4 21.133.74 7.943 2.133 4.458C2.651 3.162 3.644 2.71 4.806 3.18c.842.34 1.772 1.156 2.81 2.376A32 32 0 0 1 9.548 8.11a59 59 0 0 1 2.137 3.36l.316.538l.316-.538a62 62 0 0 1 1.696-2.71l.44-.65a32 32 0 0 1 1.931-2.553c1.039-1.22 1.968-2.035 2.81-2.376M4.324 4.353c-.49-.199-.743-.084-1.005.57c-.457 1.145-.265 4.028.413 7.264l.158.724l.174.733c.856 3.46 2.087 6.224 2.495 6.224c.28 0 .889-.506 1.615-1.436c.405-.518.835-1.148 1.28-1.863c.362-.581.72-1.194 1.063-1.816l.415-.767l.348-.671l-.364-.638l-.332-.566a58 58 0 0 0-2.09-3.287a31 31 0 0 0-1.852-2.45c-.916-1.077-1.716-1.778-2.318-2.021m16.356.57c-.261-.654-.514-.769-1.005-.57c-.602.243-1.402.944-2.317 2.02a31 31 0 0 0-1.852 2.45a56 56 0 0 0-1.687 2.615l-.574.962l-.527.915l.181.35l.245.465a43 43 0 0 0 1.401 2.438a22 22 0 0 0 1.28 1.864c.727.93 1.336 1.436 1.616 1.436c.408 0 1.639-2.763 2.494-6.224l.174-.733c.805-3.523 1.063-6.758.571-7.987"></svg:path>`,
})
export class RiWechatChannelsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWechatChannelsLineIcon],svg[ri-wechat-channels-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.66 18.964a2 2 0 0 1-.155-.21c-.238-.353-.515-.905-.805-1.627c-.575-1.432-1.138-3.372-1.536-5.326c-.4-1.965-.616-3.869-.537-5.244c.04-.7.153-1.161.283-1.416A.7.7 0 0 1 4.002 5c.292 0 .74.162 1.356.651c.6.476 1.25 1.174 1.927 2.032c1.236 1.565 2.464 3.532 3.552 5.326c-.18.315-.37.66-.565 1.014l-.278.502A38 38 0 0 1 8.67 16.77c-.465.715-.918 1.312-1.344 1.72c-.3.289-.52.42-.665.474M12 11.076c-.962-1.562-2.042-3.236-3.145-4.632c-.721-.914-1.481-1.747-2.254-2.36C5.846 3.486 4.959 3 4.001 3c-.923 0-1.537.57-1.874 1.234c-.315.62-.45 1.408-.496 2.209c-.094 1.625.16 3.721.573 5.756c.416 2.046 1.01 4.106 1.64 5.674c.313.778.65 1.476 1 1.997c.175.26.378.514.614.713c.225.192.582.417 1.042.417c.895 0 1.648-.526 2.211-1.067c.589-.565 1.14-1.31 1.636-2.073c.5-.77.973-1.603 1.396-2.364l.249-.45l.024.045l.21.393c.41.76.867 1.595 1.358 2.367c.486.766 1.035 1.518 1.639 2.088C15.812 20.495 16.58 21 17.5 21c.46 0 .817-.226 1.043-.417c.235-.2.439-.453.613-.712c.35-.522.688-1.22 1-1.998c.63-1.568 1.224-3.628 1.64-5.674c.414-2.034.668-4.131.574-5.756c-.046-.8-.18-1.589-.496-2.209C21.536 3.57 20.924 3 20 3c-.958 0-1.846.485-2.6 1.084c-.773.613-1.533 1.446-2.255 2.36c-1.102 1.396-2.183 3.07-3.145 4.632m1.162 1.935c1.089-1.795 2.317-3.763 3.553-5.328c.677-.857 1.327-1.556 1.927-2.032c.617-.49 1.064-.65 1.356-.651l.02.022a.7.7 0 0 1 .073.119c.13.255.242.717.282 1.416c.08 1.375-.137 3.279-.537 5.244c-.397 1.954-.96 3.894-1.536 5.326c-.29.722-.566 1.274-.804 1.628q-.099.144-.164.218c-.173-.052-.417-.186-.736-.488c-.426-.403-.871-.994-1.324-1.706a36 36 0 0 1-1.283-2.242q-.102-.188-.2-.374c-.216-.401-.426-.795-.627-1.152"></svg:path>`,
})
export class RiWechatChannelsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWechatFillIcon],svg[ri-wechat-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.575 13.711a.91.91 0 0 0 .898-.898a.895.895 0 0 0-.898-.898a.894.894 0 0 0-.898.898c0 .5.4.898.898.898m-4.425 0a.91.91 0 0 0 .898-.898c0-.498-.4-.898-.898-.898a.894.894 0 0 0-.898.898c0 .5.399.898.898.898m6.567 5.04a.35.35 0 0 0-.172.37c0 .048 0 .098.025.147c.098.417.294 1.081.294 1.106c0 .073.025.122.025.172a.22.22 0 0 1-.221.22c-.05 0-.074-.024-.123-.048l-1.449-.836a.8.8 0 0 0-.344-.098c-.073 0-.147 0-.196.024c-.688.197-1.4.295-2.161.295c-3.66 0-6.607-2.457-6.607-5.505s2.947-5.505 6.607-5.505c3.659 0 6.606 2.458 6.606 5.505c0 1.647-.884 3.146-2.284 4.154M16.674 8.099a9 9 0 0 0-.28-.005c-4.174 0-7.606 2.86-7.606 6.505c0 .554.08 1.09.228 1.6h-.089a10 10 0 0 1-2.584-.368c-.074-.025-.148-.025-.222-.025a.83.83 0 0 0-.419.123l-1.747 1.005a.35.35 0 0 1-.148.05a.273.273 0 0 1-.27-.27c0-.074.024-.123.049-.197c.024-.024.246-.834.369-1.324c0-.05.024-.123.024-.172a.56.56 0 0 0-.221-.441C2.059 13.376 1 11.586 1 9.599C1.001 5.944 4.571 3 8.951 3c3.765 0 6.93 2.169 7.723 5.098m-5.154.418c.573 0 1.026-.477 1.026-1.026c0-.573-.453-1.026-1.026-1.026s-1.026.453-1.026 1.026s.453 1.026 1.026 1.026m-5.26 0c.573 0 1.027-.477 1.027-1.026c0-.573-.454-1.026-1.027-1.026c-.572 0-1.026.453-1.026 1.026s.454 1.026 1.026 1.026"></svg:path>`,
})
export class RiWechatFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWechatLineIcon],svg[ri-wechat-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.001 14.676v-.062c0-2.509 2.017-4.618 4.753-5.233C14.39 7.079 11.96 5.2 8.9 5.2C5.58 5.2 3 7.413 3 9.98c0 .969.36 1.9 1.04 2.698q.048.058.152.165a3.57 3.57 0 0 1 1.002 2.238a3.6 3.6 0 0 1 2.363-.442q.25.039.405.06A7.3 7.3 0 0 0 10 14.676m.457 1.951a9.2 9.2 0 0 1-2.753.055a19 19 0 0 1-.454-.067a1.6 1.6 0 0 0-1.08.212l-1.904 1.147a.8.8 0 0 1-.49.118a.79.79 0 0 1-.729-.851l.15-1.781a1.57 1.57 0 0 0-.439-1.223a6 6 0 0 1-.241-.262C1.563 12.855 1 11.473 1 9.979C1 6.235 4.537 3.2 8.9 3.2c4.06 0 7.403 2.627 7.85 6.008c3.371.153 6.05 2.515 6.05 5.406c0 1.193-.456 2.296-1.229 3.19q-.076.09-.195.21a1.24 1.24 0 0 0-.356.976l.121 1.423a.635.635 0 0 1-.59.68a.66.66 0 0 1-.396-.094l-1.544-.917a1.32 1.32 0 0 0-.874-.169q-.22.034-.368.053q-.475.061-.969.062c-2.694 0-4.998-1.408-5.943-3.401m6.977 1.31a3.3 3.3 0 0 1 1.675.174a3.25 3.25 0 0 1 .842-1.502q.076-.077.106-.112c.489-.565.743-1.213.743-1.883c0-1.805-1.903-3.414-4.4-3.414S12 12.81 12 14.614s1.903 3.414 4.4 3.414a6 6 0 0 0 .714-.046q.121-.015.32-.046"></svg:path>`,
})
export class RiWechatLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWechatPayFillIcon],svg[ri-wechat-pay-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.271 14.669a.66.66 0 0 1-.88-.269l-.043-.095l-1.818-3.998a.5.5 0 0 1 0-.146a.327.327 0 0 1 .335-.327a.3.3 0 0 1 .196.066l2.18 1.527a1 1 0 0 0 .546.167a.9.9 0 0 0 .342-.066l10.047-4.5a10.73 10.73 0 0 0-8.171-3.526C6.479 3.502 2 7.232 2 11.87a7.83 7.83 0 0 0 3.46 6.296a.66.66 0 0 1 .24.727l-.45 1.701a1 1 0 0 0-.051.24a.327.327 0 0 0 .334.334a.4.4 0 0 0 .19-.058l2.18-1.265c.16-.098.343-.151.53-.152q.15 0 .292.043c1.062.3 2.16.452 3.264.45c5.525 0 10.011-3.729 10.011-8.33a7.23 7.23 0 0 0-1.098-3.883L9.351 14.625z"></svg:path>`,
})
export class RiWechatPayFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWechatPayLineIcon],svg[ri-wechat-pay-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.146 8.993l-9.799 5.608l-.07.045a.65.65 0 0 1-.3.07a.66.66 0 0 1-.58-.345l-.046-.092l-1.831-3.95c-.023-.046-.023-.092-.023-.138c0-.184.139-.321.324-.321q.105 0 .209.069l2.155 1.515c.162.092.347.161.556.161a.9.9 0 0 0 .348-.069l8.274-3.649C16.935 6.273 14.635 5.2 12.001 5.2c-4.421 0-7.9 3.022-7.9 6.6c0 1.365.5 2.673 1.431 3.78q.073.088.215.236a4 4 0 0 1 1.1 3.102l-.024.297l.715-.436a4 4 0 0 1 2.706-.536q.317.05.52.076q.61.081 1.237.081c4.42 0 7.9-3.022 7.9-6.6c0-.996-.27-1.95-.755-2.807M6.193 21.943a1 1 0 0 1-1.527-.932l.189-2.259a2 2 0 0 0-.55-1.551a7 7 0 0 1-.303-.333C2.806 15.447 2.1 13.695 2.1 11.8c0-4.75 4.432-8.6 9.9-8.6c5.467 0 9.9 3.85 9.9 8.6s-4.433 8.6-9.9 8.6q-.765-.001-1.5-.098q-.229-.03-.568-.084a2 2 0 0 0-1.353.268z"></svg:path>`,
})
export class RiWechatPayLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWeiboFillIcon],svg[ri-weibo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.278 8.592c2.773-2.77 6.004-4.033 7.219-2.816c.537.537.588 1.464.244 2.572c-.178.557.524.25.524.25c2.241-.938 4.197-.994 4.91.027c.38.542.343 1.306-.008 2.19c-.163.407.048.47.36.563c1.262.392 2.668 1.336 2.668 3.004c0 2.763-3.98 6.239-9.964 6.239c-4.565 0-9.23-2.213-9.23-5.852c0-1.902 1.204-4.102 3.277-6.177m12.133 5.742c-.237-2.391-3.382-4.039-7.023-3.677c-3.64.359-6.403 2.59-6.167 4.98c.237 2.394 3.382 4.039 7.023 3.68c3.641-.362 6.401-2.592 6.167-4.983m-10.249.104c.754-1.528 2.712-2.39 4.446-1.94c1.792.463 2.707 2.154 1.976 3.799c-.744 1.683-2.883 2.58-4.695 1.994c-1.752-.566-2.493-2.295-1.727-3.853m2.715.578c-.563-.237-1.291.008-1.64.553c-.354.547-.189 1.201.371 1.456c.568.257 1.325.013 1.676-.55c.346-.568.163-1.217-.408-1.459m1.387-.578c-.216-.084-.486.018-.613.232c-.123.214-.054.458.163.547c.219.092.501-.012.628-.231c.123-.22.044-.466-.178-.548m5.694-11.514A5.83 5.83 0 0 1 21.5 4.72a5.84 5.84 0 0 1 1.22 5.704a.84.84 0 0 1-1.06.54a.844.844 0 0 1-.542-1.062a4.142 4.142 0 0 0-4.808-5.327a.845.845 0 0 1-.353-1.65m.626 2.926a2.836 2.836 0 0 1 3.29 3.648a.725.725 0 1 1-1.378-.45a1.38 1.38 0 0 0-.287-1.357a1.4 1.4 0 0 0-1.322-.426a.723.723 0 1 1-.303-1.415"></svg:path>`,
})
export class RiWeiboFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWeiboLineIcon],svg[ri-weibo-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.195 14.197c0 3.362-4.53 6.424-9.926 6.424c-4.95 0-9.268-2.432-9.268-6.087c0-1.947 1.18-4.087 3.24-6.088C7.072 5.7 10.47 4.413 12.098 5.998c.498.482.723 1.122.719 1.858c1.975-.576 3.65-.404 4.483.752c.449.623.532 1.38.326 2.207c1.511.61 2.568 1.77 2.568 3.382m-4.44-2.07c-.386-.41-.4-.92-.198-1.41c.208-.508.213-.812.12-.94c-.264-.368-1.533-.363-3.194.311a2 2 0 0 1-.509.14c-.344.046-.671.001-.983-.265c-.419-.359-.473-.855-.322-1.316c.214-.67.18-1.076.037-1.215c-.186-.18-.777-.191-1.659.143C7.978 7.98 6.75 8.799 5.633 9.88c-1.707 1.659-2.632 3.337-2.632 4.653c0 2.242 3.276 4.087 7.268 4.087c4.42 0 7.926-2.37 7.926-4.424c0-.738-.637-1.338-1.673-1.652c-.394-.113-.536-.171-.767-.417m7.054-1.617a1 1 0 1 1-1.936-.502a4 4 0 0 0-4.693-4.924a1 1 0 0 1-.407-1.958a6 6 0 0 1 7.036 7.384"></svg:path>`,
})
export class RiWeiboLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWeightFillIcon],svg[ri-weight-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.465 2a4 4 0 1 0-6.93 0H5.066a1 1 0 0 0-.986.832l-1.88 11A1 1 0 0 0 3.186 21h17.629a1 1 0 0 0 .986-1.169l-1.88-11A1 1 0 0 0 18.934 8z"></svg:path>`,
})
export class RiWeightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWeightLineIcon],svg[ri-weight-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.465 2a4 4 0 1 0-6.93 0H5.066a1 1 0 0 0-.986.832l-1.88 11A1 1 0 0 0 3.186 21h17.629a1 1 0 0 0 .986-1.169l-1.88-11A1 1 0 0 0 18.934 8zM12 10h6.091l1.538 9H4.372l1.539-9z"></svg:path>`,
})
export class RiWeightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWhatsappFillIcon],svg[ri-whatsapp-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.95 9.95 0 0 1-5.03-1.355L2.005 22l1.352-4.968A9.95 9.95 0 0 1 2.001 12c0-5.523 4.477-10 10-10M8.593 7.3l-.2.008a1 1 0 0 0-.372.1a1.3 1.3 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.73 2.73 0 0 0 6.9 9.62c.002.49.13.967.33 1.413c.409.902 1.082 1.857 1.97 2.742c.214.213.424.427.65.626a9.45 9.45 0 0 0 3.84 2.046l.568.087c.185.01.37-.004.556-.013a2 2 0 0 0 .833-.231a5 5 0 0 0 .383-.22q.001.002.125-.09c.135-.1.218-.171.33-.288q.126-.13.21-.302c.078-.163.156-.474.188-.733c.024-.198.017-.306.014-.373c-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.402-.621a.5.5 0 0 0-.176-.041a.48.48 0 0 0-.378.127c-.005-.002-.072.055-.795.931a.35.35 0 0 1-.368.13a1.4 1.4 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.108a6 6 0 0 1-1.575-1.003c-.126-.11-.243-.23-.363-.346a6.3 6.3 0 0 1-1.02-1.268l-.059-.095a1 1 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41c.11-.14.203-.276.263-.373c.118-.19.155-.385.093-.536q-.42-1.026-.868-2.041c-.059-.134-.234-.23-.393-.249q-.081-.01-.162-.016a3 3 0 0 0-.403.004z"></svg:path>`,
})
export class RiWhatsappFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWhatsappLineIcon],svg[ri-whatsapp-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.254 18.494l.724.423A7.95 7.95 0 0 0 12.001 20a8 8 0 1 0-8-8a7.95 7.95 0 0 0 1.084 4.024l.422.724l-.653 2.401zM2.005 22l1.352-4.968A9.95 9.95 0 0 1 2.001 12c0-5.523 4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10a9.95 9.95 0 0 1-5.03-1.355zM8.392 7.308q.202-.014.403-.004q.081.006.162.016c.159.018.334.115.393.249q.447 1.015.868 2.04c.062.152.025.347-.093.537c-.06.097-.154.233-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268c.12.116.237.235.363.346c.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11q.093.039.191.066q.036.01.073.011a.35.35 0 0 0 .295-.142c.723-.876.79-.933.795-.933v.002a.48.48 0 0 1 .378-.127q.092.004.177.04c.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265c.004.067.01.175-.013.373c-.032.259-.11.57-.188.733a1.2 1.2 0 0 1-.21.302a2.4 2.4 0 0 1-.33.288q-.124.092-.125.09a5 5 0 0 1-.383.22a2 2 0 0 1-.833.23c-.185.01-.37.024-.556.014c-.008 0-.568-.087-.568-.087a9.45 9.45 0 0 1-3.84-2.046c-.226-.199-.436-.413-.65-.626c-.888-.885-1.561-1.84-1.97-2.742a3.5 3.5 0 0 1-.33-1.413a2.73 2.73 0 0 1 .565-1.68c.073-.094.142-.192.261-.305c.126-.12.207-.184.294-.228a1 1 0 0 1 .371-.1"></svg:path>`,
})
export class RiWhatsappLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWheelchairFillIcon],svg[ri-wheelchair-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.998 10.341v2.194A4 4 0 1 0 13.463 18h2.193a6 6 0 1 1-7.658-7.66m4 6.659a3 3 0 0 1-3-3v-4a3 3 0 1 1 6 0v5h1.434a2 2 0 0 1 1.626.836l.089.135l2.709 4.514l-1.715 1.03L16.43 17zm0-15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5"></svg:path>`,
})
export class RiWheelchairFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWheelchairLineIcon],svg[ri-wheelchair-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.998 10.341v2.194A4 4 0 1 0 13.463 18h2.193a6 6 0 1 1-7.658-7.66m4 6.659a3 3 0 0 1-3-3v-4c0-1.044.534-1.964 1.343-2.501a3 3 0 1 1 3.314.003A2.99 2.99 0 0 1 14.998 10v4.999l1.434.001a2 2 0 0 1 1.626.836l.089.135l2.709 4.514l-1.715 1.03L16.43 17l-1.433-.001zm0-8a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h.999l.001-5a1 1 0 0 0-1-1m0-5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiWheelchairLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWifiFillIcon],svg[ri-wifi-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.69 6.997A17.93 17.93 0 0 1 12 3c4.285 0 8.22 1.497 11.31 3.997L21.425 9.33A14.94 14.94 0 0 0 12 6C8.43 6 5.15 7.248 2.575 9.33zm3.141 3.89A12.95 12.95 0 0 1 12 8a12.95 12.95 0 0 1 8.169 2.886l-1.886 2.334A9.96 9.96 0 0 0 12 11c-2.38 0-4.567.832-6.284 2.22zm3.142 3.89A7.97 7.97 0 0 1 12 13c1.904 0 3.653.665 5.027 1.776l-1.885 2.334A4.98 4.98 0 0 0 12 16c-1.19 0-2.283.416-3.142 1.11zm3.142 3.89A3 3 0 0 1 12 18c.714 0 1.37.25 1.885.666L12 21z"></svg:path>`,
})
export class RiWifiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWifiLineIcon],svg[ri-wifi-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.69 6.997A17.93 17.93 0 0 1 12 3c4.285 0 8.22 1.497 11.31 3.997l-1.256 1.556A15.93 15.93 0 0 0 12 5C8.19 5 4.694 6.33 1.946 8.553zm3.141 3.89A12.95 12.95 0 0 1 12 8a12.95 12.95 0 0 1 8.169 2.886l-1.257 1.556A10.95 10.95 0 0 0 12 10c-2.618 0-5.023.915-6.912 2.442zm3.142 3.89A7.97 7.97 0 0 1 12 13c1.904 0 3.653.665 5.027 1.776l-1.257 1.556A5.98 5.98 0 0 0 12 15c-1.428 0-2.74.499-3.77 1.332zm3.142 3.89A3 3 0 0 1 12 18c.714 0 1.37.25 1.885.666L12 21z"></svg:path>`,
})
export class RiWifiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWifiOffFillIcon],svg[ri-wifi-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18c.714 0 1.37.25 1.886.666L12 21l-1.886-2.334A3 3 0 0 1 12 18M2.808 1.393l17.677 17.678l-1.414 1.414l-3.682-3.68l-.246.306A4.98 4.98 0 0 0 12 16c-1.19 0-2.283.416-3.141 1.11l-1.885-2.334a7.96 7.96 0 0 1 4.622-1.766l-1.773-1.772a9.96 9.96 0 0 0-4.106 1.982L3.83 10.887A13 13 0 0 1 7.416 8.83L5.885 7.3a15 15 0 0 0-3.31 2.031L.689 6.997a18 18 0 0 1 2.952-1.942L1.393 2.808zM16.084 11.87l-3.867-3.867L12 8c3.095 0 5.937 1.081 8.17 2.887l-1.886 2.333a10 10 0 0 0-2.2-1.35M12 3a17.92 17.92 0 0 1 11.31 3.998L21.426 9.33A14.94 14.94 0 0 0 12 6q-.858 0-1.69.094L7.724 3.511A18 18 0 0 1 12 3"></svg:path>`,
})
export class RiWifiOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWifiOffLineIcon],svg[ri-wifi-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18c.714 0 1.37.25 1.886.666L12 21l-1.886-2.334A3 3 0 0 1 12 18M2.808 1.393l17.677 17.678l-1.414 1.414l-5.18-5.18a6 6 0 0 0-1.89-.305c-1.43 0-2.74.499-3.771 1.332l-1.256-1.556a7.96 7.96 0 0 1 4.622-1.766L9 10.414a11 11 0 0 0-3.912 2.029L3.83 10.887A13 13 0 0 1 7.416 8.83L5.132 6.545a16 16 0 0 0-3.185 2.007L.689 6.997a18 18 0 0 1 2.952-1.942L1.393 2.808zM14.5 10.285l-2.283-2.283L12 8c3.095 0 5.937 1.081 8.17 2.887l-1.258 1.556a10.96 10.96 0 0 0-4.412-2.158M12 3c4.285 0 8.22 1.497 11.31 3.997l-1.257 1.555A15.93 15.93 0 0 0 12 5q-1.319 0-2.58.207L7.726 3.51A18 18 0 0 1 12 3"></svg:path>`,
})
export class RiWifiOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWindow2FillIcon],svg[ri-window-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 7H4v9h16zm-5-4v2h4V6z"></svg:path>`,
})
export class RiWindow2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWindow2LineIcon],svg[ri-window-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 8H4v8h16zm0-6H4v4h16zm-1 1v2h-4V6z"></svg:path>`,
})
export class RiWindow2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWindowFillIcon],svg[ri-window-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 7H4v9h16zM5 6v2h2V6zm4 0v2h2V6z"></svg:path>`,
})
export class RiWindowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWindowLineIcon],svg[ri-window-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 8H4v8h16zm0-6H4v4h16zm-9 1v2H9V6zM7 6v2H5V6z"></svg:path>`,
})
export class RiWindowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWindowsFillIcon],svg[ri-windows-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.001 5.479l7.377-1.016v7.127H3zm0 13.042l7.377 1.017v-7.04H3zm8.188 1.125L21.001 21v-8.502h-9.812zm0-15.292v7.236h9.812V3z"></svg:path>`,
})
export class RiWindowsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWindowsLineIcon],svg[ri-windows-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.001 2.5v19l-18-2v-15zm-2 10.499l-7 .001v5.487l7 .779zm-14 4.71l5 .556V13l-5-.001zm14-6.71V4.735l-7 .777V11zm-9-5.265l-5 .556V11l5 .001z"></svg:path>`,
})
export class RiWindowsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWindyFillIcon],svg[ri-windy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 17H4v-2h6.5a3.5 3.5 0 1 1-3.278 4.73l1.873-.703A1.5 1.5 0 1 0 10.5 17M5 11h13.5a3.5 3.5 0 1 1-3.278 4.73l1.873-.703A1.5 1.5 0 1 0 18.5 13H5a3 3 0 1 1 0-6h8.5a1.5 1.5 0 1 0-1.405-2.027l-1.873-.702A3.501 3.501 0 0 1 17 5.5A3.5 3.5 0 0 1 13.5 9H5a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiWindyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWindyLineIcon],svg[ri-windy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 17H4v-2h6.5a3.5 3.5 0 1 1-3.278 4.73l1.873-.703A1.5 1.5 0 1 0 10.5 17M5 11h13.5a3.5 3.5 0 1 1-3.278 4.73l1.873-.703A1.5 1.5 0 1 0 18.5 13H5a3 3 0 1 1 0-6h8.5a1.5 1.5 0 1 0-1.405-2.027l-1.873-.702A3.501 3.501 0 0 1 17 5.5A3.5 3.5 0 0 1 13.5 9H5a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiWindyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWirelessChargingFillIcon],svg[ri-wireless-charging-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.929 4.929l1.414 1.414A7.98 7.98 0 0 0 3 12c0 2.21.895 4.21 2.343 5.657L3.93 19.07A9.97 9.97 0 0 1 1 12a9.97 9.97 0 0 1 2.929-7.071m16.142 0A9.97 9.97 0 0 1 23 12a9.97 9.97 0 0 1-2.929 7.071l-1.414-1.414A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-2.342-5.656zM13 5v6h3l-5 8v-6H8zM6.757 7.757l1.415 1.415A4 4 0 0 0 7 12c0 1.104.448 2.105 1.172 2.828l-1.415 1.415A5.98 5.98 0 0 1 5 12c0-1.657.672-3.157 1.757-4.243m10.487.001A5.98 5.98 0 0 1 19 12a5.98 5.98 0 0 1-1.757 4.243l-1.415-1.415A4 4 0 0 0 17 12a4 4 0 0 0-1.17-2.827z"></svg:path>`,
})
export class RiWirelessChargingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWirelessChargingLineIcon],svg[ri-wireless-charging-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.929 4.929l1.414 1.414A7.98 7.98 0 0 0 3 12c0 2.21.895 4.21 2.343 5.657L3.93 19.07A9.97 9.97 0 0 1 1 12.001a9.97 9.97 0 0 1 2.929-7.072m16.142 0A9.97 9.97 0 0 1 23 12a9.97 9.97 0 0 1-2.929 7.071l-1.414-1.414A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-2.342-5.656zM13 5v6h3l-5 8v-6H8zM6.757 7.757l1.415 1.415A4 4 0 0 0 7 12c0 1.105.448 2.105 1.172 2.829l-1.415 1.414A5.98 5.98 0 0 1 5 12c0-1.657.672-3.157 1.757-4.243m10.487.001A5.98 5.98 0 0 1 19 12a5.98 5.98 0 0 1-1.757 4.243l-1.415-1.414A4 4 0 0 0 17 12a4 4 0 0 0-1.17-2.827z"></svg:path>`,
})
export class RiWirelessChargingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWomenFillIcon],svg[ri-women-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15.934A7.501 7.501 0 0 1 12 1a7.5 7.5 0 0 1 1 14.934V18h5v2h-5v4h-2v-4H6v-2h5z"></svg:path>`,
})
export class RiWomenFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWomenLineIcon],svg[ri-women-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15.934A7.501 7.501 0 0 1 12 1a7.5 7.5 0 0 1 1 14.934V18h5v2h-5v4h-2v-4H6v-2h5zM12 14a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11"></svg:path>`,
})
export class RiWomenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWordpressFillIcon],svg[ri-wordpress-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.323 12c0 3.438 2 6.4 4.892 7.808L4.077 8.469A8.65 8.65 0 0 0 3.323 12M12 20.677a8.8 8.8 0 0 0 2.885-.492l-.062-.116l-2.67-7.307l-2.6 7.561c.77.23 1.593.354 2.447.354M13.192 7.93l3.139 9.33l.869-2.892c.37-1.2.654-2.061.654-2.807c0-1.077-.385-1.816-.708-2.385c-.446-.723-.854-1.33-.854-2.039c0-.8.6-1.538 1.462-1.538h.107A8.65 8.65 0 0 0 12 3.323a8.67 8.67 0 0 0-7.246 3.908l.554.015c.907 0 2.307-.115 2.307-.115c.477-.023.531.661.062.715c0 0-.47.062-1 .085l3.17 9.4l1.9-5.692l-1.355-3.708a16 16 0 0 1-.907-.077c-.47-.03-.416-.746.053-.723c0 0 1.431.115 2.285.115c.908 0 2.308-.115 2.308-.115c.469-.023.53.661.061.715c0 0-.469.054-1 .085m3.17 11.569a8.676 8.676 0 0 0 3.253-11.662a8.2 8.2 0 0 1-.6 4zM12 22a10 10 0 1 1 0-20a10 10 0 0 1 0 20"></svg:path>`,
})
export class RiWordpressFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWordpressLineIcon],svg[ri-wordpress-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-7.394 7.566l-2.155-5.985l-2.181 6.232a8.03 8.03 0 0 0 4.336-.247m2.468-1.38A7.98 7.98 0 0 0 20 12a8 8 0 0 0-.545-2.908c-.25 1.454-.692 3.35-.976 4.315zm-.201-12.531A7.97 7.97 0 0 0 12 4a7.99 7.99 0 0 0-6.245 3h1.39v2h-.75l2.755 7.958l2.227-6.362L10.802 9H8.645V7h5v2h-.717l2.621 7.282l1.012-3.44c.523-1.832.092-2.631-.339-3.429c-.289-.534-.577-1.068-.577-1.913a2 2 0 0 1 1.228-1.845M4.425 9.42A8 8 0 0 0 4 12a8 8 0 0 0 3.64 6.708z"></svg:path>`,
})
export class RiWordpressLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riWubiInputIcon],svg[ri-wubi-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-2h3.662l1.234-7H5v-2h3.249l.881-5H4V3h16v2h-8.839l-.882 5H18v9h3v2zm13-9H9.927l-1.235 7H16z"></svg:path>`,
})
export class RiWubiInputIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riXboxFillIcon],svg[ri-xbox-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.42 19.528A9.96 9.96 0 0 0 12 22a9.97 9.97 0 0 0 6.585-2.472c1.564-1.594-3.597-7.258-6.585-9.515c-2.985 2.257-8.15 7.921-6.582 9.515m9.3-12.005c2.083 2.467 6.236 8.594 5.063 10.76A9.95 9.95 0 0 0 22 12.002a9.96 9.96 0 0 0-2.975-7.113s-.023-.018-.068-.035a.7.7 0 0 0-.234-.038c-.494 0-1.655.362-4.005 2.706M5.045 4.855c-.048.017-.068.034-.072.035A9.96 9.96 0 0 0 2 12.003c0 2.379.832 4.561 2.217 6.278C3.051 16.11 7.201 9.988 9.285 7.523C6.935 5.178 5.772 4.818 5.28 4.818a.6.6 0 0 0-.234.039zM12 4.959S9.546 3.523 7.63 3.455c-.753-.027-1.213.246-1.268.282C8.15 2.539 10.05 2 11.988 2H12c1.945 0 3.838.538 5.638 1.737c-.056-.038-.512-.31-1.266-.282c-1.917.068-4.372 1.5-4.372 1.5z"></svg:path>`,
})
export class RiXboxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riXboxLineIcon],svg[ri-xbox-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.798 15.485c1.124-2.52 3.2-5.44 4.487-6.962c-1.248-1.246-2.162-1.931-2.818-2.3A7.98 7.98 0 0 0 4.001 12c0 1.25.286 2.432.797 3.485m4.051-10.84c1.6.406 3.152 1.314 3.152 1.314v-.005s1.552-.904 3.151-1.31A8 8 0 0 0 12.001 4c-1.12 0-2.185.23-3.152.645m8.686 1.578c-.655.37-1.568 1.055-2.816 2.3c1.287 1.523 3.362 4.441 4.486 6.961A8 8 0 0 0 20 12c0-2.27-.946-4.32-2.466-5.777m.408 11.134c-1.403-2.237-4.09-4.945-5.942-6.344c-1.85 1.4-4.539 4.108-5.941 6.345A7.98 7.98 0 0 0 12 20a7.98 7.98 0 0 0 5.942-2.643M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class RiXboxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riXingFillIcon],svg[ri-xing-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.462 3.23c.154 0 .308.078.384.155a.49.49 0 0 1 0 .461l-6.076 10.77l3.846 7.076a.49.49 0 0 1 0 .462a.6.6 0 0 1-.385.154h-2.77c-.384 0-.614-.308-.768-.539l-3.923-7.154C11 14.308 16.924 3.77 16.924 3.77c.153-.308.384-.538.769-.538zM8.923 7c.385 0 .616.308.77.538l1.923 3.308c-.154.154-3 5.23-3 5.23c-.154.232-.385.54-.77.54H5.155a.6.6 0 0 1-.384-.154a.49.49 0 0 1 0-.462l2.846-5.154l-1.846-3.23a.49.49 0 0 1 0-.462A.6.6 0 0 1 6.154 7z"></svg:path>`,
})
export class RiXingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riXingLineIcon],svg[ri-xing-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.444 3.5L13.81 14.99L17.857 22h-2.31l-4.045-7.009H11.5L18.134 3.5zM8.31 7l2.422 4.196l-.002.001L7.67 16.5H5.36l3.061-5.305L6.002 7z"></svg:path>`,
})
export class RiXingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riXrpFillIcon],svg[ri-xrp-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.778 4h-2.837l-4.49 4.371a3.52 3.52 0 0 1-2.451.99a3.52 3.52 0 0 1-2.452-.99L5.062 4h-2.84L8.13 9.754c2.14 2.083 5.607 2.083 7.745 0zM2.223 20H5.05l4.508-4.385a3.5 3.5 0 0 1 2.443-.985c.914 0 1.792.354 2.443.985L18.952 20h2.826l-5.92-5.761c-2.132-2.073-5.585-2.073-7.715 0z"></svg:path>`,
})
export class RiXrpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riXrpLineIcon],svg[ri-xrp-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.778 4h-2.837l-4.49 4.371a3.52 3.52 0 0 1-2.451.99a3.52 3.52 0 0 1-2.452-.99L5.062 4h-2.84L8.13 9.754c2.14 2.083 5.607 2.083 7.745 0zM2.223 20H5.05l4.508-4.385a3.5 3.5 0 0 1 2.443-.985c.914 0 1.792.354 2.443.985L18.952 20h2.826l-5.92-5.761c-2.132-2.073-5.585-2.073-7.715 0z"></svg:path>`,
})
export class RiXrpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riXtzFillIcon],svg[ri-xtz-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.631 17.494c-.221-3.858-5.15-5.61-5.62-5.791c-.021-.01-.021-.027-.011-.047l5.082-5.022v-.54a.167.167 0 0 0-.163-.162H9.553V2l-3.457.711v.512h.192s.848 0 .848.834v1.866H4.46c-.048 0-.097.047-.097.094v1.186h2.782v6.433c0 2.019 1.32 3.422 3.629 3.232a2.9 2.9 0 0 0 1.329-.473a.6.6 0 0 0 .28-.503v-.636c-.751.493-1.388.464-1.388.464c-1.463 0-1.433-1.83-1.433-1.83V7.202H16.3l-4.851 4.814l-.02 1.137q0 .03.029.029c4.447.739 5.65 3.572 5.65 4.397c0 0 .481 4.008-3.59 4.284c0 0-2.668.112-3.139-.939c-.019-.04 0-.076.038-.094c.444-.2.741-.588.741-1.11c0-.777-.48-1.412-1.492-1.412c-.817 0-1.492.636-1.492 1.413c0 0-.384 3.373 5.335 3.278c6.526-.114 6.121-5.504 6.121-5.504"></svg:path>`,
})
export class RiXtzFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riXtzLineIcon],svg[ri-xtz-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6V2H7v4H4.5v2H7v5a4 4 0 0 0 6.667 2.981l-1.334-1.49A2 2 0 0 1 9 13V8h6.625L11.5 11.975V13.5h1c3.067 0 5 2.18 5 4c0 1.883-1.627 3.5-3.75 3.5c-1.823 0-3.293-1.202-3.66-2.733l-1.945.466C8.74 21.21 11.051 23 13.75 23c3.124 0 5.75-2.412 5.75-5.5c0-2.565-2.034-4.932-4.914-5.722L19 7.525V6z"></svg:path>`,
})
export class RiXtzLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riYoutubeFillIcon],svg[ri-youtube-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.244 4c.534.003 1.87.016 3.29.073l.504.022c1.429.067 2.857.183 3.566.38c.945.266 1.687 1.04 1.938 2.022c.4 1.56.45 4.602.456 5.339l.001.152v.174c-.007.737-.057 3.78-.457 5.339c-.254.985-.997 1.76-1.938 2.022c-.709.197-2.137.313-3.566.38l-.504.023c-1.42.056-2.756.07-3.29.072l-.235.001h-.255c-1.13-.007-5.856-.058-7.36-.476c-.944-.266-1.687-1.04-1.938-2.022c-.4-1.56-.45-4.602-.456-5.339v-.326c.006-.737.056-3.78.456-5.339c.254-.985.997-1.76 1.939-2.021c1.503-.419 6.23-.47 7.36-.476zM9.999 8.5v7l6-3.5z"></svg:path>`,
})
export class RiYoutubeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riYoutubeLineIcon],svg[ri-youtube-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.607 6.995c-.076-.298-.292-.523-.539-.592C18.63 6.28 16.501 6 12.001 6s-6.628.28-7.069.403c-.244.068-.46.293-.537.592c-.109.424-.394 2.2-.394 5.005s.285 4.58.394 5.006c.076.297.292.522.538.59C5.373 17.72 7.5 18 12 18s6.629-.28 7.069-.403c.244-.068.46-.293.537-.592c.11-.424.394-2.205.394-5.005s-.285-4.58-.394-5.005m1.937-.497C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.897 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.108 4 12.001 4 12.001 4s5.896 0 7.605.476c.944.266 1.687 1.04 1.938 2.022M10.001 15.5v-7l6 3.5z"></svg:path>`,
})
export class RiYoutubeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riYuqueFillIcon],svg[ri-yuque-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.28 2.955c2.97.203 3.756 2.342 3.84 2.597l1.297.096c.13 0 .169.18.054.236c-1.323.716-1.727 2.17-1.49 3.118c.09.358.254.69.412 1.02c.307.642.651 1.418.707 2.981c.117 3.24-2.51 6.175-5.789 6.593c1.17-1.187 1.815-2.444 2.12-3.375c.606-1.846.508-3.316.055-4.44a4.46 4.46 0 0 0-1.782-2.141c-1.683-1.02-3.22-1.09-4.444-.762c.465-.594.876-1.201 1.2-1.864c.584-1.65-.102-2.848-.704-3.519c-.192-.246-.061-.655.305-.655c1.41 0 2.813.02 4.22.115M3.32 19.107c1.924-2.202 4.712-5.394 7.162-8.15c.559-.63 2.769-2.338 5.748-.533c.878.532 2.43 2.165 1.332 5.51c-.803 2.446-4.408 7.796-15.76 5.844c-.227-.039-.511-.354-.218-.687z"></svg:path>`,
})
export class RiYuqueFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riYuqueLineIcon],svg[ri-yuque-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.505 3.043a.92.92 0 0 1 .795-.46c1.547 0 3.09.05 4.637.154c2.51.171 3.7 1.59 4.18 2.43c.596.092 1.388.088 1.571.807c.14.552-.217.833-.554 1.148c-.483.45-1.133 1.176-.954 1.888c.055.222.159.437.316.765l.002.003c.318.667.684 1.51.742 3.115c.156 4.34-3.596 6.897-7.252 7.08c-2.41 1.815-6.345 3.025-12.557 1.957a1.33 1.33 0 0 1-.945-.709a1.25 1.25 0 0 1-.12-.735c.039-.275.165-.511.33-.7c3.228-3.675 6.635-7.246 9.654-11.098c.526-.67.96-1.28 1.15-1.648c.309-.919-.009-1.444-.625-2.463c-.282-.467-.69-.978-.37-1.534m1.989 5.843c.874.005 1.85.249 2.885.875c2.124 1.288 2.334 3.996 1.625 6.157a7.6 7.6 0 0 1-.836 1.727c1.936-.797 3.319-2.484 3.24-4.686c-.047-1.28-.317-1.871-.564-2.389l-.03-.06c-.132-.277-.31-.647-.412-1.054c-.271-1.08.175-2.04.614-2.678a.92.92 0 0 1-.387-.493v-.001a2.6 2.6 0 0 0-.58-.817c-.407-.393-1.094-.823-2.236-.901a65 65 0 0 0-2.89-.13c.452.878.758 1.94.289 3.267c-.151.426-.46.82-.718 1.183m-.832 1.945c-.719.202-1.214.63-1.378.815c-2.717 3.057-5.881 6.689-7.576 8.627c5.45.747 8.601-.49 10.378-1.922c1.295-1.043 1.925-2.24 2.176-3.004c.434-1.323.537-3.187-.834-4.018c-1.153-.699-2.088-.69-2.766-.498"></svg:path>`,
})
export class RiYuqueLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riZcoolFillIcon],svg[ri-zcool-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.903 21.839a7.903 7.903 0 0 1-7.902-7.903c0-3.646 2.467-6.876 5.824-7.627C11.746 5.43 13.529 4.742 14.902 2c.998 1.935.323 3.71 0 4.677c4.698-1.129 6.371-3.28 6.774-3.548c0 3.952-1.231 6.452-2.419 8.065c1.476-.056 2.009-.484 2.744-.587c-.325 1.448-1.501 3.49-4.331 4.795a7.905 7.905 0 0 1-7.767 6.437m3.71-6.452c0 .323-.053.484-.403.484l-3.15.002l2.96-3.248c.86-.86.86-1.29.86-2.388c0-.334-.048-.717.048-1.05c.047-.144-.048-.192-.191-.144c-.335.095-.908.095-1.863.095H7.576c-.239 0-.335-.143-.239-.334c0-.048 0-.191-.096-.191c-.62.286-.764 1.576-.716 2.388c0 .43.239.669.573.669h3.391l-3.486 3.725c-.24.287-.478.669-.478 1.194v1.051c0 .478.287.764.812.86h5.988c.555 0 .933-.233.933-.855v-1.129c0-.208 0-.968-.645-1.129"></svg:path>`,
})
export class RiZcoolFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riZcoolLineIcon],svg[ri-zcool-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.262 8.26C5.838 8.803 4 11.208 4 13.936a5.903 5.903 0 0 0 11.703 1.097a2 2 0 0 1 1.129-1.447a8 8 0 0 0 1.284-.744c-.863-.603-1.186-1.862-.47-2.834a9.8 9.8 0 0 0 1.391-2.651c-1.084.51-2.3.936-3.668 1.265c-1.261.303-2.392-.638-2.466-1.814c-1.18.572-2.67 1.01-4.642 1.452m10.995 2.934c1.166 0 1.916-.424 2.744-.587c-.325 1.448-1.501 3.49-4.331 4.795A7.903 7.903 0 0 1 2 13.936C2 10.29 4.467 7.06 7.824 6.309C11.746 5.43 13.529 4.742 14.902 2q1.033 2 0 4.677q4.224-1.005 6.774-3.548c0 4.802-1.822 7.186-2.419 8.065m-5.84 3.932c.584.146.584.832.584 1.02v1.021c0 .562-.342.773-.844.773H7.743c-.475-.086-.734-.345-.734-.777v-.95c0-.475.216-.82.431-1.08l3.153-3.369H7.527c-.302 0-.518-.216-.518-.604c-.044-.735.086-1.9.647-2.16c.087 0 .087.13.087.173c-.087.173 0 .302.216.302h3.887c.863 0 1.381 0 1.684-.086c.13-.043.216 0 .173.13c-.087.302-.044.647-.044.95c0 .993 0 1.382-.777 2.159l-2.678 2.937l2.85-.002c.316 0 .364-.146.364-.437"></svg:path>`,
})
export class RiZcoolLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riZhihuFillIcon],svg[ri-zhihu-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.374 18.897h1.452l.478 1.637l2.605-1.637h3.07V5.395h-7.605zM14.919 6.86h4.515v10.57h-1.732l-1.73 1.087l-.315-1.084l-.738-.003zm-2.83 4.712H8.846a70 70 0 0 0 .136-4.56h3.172s.122-1.4-.532-1.384H6.135q.325-1.22.814-2.524s-1.493 0-2.001 1.339c-.21.552-.82 2.677-1.903 4.848c.365-.04 1.573-.073 2.284-1.378c.13-.366.156-.414.318-.902h1.79c0 .651-.074 4.151-.105 4.558h-3.24c-.728 0-.964 1.466-.964 1.466h4.065c-.272 3.095-1.737 5.703-4.392 7.764c1.27.363 2.536-.057 3.162-.614c0 0 1.425-1.297 2.206-4.298l3.345 4.03s.491-1.668-.076-2.482c-.47-.553-1.74-2.051-2.281-2.594l-.907.72q.405-1.302.488-2.524h3.822s-.005-1.466-.47-1.466"></svg:path>`,
})
export class RiZhihuFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riZhihuLineIcon],svg[ri-zhihu-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.345 17.963l-1.688 1.074l-2.132-3.35c-.44 1.402-1.171 2.665-2.138 3.825c-.402.483-.82.918-1.301 1.376c-.155.146-.775.716-.878.82l-1.414-1.415c.139-.139.787-.735.914-.856c.43-.408.796-.79 1.143-1.205C6.117 16.712 6.88 15.02 6.988 13H3v-2h4V7h-.868c-.689 1.266-1.558 2.222-2.618 2.858L2.486 8.143c1.396-.838 2.426-2.603 3.039-5.36l1.952.434q-.21.95-.489 1.783h4.513v2H9v4h2.5v2H9.186zm3.838-.07L17.3 17h1.702V7h-4v10h.736zM13.001 5h8v14h-3l-2.5 2l-1-2H13z"></svg:path>`,
})
export class RiZhihuLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riZoomInFillIcon],svg[ri-zoom-in-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617M10 10H7v2h3v3h2v-3h3v-2h-3V7h-2z"></svg:path>`,
})
export class RiZoomInFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riZoomInLineIcon],svg[ri-zoom-in-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975zM10 10V7h2v3h3v2h-3v3h-2v-3H7v-2z"></svg:path>`,
})
export class RiZoomInLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riZoomOutFillIcon],svg[ri-zoom-out-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617M7 10v2h8v-2z"></svg:path>`,
})
export class RiZoomOutFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riZoomOutLineIcon],svg[ri-zoom-out-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975zM7 10h8v2H7z"></svg:path>`,
})
export class RiZoomOutLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riZzzFillIcon],svg[ri-zzz-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11v2l-5.327 6H11v2H3v-2l5.326-6H3v-2zm10-8v2l-5.327 6H21v2h-8v-2l5.326-6H13V3z"></svg:path>`,
})
export class RiZzzFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riZzzLineIcon],svg[ri-zzz-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11v2l-5.327 6H11v2H3v-2l5.326-6H3v-2zm10-8v2l-5.327 6H21v2h-8v-2l5.326-6H13V3z"></svg:path>`,
})
export class RiZzzLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
