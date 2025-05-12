import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineicons500pxIcon],svg[lineicons-500px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.51 18.624q-.211-.21-.368-.254a.27.27 0 0 0-.276.066l-.069.069a7.9 7.9 0 0 1-5.596 2.318a7.9 7.9 0 0 1-5.596-2.318c-.756-.757-1.327-1.604-1.695-2.515a8.6 8.6 0 0 1-.515-1.778l-.008-.049c-.05-.258-.288-.277-.63-.224c-.143.022-.576.088-.534.4v.007a9.07 9.07 0 0 0 2.55 4.992A9.06 9.06 0 0 0 13.202 22a9.07 9.07 0 0 0 6.428-2.663c.001-.002.047-.047.072-.075c.092-.1.172-.275-.193-.638M19.345 6.55c-.76-.72-1.594-1.259-2.623-1.694a9 9 0 0 0-3.533-.713c-1.172 0-2.42.237-3.337.633a.26.26 0 0 0-.169.227q-.019.156.087.421c.056.146.207.531.5.42a8.4 8.4 0 0 1 2.919-.555c1.07 0 2.109.21 3.086.623c.777.328 1.51.803 2.306 1.493q.088.075.183.076c.155 0 .304-.153.432-.295c.212-.24.358-.438.149-.636m-4.947 7.29l-.7-.7l.73-.735c.16-.173.018-.357-.123-.498c-.205-.205-.402-.258-.528-.141l-.726.727l-.733-.734a.2.2 0 0 0-.142-.057q-.148 0-.344.197c-.225.225-.274.381-.156.506l.733.73l-.73.732a.27.27 0 0 0-.089.191c.002.133.123.249.195.318l.023.022q.188.183.352.184c.09 0 .146-.043.166-.06c.055-.052.674-.679.732-.74l.691.69a.3.3 0 0 0 .214.11q.166 0 .358-.195c.297-.304.148-.468.077-.548m4.773-3.355a6.5 6.5 0 0 0-1.403-2.081a6.53 6.53 0 0 0-4.63-1.918c-.893 0-1.787.178-2.583.515c-.636.27-1.713.962-2.344 1.612l-.003.004V3.23h9.05c.33-.004.33-.463.33-.614s0-.611-.331-.615H7.472a.43.43 0 0 0-.431.427v7.584c0 .244.304.421.588.481c.553.119.68-.058.816-.245l.018-.025c.207-.307.853-.957.86-.964a5.33 5.33 0 0 1 3.796-1.564c1.432 0 2.777.556 3.785 1.564a5.3 5.3 0 0 1 1.569 3.775a5.3 5.3 0 0 1-1.561 3.775a5.42 5.42 0 0 1-3.809 1.563a5.17 5.17 0 0 1-2.698-.745l.004-4.61c0-.615.266-1.284.713-1.788a2.62 2.62 0 0 1 1.983-.895c.744 0 1.438.282 1.955.794a2.67 2.67 0 0 1 .797 1.91c0 1.54-1.212 2.747-2.759 2.747c-.298 0-.84-.131-.862-.137c-.313-.093-.445.34-.49.484c-.167.55.085.659.138.675a3.8 3.8 0 0 0 1.252.184a3.965 3.965 0 0 0 3.96-3.962c0-2.167-1.775-3.93-3.957-3.93a4 4 0 0 0-2.827 1.15c-.718.706-1.13 1.648-1.13 2.583l-.001.024c-.003.117-.006 2.88-.007 3.788l-.004-.005c-.41-.454-.816-1.15-1.085-1.86c-.105-.279-.343-.23-.668-.13c-.142.044-.574.177-.478.49v.003c.005.013.109.299.17.44c.328.78.8 1.48 1.402 2.082a6.53 6.53 0 0 0 4.629 1.917a6.53 6.53 0 0 0 4.629-1.918a6.53 6.53 0 0 0 1.917-4.629a6.5 6.5 0 0 0-.514-2.548"></svg:path>`,
})
export class Lineicons500pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAdobeIcon],svg[lineicons-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.58 3.629H22v16.645zm-5.16 0H2v16.645zM12 9.855l4.645 10.516h-3.129l-1.355-3.355h-3.42z"></svg:path>`,
})
export class LineiconsAdobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAdonisIcon],svg[lineicons-adonis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21c-7.259 0-9-1.741-9-9s1.741-9 9-9s9 1.741 9 9s-1.741 9-9 9M9.452 7.454L6.63 13.87c-.128.311-.238.715-.238 1.063c0 1.595 1.118 2.713 2.713 2.713c.522 0 .956-.138 1.398-.277c.456-.145.92-.292 1.498-.292c.584 0 1.037.146 1.485.29c.437.14.868.279 1.411.279c1.595 0 2.713-1.119 2.713-2.713c0-.348-.11-.752-.238-1.063l-2.823-6.416C14.07 6.373 13.155 5.786 12 5.786s-2.071.587-2.548 1.668m-.238 7.424L12 8.572l2.75 6.306c-.789-.385-1.778-.568-2.75-.568c-1.008 0-1.961.183-2.786.568"></svg:path>`,
})
export class LineiconsAdonisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAeroplane1Icon],svg[lineicons-aeroplane-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.04 21.988c-.1 0-.19-.02-.28-.06l-3.78-1.55l-3.78 1.55c-.23.09-.49.07-.7-.07a.74.74 0 0 1-.33-.62v-2.18c0-.23.11-.45.29-.59l1.93-1.5l-.12-2.46l-5.16.82a.73.73 0 0 1-.6-.17a.77.77 0 0 1-.26-.57v-2.53c0-.29.17-.55.43-.68L9 8.858c-.1-2.25.57-4.5 1.9-6.32c.51-.7 1.69-.7 2.2 0a9.92 9.92 0 0 1 1.9 6.32l5.32 2.52c.26.12.43.39.43.68v2.53c0 .22-.1.43-.26.57c-.17.14-.39.21-.6.17l-5.16-.82l-.12 2.46l1.93 1.5c.18.14.29.36.29.59v2.18c0 .25-.12.48-.33.62c-.13.08-.27.13-.42.13zm-7.37-2.56v.69l3.03-1.24c.18-.08.39-.08.57 0l3.03 1.24v-.7l-1.95-1.52a.77.77 0 0 1-.29-.63l.18-3.68c.01-.21.11-.41.28-.54s.38-.19.59-.16l5.12.81v-1.18l-5.34-2.53a.77.77 0 0 1-.43-.72l.02-.47c.09-1.86-.44-3.71-1.5-5.23a8.47 8.47 0 0 0-1.5 5.23l.02.47c.02.3-.15.59-.43.72l-5.34 2.53v1.18l5.12-.81c.21-.03.42.02.59.16c.17.13.27.33.28.54l.18 3.68c.01.24-.1.48-.29.63l-1.94 1.52z"></svg:path>`,
})
export class LineiconsAeroplane1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAgendaIcon],svg[lineicons-agenda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.523 4.25A2.25 2.25 0 0 1 6.773 2h10.5a2.25 2.25 0 0 1 2.25 2.25v15.5a2.25 2.25 0 0 1-2.25 2.25h-8.25v.75a.75.75 0 0 1-1.5 0V22h-.75a2.25 2.25 0 0 1-2.25-2.25zm1.5 11.583v3.917c0 .414.336.75.75.75h6.75v-4.667zm7.5-1.5V9.667h-7.5v4.666zm1.5 1.5V20.5h2.25a.75.75 0 0 0 .75-.75v-3.917zm3-1.5V9.667h-3v4.666zm0-10.083a.75.75 0 0 0-.75-.75h-2.25v4.667h3zm-4.5-.75h-6.75a.75.75 0 0 0-.75.75v3.917h7.5z"></svg:path>`,
})
export class LineiconsAgendaIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAirbnbIcon],svg[lineicons-airbnb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.03 16.214c-.1-.24-.201-.5-.301-.72c-.16-.36-.32-.701-.46-1.021l-.02-.02a209 209 0 0 0-4.425-9.05l-.06-.12a39 39 0 0 1-.48-.94c-.2-.361-.4-.741-.721-1.102A3.23 3.23 0 0 0 12.021 2c-1.001 0-1.902.44-2.563 1.201c-.3.36-.52.74-.72 1.101q-.236.474-.48.941l-.06.12a235 235 0 0 0-4.425 9.05l-.02.04c-.14.32-.3.66-.461 1.02q-.15.33-.3.72c-.26.741-.34 1.442-.24 2.163a4.26 4.26 0 0 0 2.602 3.324a4.1 4.1 0 0 0 1.622.32a5.3 5.3 0 0 0 2.523-.72c.82-.461 1.601-1.122 2.482-2.082c.88.96 1.682 1.62 2.482 2.081a5.3 5.3 0 0 0 2.523.721c.56 0 1.121-.1 1.622-.32a4.25 4.25 0 0 0 2.602-3.324c.16-.7.08-1.4-.18-2.142M12 17.255c-1.08-1.361-1.781-2.642-2.022-3.723c-.1-.46-.12-.861-.06-1.221c.04-.32.16-.601.32-.841c.381-.54 1.022-.881 1.763-.881s1.401.32 1.762.88c.16.24.28.521.32.842c.06.36.04.78-.06 1.221c-.241 1.06-.942 2.342-2.023 3.723m7.988.941a2.98 2.98 0 0 1-1.822 2.343c-.48.2-1 .26-1.521.2c-.5-.06-1.001-.22-1.521-.52c-.721-.401-1.442-1.021-2.283-1.943c1.321-1.621 2.122-3.103 2.423-4.424c.14-.62.16-1.181.1-1.702c-.08-.5-.26-.96-.54-1.361c-.622-.901-1.663-1.422-2.824-1.422s-2.202.541-2.822 1.422c-.28.4-.46.86-.54 1.361a4.1 4.1 0 0 0 .1 1.702c.3 1.321 1.12 2.823 2.421 4.444c-.82.921-1.561 1.542-2.282 1.942c-.52.3-1.02.461-1.521.52a3.2 3.2 0 0 1-1.522-.2a2.98 2.98 0 0 1-1.821-2.342c-.06-.5-.02-1 .18-1.561c.06-.2.16-.4.26-.64c.14-.321.3-.662.46-1.002l.02-.04a218 218 0 0 1 4.405-8.988l.06-.12c.16-.3.32-.621.48-.922c.16-.32.34-.62.56-.88c.421-.48.982-.741 1.602-.741s1.182.26 1.602.74c.22.261.4.562.56.881c.161.3.321.621.481.921l.06.12a265 265 0 0 1 4.385 9.01v.02c.16.32.3.68.46 1c.1.24.2.44.26.641c.16.52.22 1.02.14 1.541"></svg:path>`,
})
export class LineiconsAirbnbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAirtableIcon],svg[lineicons-airtable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.993 3.509c-.361 0-.725.073-1.066.217L3.483 6.853c-.42.176-.409.768.01.944l7.485 3.012c.655.27 1.389.27 2.045 0l7.485-3.012c.419-.166.419-.768.01-.944l-7.465-3.127a2.7 2.7 0 0 0-1.06-.217M21.5 8.663a.5.5 0 0 0-.185.038l-8.343 3.281a.51.51 0 0 0-.317.478v7.529a.52.52 0 0 0 .221.416a.5.5 0 0 0 .463.051l8.344-3.292a.49.49 0 0 0 .317-.466v-7.53a.5.5 0 0 0-.148-.357a.5.5 0 0 0-.352-.148m-18.937.033a.53.53 0 0 0-.4.16A.5.5 0 0 0 2 9.2v7.071c0 .374.43.624.757.457l7.955-3.884c.388-.186.358-.768-.051-.924L2.736 8.732a.5.5 0 0 0-.173-.036"></svg:path>`,
})
export class LineiconsAirtableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAlarmIcon],svg[lineicons-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m57.6 53.1l-2-3.1c-.4-.6-.6-1.2-.6-1.9V27.3c0-5.9-2.5-11.4-7.1-15.5c-3.7-3.3-8.5-5.4-13.6-5.8V4c0-1.2-1-2.3-2.3-2.3c-1.2 0-2.3 1-2.3 2.3v1.9c-.2 0-.4 0-.6.1C17.5 7.3 8.8 16.6 8.8 27.7v20.4c-.1 1-.3 1.5-.5 1.8l-1.9 3.2c-.6 1-.6 2.2 0 3.2c.6.9 1.6 1.5 2.7 1.5h20.7V60c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3v-2.2H55c1.1 0 2.1-.6 2.7-1.5c.6-1 .6-2.2-.1-3.2m-46.1.2l.7-1.2c.6-1 .9-2.2 1.1-3.6V27.7c0-8.8 7-16.2 16.3-17.2c5.7-.6 11.3 1.1 15.4 4.7c3.6 3.2 5.6 7.5 5.6 12.1v20.8c0 1.5.4 2.9 1.3 4.3l.6.9z"></svg:path>`,
})
export class LineiconsAlarmIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAlarm1Icon],svg[lineicons-alarm-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.353 2.614a.75.75 0 1 0-.868-1.223a13.1 13.1 0 0 0-3.159 3.186a.75.75 0 1 0 1.23.857a11.6 11.6 0 0 1 2.797-2.82M19.514 1.39a.75.75 0 0 0-.868 1.224a11.6 11.6 0 0 1 2.796 2.82a.75.75 0 1 0 1.231-.857a13.1 13.1 0 0 0-3.159-3.186M11.25 12V6.5a.75.75 0 0 1 1.5 0v5.19l2.608 2.608a.75.75 0 0 1-1.06 1.06l-2.829-2.828z"></svg:path><svg:path fill="currentColor" d="m11.468 12.529l-.218-.53a.75.75 0 0 0 .218.53"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.478 10-10 10S2 17.523 2 12m10-8.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsAlarm1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAlignTextLeftIcon],svg[lineicons-align-text-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.023 4.5a.75.75 0 1 0 0 1.5h11a.75.75 0 1 0 0-1.5zm0 4.5a.75.75 0 1 0 0 1.5h16a.75.75 0 1 0 0-1.5zm0 9a.75.75 0 0 0 0 1.5h16a.75.75 0 1 0 0-1.5zm-.75-3.75a.75.75 0 0 1 .75-.75h11a.75.75 0 1 1 0 1.5h-11a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class LineiconsAlignTextLeftIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAlignTextCenterIcon],svg[lineicons-align-text-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.523 4.5a.75.75 0 1 1 0 1.5h-11a.75.75 0 1 1 0-1.5zm2.5 4.5a.75.75 0 1 1 0 1.5h-16a.75.75 0 0 1 0-1.5zm0 9a.75.75 0 1 1 0 1.5h-16a.75.75 0 0 1 0-1.5zm-1.75-3.75a.75.75 0 0 0-.75-.75h-11a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 .75-.75"></svg:path>`,
})
export class LineiconsAlignTextCenterIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAddFilesIcon],svg[lineicons-add-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M38.6 22.1h-4.3v-4.3c0-1.2-1-2.3-2.3-2.3c-1.2 0-2.3 1-2.3 2.3v4.3h-4.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h4.3V31c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3v-4.3h4.3c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3"></svg:path><svg:path fill="currentColor" d="M50 1.8H14c-3.4 0-6.1 2.7-6.1 6.1V40c0 1.5.6 2.9 1.7 3.9l18 17c1 1 2.3 1.5 3.7 1.5H50c3.4 0 6.1-2.7 6.1-6.1V7.9c0-3.4-2.7-6.1-6.1-6.1M15.7 43.4h11.7c.5 0 .9.4.9.8v11zm35.9 12.7c0 .9-.7 1.6-1.6 1.6H32.8V44.2c0-2.9-2.4-5.3-5.4-5.3h-15v-31c0-.9.7-1.6 1.6-1.6h36c.9 0 1.6.7 1.6 1.6z"></svg:path>`,
})
export class LineiconsAddFilesIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAlarmClockIcon],svg[lineicons-alarm-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43.4 34.8h-9.1v-9.3c0-1.2-1-2.3-2.3-2.3c-1.2 0-2.3 1-2.3 2.3v9.3h-.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h.3v.3c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3v-.3h9.1c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3"></svg:path><svg:path fill="currentColor" d="M59.5 19.1c0-5.5-4.4-9.9-9.9-9.9c-2.6 0-5 1-6.8 2.7c-2.7-1.2-5.5-2-8.6-2.2V6.3H37c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H26.9c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h2.8v3.5c-3 .3-5.9 1-8.6 2.2c-1.8-1.7-4.2-2.7-6.8-2.7c-5.5 0-9.9 4.4-9.9 9.9c0 2.7 1.1 5.3 3.1 7.1c-1.2 3-1.9 6.3-1.9 9.7c0 14.5 11.8 26.3 26.3 26.3S58.2 50.5 58.2 36c0-3.4-.7-6.7-1.9-9.7c2.1-1.9 3.2-4.5 3.2-7.2m-9.9-5.4a5.378 5.378 0 0 1 4.6 8.2q-2.85-4.5-7.2-7.5c.8-.5 1.7-.7 2.6-.7M9 19.1c0-3 2.4-5.4 5.4-5.4c.9 0 1.8.2 2.6.7c-2.9 2-5.3 4.6-7.2 7.5c-.5-.9-.8-1.8-.8-2.8m23 38.7C20 57.8 10.2 48 10.2 36S20 14.2 32 14.2S53.8 24 53.8 36S44 57.8 32 57.8"></svg:path>`,
})
export class LineiconsAlarmClockIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAlignTextRightIcon],svg[lineicons-align-text-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.023 4.5a.75.75 0 1 1 0 1.5h-11a.75.75 0 1 1 0-1.5zm0 4.5a.75.75 0 1 1 0 1.5h-16a.75.75 0 0 1 0-1.5zm0 9a.75.75 0 1 1 0 1.5h-16a.75.75 0 0 1 0-1.5zm.75-3.75a.75.75 0 0 0-.75-.75h-11a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 .75-.75"></svg:path>`,
})
export class LineiconsAlignTextRightIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAlpinejsIcon],svg[lineicons-alpinejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.556 7.413L22 11.838l-4.445 4.425l-4.444-4.425zm-11.112 0l9.214 9.174H6.77L2 11.838z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsAlpinejsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAmazonIcon],svg[lineicons-amazon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.408 13.7c-1.163.856-2.847 1.313-4.298 1.313a7.78 7.78 0 0 1-5.25-2.003c-.108-.098-.01-.232.12-.156c1.495.87 3.343 1.393 5.252 1.393c1.288 0 2.704-.266 4.007-.819c.196-.084.361.129.169.272"></svg:path><svg:path fill="currentColor" d="M14.89 13.147c.15.19-.165.975-.305 1.325c-.042.106.049.149.145.069c.624-.522.784-1.614.657-1.772s-1.217-.292-1.881.176c-.103.071-.086.17.028.157c.375-.045 1.209-.145 1.357.045M13.56 9.645V9.19c0-.069.053-.115.115-.115h2.035c.065 0 .117.047.117.115v.39c0 .065-.055.15-.153.285L14.62 11.37c.392-.01.805.049 1.16.249c.08.045.102.111.109.177v.485c0 .066-.074.143-.15.103a2.34 2.34 0 0 0-2.15.004c-.07.038-.144-.039-.144-.105v-.46c0-.074 0-.2.075-.313l1.22-1.75h-1.063c-.065 0-.118-.047-.118-.114m-7.42 2.834h-.62a.12.12 0 0 1-.11-.105V9.198c0-.064.053-.114.12-.114h.577c.06.002.108.049.112.106v.415h.011c.15-.401.434-.588.815-.588c.388 0 .63.187.804.588a.88.88 0 0 1 .855-.588a.88.88 0 0 1 .716.347c.196.267.156.656.156.996v2.005a.117.117 0 0 1-.12.115h-.618a.12.12 0 0 1-.112-.115v-1.684c0-.134.012-.468-.017-.595c-.046-.213-.185-.273-.364-.273c-.15 0-.306.1-.37.26s-.057.428-.057.608v1.684a.117.117 0 0 1-.12.115H7.18a.117.117 0 0 1-.111-.115l-.001-1.684c0-.354.058-.875-.381-.875c-.445 0-.428.508-.428.875v1.684a.117.117 0 0 1-.12.115M17.58 9.017c.918 0 1.415.789 1.415 1.792c0 .968-.55 1.737-1.416 1.737c-.902 0-1.393-.789-1.393-1.771c0-.99.497-1.758 1.393-1.758m.004.648c-.456 0-.485.622-.485 1.01s-.006 1.217.48 1.217c.48 0 .502-.67.502-1.077c0-.268-.01-.588-.092-.842c-.07-.221-.208-.308-.405-.308m2.603 2.815h-.617a.12.12 0 0 1-.111-.115l-.001-3.178a.117.117 0 0 1 .12-.103h.573a.12.12 0 0 1 .11.089v.485h.012c.173-.434.416-.641.844-.641c.277 0 .548.1.722.374c.162.254.162.682.162.99v1.999a.12.12 0 0 1-.12.1h-.62a.12.12 0 0 1-.11-.1v-1.726c0-.347.04-.855-.387-.855c-.15 0-.29.1-.358.254c-.087.194-.098.387-.098.601v1.711a.12.12 0 0 1-.121.115m-8.247-1.517v-.134c-.449 0-.921.095-.921.623c0 .267.139.448.377.448c.173 0 .33-.107.428-.281c.122-.214.116-.415.116-.656m.624 1.508a.13.13 0 0 1-.146.015c-.206-.17-.243-.25-.356-.413c-.34.347-.58.45-1.02.45c-.521 0-.926-.32-.926-.964c0-.502.271-.845.66-1.012c.336-.148.805-.174 1.164-.215v-.08c0-.147.01-.321-.076-.448c-.075-.114-.22-.161-.348-.161c-.235 0-.445.12-.497.371c-.01.056-.051.111-.108.114l-.6-.065c-.05-.011-.107-.052-.092-.13c.138-.727.796-.947 1.385-.947c.3 0 .694.08.932.309c.301.28.272.656.272 1.064v.965c0 .29.12.417.234.574c.039.055.048.122-.003.164c-.126.106-.35.301-.474.411zm-8.739-1.508v-.134c-.448 0-.92.095-.92.623c0 .267.138.448.376.448c.174 0 .33-.107.428-.281c.122-.214.116-.415.116-.656m.624 1.508a.13.13 0 0 1-.146.015c-.206-.17-.242-.25-.355-.413c-.34.347-.58.45-1.02.45c-.521 0-.927-.32-.927-.964c0-.502.272-.845.66-1.012c.336-.148.805-.174 1.164-.215v-.08c0-.147.011-.321-.075-.448c-.076-.114-.22-.161-.347-.161c-.236 0-.447.12-.498.371c-.01.056-.052.111-.107.114l-.601-.065c-.05-.011-.106-.052-.092-.13c.138-.727.795-.947 1.384-.947c.301 0 .695.08.932.309c.301.28.273.656.273 1.064v.965c0 .29.12.417.233.574c.04.055.049.122-.002.164c-.126.106-.35.301-.474.411z"></svg:path>`,
})
export class LineiconsAmazonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAmazonOriginalIcon],svg[lineicons-amazon-original-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.545 17.345a.57.57 0 0 0 .642-.065v.001l.003.008q1.03-.915 2.08-1.802c.222-.184.183-.471.012-.721l-.161-.219c-.443-.597-.862-1.163-.862-2.297V8.02l.001-.43c.01-1.623.018-3.105-1.197-4.239c-1.04-1-2.766-1.351-4.087-1.351c-2.58 0-5.466.962-6.076 4.16c-.064.333.184.512.405.562l2.638.295c.248-.011.427-.246.473-.496c.225-1.1 1.145-1.63 2.18-1.63c.56 0 1.194.206 1.522.706c.343.5.338 1.166.333 1.764l-.001.202v.343a73 73 0 0 1-.77.08c-1.431.144-3.09.31-4.333.858c-1.703.733-2.894 2.233-2.894 4.435c0 2.821 1.775 4.23 4.061 4.23c1.928 0 2.985-.455 4.474-1.973q.109.157.2.295c.357.53.59.877 1.357 1.514M13.45 10.81c0 .994.002 1.838-.508 2.733c-.437.763-1.125 1.233-1.878 1.233c-1.042 0-1.653-.793-1.653-1.965c0-2.313 2.073-2.733 4.04-2.733l-.002.587zM11.98 22c2.58 0 5.577-.812 7.645-2.337c.344-.254.05-.632-.3-.483a18.6 18.6 0 0 1-7.129 1.457c-3.391 0-6.685-.93-9.344-2.479c-.233-.136-.4.103-.213.278C5.104 20.663 8.355 22 11.98 22"></svg:path><svg:path fill="currentColor" d="M18.092 18.595c.674-.079 2.133-.25 2.393.084h.009c.265.338-.294 1.735-.544 2.357c-.083.19.08.265.25.123c1.11-.928 1.395-2.873 1.169-3.153c-.227-.28-2.16-.518-3.348.313c-.182.127-.152.303.052.279z"></svg:path>`,
})
export class LineiconsAmazonOriginalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAmbulanceIcon],svg[lineicons-ambulance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M57.1 9.8H25.9c-2.8 0-5.1 2.4-5.1 5.3v2.6h-3.4v-2c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v2H9.6c-1.4 0-2.7.9-3.2 2.3L1.9 32.3l-.4 1.1l.8 1.1V45c0 2 1.6 3.6 3.6 3.6h.5c1 3.3 4 5.7 7.6 5.7s6.6-2.4 7.6-5.7h20.9c1 3.3 4 5.7 7.6 5.7s6.6-2.4 7.6-5.7h1.7c1.6 0 3-1.4 3-3V15.1c-.2-2.9-2.4-5.3-5.3-5.3M10.4 22.2h10.4v8.7H7.2zM14 49.7c-1.9 0-3.4-1.6-3.4-3.5s1.5-3.5 3.4-3.5s3.4 1.6 3.4 3.5s-1.5 3.5-3.4 3.5m0-11.4c-3.2 0-6 2-7.2 4.8v-7.6h14v6.8c-1.4-2.5-3.9-4-6.8-4m36.1 11.4c-1.9 0-3.4-1.6-3.4-3.5s1.5-3.5 3.4-3.5s3.4 1.6 3.4 3.5s-1.6 3.5-3.4 3.5m0-11.4c-3.6 0-6.7 2.5-7.6 5.8H25.3v-29c0-.5.3-.8.6-.8h31.3c.3 0 .6.4.6.9v28.9h-.1c-1-3.4-4-5.8-7.6-5.8"></svg:path><svg:path fill="currentColor" d="M46.8 25.6h-3v-3c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v3h-3c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h3v3c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-3h3c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2"></svg:path>`,
})
export class LineiconsAmbulanceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAmazonPayIcon],svg[lineicons-amazon-pay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.408 6.45c-.535 0-1.095.248-1.531.635l-.049-.332a.18.18 0 0 0-.177-.154h-.465a.155.155 0 0 0-.155.154v6.332c0 .085.07.154.155.154h.608a.154.154 0 0 0 .154-.154V10.9c.385.343.887.541 1.423.541c1.273 0 2.026-1.102 2.026-2.474c0-1.282-.492-2.516-1.99-2.516m.608 3.926c-.237.233-.501.297-.9.297c-.354 0-.82-.185-1.168-.443V7.64c.362-.279.825-.43 1.21-.43c1.007 0 1.281.792 1.281 1.699c.006.61-.106 1.156-.423 1.468m5.833.793c0 .085-.07.155-.155.155h-.454a.18.18 0 0 1-.177-.155l-.046-.309a2.7 2.7 0 0 1-.742.44c-.533.207-1.149.242-1.67-.079c-.377-.23-.577-.683-.577-1.15c0-.361.111-.72.358-.98c.329-.354.806-.529 1.382-.529c.348 0 .846.041 1.209.16V8.1c0-.632-.266-.905-.968-.905c-.536 0-.946.08-1.517.258c-.091.003-.145-.066-.145-.151v-.355c0-.085.073-.167.152-.192c.407-.178.985-.288 1.599-.309c.8 0 1.75.18 1.75 1.412zm-.872-.907v-.938c-.304-.083-.808-.118-1.003-.118c-.308 0-.646.073-.822.263a.78.78 0 0 0-.191.531c0 .25.086.5.288.624c.234.159.598.14.939.043c.328-.093.636-.258.79-.405m1.73 2.814v-.334c0-.094.046-.16.145-.154c.185.026.446.053.632.014c.243-.05.416-.222.52-.457c.144-.332.24-.6.3-.775l-1.84-4.56c-.03-.077-.04-.22.115-.22h.643c.123 0 .173.078.2.154l1.335 3.704l1.273-3.704c.026-.076.079-.154.2-.154h.607c.153 0 .145.143.114.22l-1.826 4.703c-.236.625-.55 1.622-1.26 1.795c-.355.093-.803.06-1.067-.05c-.066-.034-.091-.123-.091-.182m5.987-.19c-.622.009-1.357.148-1.914.54c-.172.119-.142.284.05.262c.626-.075 2.021-.244 2.27.075c.25.318-.276 1.633-.509 2.22c-.072.176.08.249.241.115c1.043-.873 1.314-2.704 1.1-2.967c-.107-.132-.616-.254-1.238-.245"></svg:path><svg:path fill="currentColor" d="M2.144 13.554c-.146.02-.208.204-.056.35c2.611 2.45 6.062 3.649 9.893 3.649c2.733 0 5.906-.892 8.096-2.572c.362-.28.053-.698-.318-.533a19 19 0 0 1-7.55 1.606c-3.597 0-7.08-.751-9.897-2.457a.26.26 0 0 0-.168-.043"></svg:path>`,
})
export class LineiconsAmazonPayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAmbulance1Icon],svg[lineicons-ambulance-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.875 6.17a.75.75 0 0 0-.75.75v1.83h-1.83a.75.75 0 1 0 0 1.5h1.83v1.83a.75.75 0 0 0 1.5 0v-1.83h1.83a.75.75 0 1 0 0-1.5h-1.83V6.92a.75.75 0 0 0-.75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 5.5a2.25 2.25 0 0 1 2.25-2.25h9.25a2.25 2.25 0 0 1 2.25 2.25v.89h1.454c.747 0 1.445.37 1.863.99l2.547 3.764c.252.372.386.811.386 1.26v4.346a.75.75 0 0 1 0 1.5h-1.922a3.066 3.066 0 0 1-6.026 0h-3.724a3.066 3.066 0 0 1-6.026 0H4.25A2.25 2.25 0 0 1 2 16zm2.395 11.25a3.066 3.066 0 0 1 5.84 0h3.91q.046-.143.105-.28V5.5a.75.75 0 0 0-.75-.75H4.25a.75.75 0 0 0-.75.75V16c0 .414.336.75.75.75zm11.355-1.834a3.066 3.066 0 0 1 4.235 1.834h.515v-4.055h-4.75zm0-3.721h4.087L17.825 8.22a.75.75 0 0 0-.621-.33H15.75zm1.315 4.925a1.565 1.565 0 1 0 0 3.13a1.565 1.565 0 0 0 0-3.13m-9.75 0a1.565 1.565 0 1 0 0 3.13a1.565 1.565 0 0 0 0-3.13" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsAmbulance1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAmdIcon],svg[lineicons-amd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.697 14.068H5.588l-.34-.818H3.4l-.31.818H2l1.667-4.133H4.86zM4.28 10.922l-.606 1.606h1.273zm6.447-.987h.897v4.133h-1.03v-2.582l-1.115 1.297H9.32l-1.115-1.297v2.582h-1.03V9.935h.897l1.327 1.533zm3.508 0c1.51 0 2.285.939 2.285 2.072c0 1.188-.751 2.061-2.4 2.061h-1.71V9.935zm-.794 3.376h.673c1.036 0 1.346-.704 1.346-1.31c0-.709-.382-1.309-1.358-1.309h-.66zm5.13-2.396l-1.3-1.3H22v4.73l-1.3-1.299v-2.131zm-.002.26l-1.338 1.338v1.872h1.872l1.338-1.337h-1.872z"></svg:path>`,
})
export class LineiconsAmdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAmexIcon],svg[lineicons-amex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.904 14.024h.94l.29-.944h1.78l.292.944h1.78v-3.125l1.133 3.125h.841l1.133-3.028v3.028h.81V9.857h-1.328l-1.035 2.8l-1.036-2.8H8.047v3.971L6.591 9.857H5.458zm16.096 0l-1.554-2.084L20 9.857h-1.133l-1.036 1.237l-.841-1.237h-3.4v4.167h3.302l1.035-1.368l1.036 1.368zm-14.024-3.32l.518 1.432H5.458zm8.424.097h2.072l.841 1.14l-.938 1.236H14.4v-.814h1.878v-.846H14.4z"></svg:path><svg:path fill="currentColor" d="M19.381 6.047c.789 0 1.428.64 1.428 1.429v9.048c0 .789-.64 1.428-1.428 1.428H4.619a1.43 1.43 0 0 1-1.429-1.428V7.476c0-.789.64-1.429 1.429-1.429zM4.619 4.857A2.62 2.62 0 0 0 2 7.476v9.048a2.62 2.62 0 0 0 2.619 2.619h14.762A2.62 2.62 0 0 0 22 16.523V7.477a2.62 2.62 0 0 0-2.619-2.62z"></svg:path>`,
})
export class LineiconsAmexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAnchorIcon],svg[lineicons-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.75 7.396a2.751 2.751 0 1 0-1.5 0V9H9.375a.75.75 0 0 0 0 1.5h1.875v10h-.247a5.25 5.25 0 0 1-5.25-5.25v-.812l.967.966a.75.75 0 0 0 1.06-1.06l-2.25-2.249a.75.75 0 0 0-1.06 0l-2.25 2.249a.75.75 0 1 0 1.06 1.06l.973-.972v.818a6.75 6.75 0 0 0 6.75 6.75h1.993a6.75 6.75 0 0 0 6.75-6.75v-.819l.974.974a.75.75 0 0 0 1.06-1.061l-2.25-2.249a.75.75 0 0 0-1.06 0l-2.25 2.249a.75.75 0 1 0 1.06 1.06l.966-.964v.81c0 2.9-2.35 5.25-5.25 5.25h-.246v-10h1.875a.75.75 0 0 0 0-1.5H12.75zm-2-2.646a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAndroidIcon],svg[lineicons-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.604 14.784a.833.833 0 1 1 0-1.666a.833.833 0 0 1 0 1.666m-9.206 0a.833.833 0 1 1 0-1.666a.833.833 0 0 1 0 1.666m9.504-5.016l1.665-2.883a.345.345 0 0 0-.127-.473a.346.346 0 0 0-.473.126l-1.685 2.92A10.3 10.3 0 0 0 12 8.541a10.3 10.3 0 0 0-4.28.915L6.034 6.538a.346.346 0 0 0-.6.347L7.1 9.768c-2.858 1.554-4.813 4.448-5.1 7.866h20c-.286-3.418-2.241-6.312-5.099-7.866"></svg:path>`,
})
export class LineiconsAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAndroidOldIcon],svg[lineicons-android-old-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.776 8.478q-.517 0-.877.36q-.36.362-.36.866v5.168q0 .517.36.878q.36.36.877.36q.516 0 .872-.36q.354-.36.354-.878V9.704q0-.505-.36-.865a1.18 1.18 0 0 0-.866-.36m9.952-4.64l.853-1.573q.085-.158-.06-.24q-.156-.074-.24.071l-.865 1.587A5.9 5.9 0 0 0 12 3.178q-1.275 0-2.416.505l-.865-1.587q-.086-.144-.24-.072q-.146.085-.06.24l.853 1.575a5.27 5.27 0 0 0-2.068 1.845a4.66 4.66 0 0 0-.769 2.59h11.118q0-1.405-.77-2.59a5.3 5.3 0 0 0-2.055-1.845m-4.934 2.29a.45.45 0 0 1-.33.14a.43.43 0 0 1-.325-.14a.46.46 0 0 1-.132-.33q0-.192.132-.33a.43.43 0 0 1 .324-.138q.193 0 .331.138a.45.45 0 0 1 .138.33a.45.45 0 0 1-.138.33m5.066 0a.43.43 0 0 1-.324.14a.45.45 0 0 1-.331-.14a.45.45 0 0 1-.138-.33a.45.45 0 0 1 .138-.33a.45.45 0 0 1 .33-.138q.193 0 .325.138a.46.46 0 0 1 .132.33a.46.46 0 0 1-.132.33M6.483 16.712q0 .555.384.938q.385.384.938.384h.89l.011 2.729q0 .517.36.878q.362.36.866.36q.517 0 .877-.36q.36-.361.361-.878v-2.729h1.659v2.729q0 .517.36.878q.36.36.877.36t.878-.36t.36-.878v-2.729h.902q.54 0 .925-.384t.385-.937V8.706H6.483zm12.74-8.233q-.505 0-.865.355q-.36.354-.36.871v5.168q0 .517.36.878q.36.36.865.36q.517 0 .878-.36q.36-.36.36-.878V9.704q0-.516-.36-.871a1.2 1.2 0 0 0-.878-.355"></svg:path>`,
})
export class LineiconsAndroidOldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAndroidOriginalIcon],svg[lineicons-android-original-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.8 46.5c0 2.3 1.8 4.2 4.2 4.2h2.7v8.5c0 2.1 1.7 3.8 3.8 3.8s3.8-1.7 3.8-3.8v-8.5h5.1v8.5c0 2.1 1.7 3.8 3.8 3.8s3.8-1.7 3.8-3.8v-8.5h2.7c2.3 0 4.2-1.8 4.2-4.2V21.9H14.8zM40.5 6.8L43.1 2c.1-.3.1-.6-.1-.7c-.2-.3-.3-.3-.3-.3c-.1 0-.4.1-.4.3l-2.7 4.9c-2.3-1-4.8-1.5-7.3-1.5c-2.7 0-5.1.6-7.3 1.5l-2.7-4.9c-.1-.3-.4-.4-.7-.1c-.3.1-.4.4-.1.7l2.7 4.8c-5.6 2.8-9 7.9-9 13.8h34.2c-.2-6-3.9-11-8.9-13.7m-16.4 7.5c-.7 0-1.4-.7-1.4-1.4s.7-1.4 1.4-1.4s1.4.7 1.4 1.4s-.5 1.4-1.4 1.4m15.8 0c-.7 0-1.4-.7-1.4-1.4s.7-1.4 1.4-1.4s1.4.7 1.4 1.4s-.6 1.4-1.4 1.4M9.6 21.2c-2.1 0-3.8 1.7-3.8 3.8v15.9c0 2.1 1.7 3.8 3.8 3.8s3.8-1.7 3.8-3.8V25c.1-2.2-1.7-3.8-3.8-3.8m44.8 0c-2.1 0-3.8 1.7-3.8 3.8v15.9c0 2.1 1.7 3.8 3.8 3.8s3.8-1.7 3.8-3.8V25c0-2.2-1.7-3.8-3.8-3.8"></svg:path>`,
})
export class LineiconsAndroidOriginalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAngellistIcon],svg[lineicons-angellist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.815 10.368c.452-1.26 1.777-4.943 1.777-6.106c0-1.034-.646-1.907-1.745-1.907c-2.13 0-2.809 4.117-3.78 6.366C12.29 6.585 11.17 2 9.35 2c-1.228 0-1.777.905-1.777 2.036c0 1.357 1.325 4.975 1.81 6.332c-.227-.097-.518-.129-.776-.129c-.905 0-1.874 1.131-1.874 2.036c0 .355.194.872.323 1.13c-1.454.42-2.003 1.325-2.003 2.812c0 2.81 2.65 5.783 6.43 5.783c4.588 0 7.463-3.457 7.463-7.916c-.064-1.712-.29-3.199-2.132-3.716m-1.39-4.135c.13-.453.808-2.52 1.454-2.52c.356 0 .453.355.453.646c0 .743-1.551 4.814-1.81 5.783l-1.325-.226zM8.802 3.874c0-.452.549-1.777 1.81 1.81l1.324 3.909c-.646-.032-1.099-.13-1.357.032c-.42-1.066-1.777-4.62-1.777-5.751m-.097 7.625c1.13 0 2.65 3.684 2.65 4.2c0 .194-.195.453-.42.453c-.809 0-3.006-3.005-3.006-3.813c0-.29.453-.84.776-.84m7.173 7.302c-1.131 1.228-2.585 1.907-4.265 1.907c-2.327 0-4.136-1.26-5.008-3.425c-.647-1.68.129-2.65.807-2.65c.453 0 2.133 2.327 2.133 2.811c0 .194-.323.323-.453.323c-.646 0-.872-.581-2.003-2.003c-1.13 1.131.808 3.425 2.262 3.425c1.034 0 1.68-.97 1.486-1.648c.13 0 .323 0 .453-.032c.032 1.034.355 2.326 1.647 2.423c0-.032.097-.258.097-.258c0-.679-.42-1.26-.42-1.971c0-1.099.873-2.197 1.745-2.811c.323-.226.679-.356 1.034-.485c.355-.13.775-.323 1.034-.582c-.032-.452-.226-.807-.646-.807c-1.131-.033-4.782.097-4.782-1.583c0-.227 0-.517.678-.517c1.228 0 4.46.323 5.428 1.13c.711.55.937 4.33-1.227 6.753m-3.813-4.975c.355.129.776.129 1.13.226c-.258.226-.548.452-.775.743a5.6 5.6 0 0 1-.355-.97"></svg:path>`,
})
export class LineiconsAngellistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAngleDoubleDownIcon],svg[lineicons-angle-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.608 11.095a.75.75 0 0 0-1.06 1.06l6.25 6.25a.75.75 0 0 0 1.06 0l6.25-6.25a.75.75 0 0 0-1.06-1.06l-5.72 5.72z"></svg:path><svg:path fill="currentColor" d="M6.608 6.595a.75.75 0 0 0-1.06 1.06l6.25 6.25a.75.75 0 0 0 1.06 0l6.25-6.25a.75.75 0 0 0-1.06-1.06l-5.72 5.72z"></svg:path>`,
})
export class LineiconsAngleDoubleDownIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAngleDoubleLeftIcon],svg[lineicons-angle-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.734 6.78a.75.75 0 0 0-1.061-1.06l-6.25 6.25a.75.75 0 0 0 0 1.06l6.25 6.25a.75.75 0 0 0 1.06-1.06l-5.72-5.72z"></svg:path><svg:path fill="currentColor" d="M18.234 6.78a.75.75 0 0 0-1.061-1.06l-6.25 6.25a.75.75 0 0 0 0 1.06l6.25 6.25a.75.75 0 0 0 1.06-1.06l-5.72-5.72z"></svg:path>`,
})
export class LineiconsAngleDoubleLeftIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAngleDoubleRightIcon],svg[lineicons-angle-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.423 18.22a.75.75 0 1 0 1.06 1.06l6.25-6.25a.75.75 0 0 0 0-1.06l-6.25-6.25a.75.75 0 0 0-1.06 1.06l5.72 5.72z"></svg:path><svg:path fill="currentColor" d="M10.923 18.22a.75.75 0 1 0 1.06 1.06l6.25-6.25a.75.75 0 0 0 0-1.06l-6.25-6.25a.75.75 0 0 0-1.06 1.06l5.72 5.72z"></svg:path>`,
})
export class LineiconsAngleDoubleRightIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAngleDoubleUpIcon],svg[lineicons-angle-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.048 18.405a.75.75 0 0 0 1.06-1.06l-6.25-6.25a.75.75 0 0 0-1.06 0l-6.25 6.25a.75.75 0 1 0 1.06 1.06l5.72-5.72z"></svg:path><svg:path fill="currentColor" d="M18.048 13.905a.75.75 0 0 0 1.06-1.06l-6.25-6.25a.75.75 0 0 0-1.06 0l-6.25 6.25a.75.75 0 1 0 1.06 1.06l5.72-5.72z"></svg:path>`,
})
export class LineiconsAngleDoubleUpIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAngularIcon],svg[lineicons-angular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.306 12.548h3.42l-1.742-4.096zM11.984 2L2.726 5.323l1.451 12.322L11.984 22l7.87-4.355l1.42-12.322zm5.806 15.226h-2.193l-1.13-2.903H9.532l-1.194 2.903h-2.16l5.806-13z"></svg:path>`,
})
export class LineiconsAngularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsApartmentIcon],svg[lineicons-apartment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 1.8H33.5c-3.4 0-6.2 2.8-6.2 6.3V12H8c-3.4 0-6.3 2.8-6.3 6.3V56c0 3.4 2.8 6.3 6.3 6.3h48c3.4 0 6.3-2.8 6.3-6.3V8c0-3.4-2.9-6.2-6.3-6.2m-28.8 56H8c-1 0-1.8-.8-1.8-1.8V18.2c0-1 .8-1.8 1.8-1.8h19.2zM57.8 56c0 1-.8 1.8-1.8 1.8H31.7V8c0-1 .8-1.8 1.7-1.8H56c1 0 1.8.8 1.8 1.8z"></svg:path><svg:path fill="currentColor" d="M14 28.1h5.6c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H14c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3m0 11.2h5.6c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H14c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3m-.1 11.3h5.6c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-5.6c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3m33.7-35.9H42c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h5.6c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3m0 14.4H42c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3h5.6c1.2 0 2.3-1 2.3-2.3c-.1-1.3-1.1-2.3-2.3-2.3m-.1 14.4h-5.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h5.6c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsApartmentIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAppStoreIcon],svg[lineicons-app-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 6.548l.355-.645a.816.816 0 0 1 1.129-.322c.42.225.548.742.322 1.129l-3.548 6.097h2.549c.806 0 1.258.967.967 1.645H6.258a.8.8 0 0 1-.806-.807c0-.451.354-.806.806-.806h2.097l2.677-4.71l-.87-1.452c-.227-.419-.098-.903.322-1.129s.903-.096 1.129.323zm-3.194 8.807l-.774 1.355a.816.816 0 0 1-1.129.322a.816.816 0 0 1-.322-1.129l.58-1.032q1.065-.34 1.645.484m6.84-2.484h2.128c.452 0 .807.355.807.806a.8.8 0 0 1-.807.807h-1.193l.806 1.42c.226.419.097.902-.323 1.128c-.419.226-.903.097-1.129-.322c-1.354-2.355-2.354-4.065-3.032-5.258c-.677-1.194-.193-2.355.258-2.775c.58.904 1.387 2.323 2.484 4.194M12 2C6.452 2 2 6.452 2 12s4.452 10 10 10s10-4.452 10-10S17.548 2 12 2m8.742 10c0 4.774-3.871 8.742-8.742 8.742c-4.774 0-8.742-3.871-8.742-8.742c0-4.774 3.871-8.742 8.742-8.742c4.774 0 8.742 3.871 8.742 8.742"></svg:path>`,
})
export class LineiconsAppStoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAppleBrandIcon],svg[lineicons-apple-brand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.741 8.819c-.117.09-2.198 1.244-2.198 3.81c0 2.968 2.647 4.019 2.727 4.045c-.013.064-.421 1.438-1.396 2.838c-.87 1.232-1.778 2.462-3.159 2.462s-1.737-.79-3.332-.79c-1.554 0-2.106.816-3.37.816c-1.263 0-2.145-1.14-3.159-2.54c-1.174-1.644-2.123-4.199-2.123-6.623c0-3.888 2.568-5.95 5.095-5.95c1.343 0 2.462.868 3.306.868c.802 0 2.053-.92 3.58-.92c.58 0 2.66.051 4.03 1.984m-4.753-3.63c.632-.739 1.078-1.763 1.078-2.787A2 2 0 0 0 16.029 2c-1.028.038-2.251.674-2.988 1.516c-.58.648-1.12 1.672-1.12 2.71c0 .156.027.312.039.362c.065.012.17.026.276.026c.922 0 2.082-.608 2.753-1.426"></svg:path>`,
})
export class LineiconsAppleBrandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAppleMusicIcon],svg[lineicons-apple-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 7.986a25 25 0 0 0-.009-.543a8 8 0 0 0-.104-1.182a4 4 0 0 0-.37-1.125a3.78 3.78 0 0 0-1.653-1.652a4 4 0 0 0-1.124-.371a8 8 0 0 0-1.182-.104a25 25 0 0 0-.543-.008L15.37 3H8.63l-.644.001q-.272.001-.543.008a8 8 0 0 0-1.183.105a4 4 0 0 0-1.123.37a3.8 3.8 0 0 0-1.653 1.653c-.183.36-.3.728-.371 1.124c-.07.39-.094.788-.104 1.182q-.007.272-.008.543L3 8.631v6.738l.001.645q.001.271.008.543c.01.395.034.792.104 1.182c.071.396.188.765.37 1.125a3.78 3.78 0 0 0 1.654 1.652c.36.183.728.3 1.123.37c.39.07.788.094 1.183.105q.27.007.543.008h8.028q.271-.001.543-.008a8 8 0 0 0 1.183-.104a4 4 0 0 0 1.123-.37a3.8 3.8 0 0 0 1.653-1.653c.183-.36.3-.729.37-1.125c.07-.39.094-.788.105-1.182q.007-.27.008-.543zm-4.823 6.727c0 .228-.002.435-.05.663q-.067.334-.262.618a1.6 1.6 0 0 1-.492.455a2 2 0 0 1-.625.228c-.415.083-.699.102-.966.049a1.34 1.34 0 0 1-.65-.33a1.42 1.42 0 0 1-.454-.891a1.42 1.42 0 0 1 .384-1.12c.148-.155.335-.278.584-.375c.26-.1.548-.161.99-.25l.35-.07c.152-.032.284-.07.39-.2s.108-.29.108-.446V9.079c0-.303-.136-.386-.426-.33c-.207.04-4.654.937-4.654.937c-.251.06-.34.143-.34.454v5.808c0 .228-.011.435-.059.663c-.046.221-.131.43-.262.617a1.6 1.6 0 0 1-.492.456a2 2 0 0 1-.625.23c-.415.084-.699.103-.966.05a1.35 1.35 0 0 1-.65-.334a1.4 1.4 0 0 1-.443-.89a1.41 1.41 0 0 1 .373-1.12c.148-.155.335-.278.584-.375c.26-.101.548-.162.99-.25l.35-.071c.152-.031.284-.07.39-.2s.118-.282.118-.438V7.59c0-.09.008-.15.012-.18a.54.54 0 0 1 .18-.348a.75.75 0 0 1 .334-.15H9.9l5.35-1.08c.046-.01.433-.078.476-.082c.29-.025.452.165.452.473z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsAppleMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAppleMusicAltIcon],svg[lineicons-apple-music-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.374 14.349v-3.254h-.021l-1.31 3.254h-.5l-1.311-3.254H7.21v3.254h-.614V9.928h.78l1.405 3.523h.024l1.402-3.523h.783v4.421zm4.012 0h-.623v-.545h-.015c-.175.386-.497.603-.981.603c-.69 0-1.111-.456-1.111-1.195v-2.086h.65v1.958c0 .49.229.753.677.753c.47 0 .753-.33.753-.833v-1.878h.65zm1.781-3.281c.738 0 1.216.416 1.238 1.01h-.611c-.037-.312-.262-.508-.627-.508c-.352 0-.587.175-.587.432c0 .202.145.34.488.42l.515.12c.647.152.894.41.894.875c0 .589-.54.993-1.285.993c-.792 0-1.268-.395-1.328-1.008h.644q.088.504.684.503c.39 0 .632-.166.632-.43c0-.208-.118-.33-.464-.41l-.515-.122c-.602-.141-.9-.435-.9-.904c0-.576.494-.971 1.222-.971m1.76-.794a.375.375 0 1 1 .75 0c0 .208-.165.38-.373.38a.38.38 0 0 1-.376-.38m.052.852h.65v3.223h-.65zm3.395 1.109c-.066-.343-.32-.616-.744-.616c-.502 0-.833.426-.833 1.118c0 .708.334 1.119.84 1.119c.4 0 .662-.224.737-.598H22c-.07.686-.608 1.152-1.37 1.152c-.905 0-1.495-.631-1.495-1.673c0-1.023.59-1.67 1.49-1.67c.815 0 1.312.534 1.369 1.168zM4.608 10.359c-.168.201-.435.36-.702.337c-.035-.272.099-.561.25-.738a1.04 1.04 0 0 1 .696-.367c.029.284-.081.561-.244.769m.24.39c.151.012.585.06.863.477c-.023.018-.515.307-.51.914c.007.725.626.966.631.973c-.005.017-.098.341-.323.677c-.197.295-.4.584-.724.59c-.312.005-.417-.189-.775-.189s-.475.183-.77.194c-.312.012-.55-.312-.746-.607c-.405-.595-.712-1.68-.295-2.41c.202-.365.573-.595.972-.601c.307-.006.59.206.775.206s.515-.247.903-.224"></svg:path>`,
})
export class LineiconsAppleMusicAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsApplePayIcon],svg[lineicons-apple-pay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.123 11.196c.012 1.104 1.002 1.47 1.01 1.475c-.008.024-.159.525-.521 1.039c-.314.444-.64.888-1.153.896c-.506.008-.669-.29-1.243-.29c-.579 0-.758.282-1.235.298c-.497.016-.872-.48-1.19-.925c-.648-.904-1.14-2.559-.476-3.675c.33-.554.92-.905 1.56-.917c.485-.008.946.318 1.243.318s.856-.391 1.442-.334c.245.008.938.098 1.378.725c-.037.02-.823.465-.815 1.39m-.95-2.714c.265-.31.44-.738.392-1.166c-.38.017-.84.245-1.109.555c-.244.273-.456.709-.4 1.128c.425.033.857-.208 1.117-.517m3.812-.53c.194-.032.413-.06.648-.088q.353-.041.775-.04q.605.001 1.043.14c.292.097.531.23.721.412q.242.237.38.56q.136.325.136.748q0 .513-.186.898a1.8 1.8 0 0 1-.507.645a2.2 2.2 0 0 1-.767.39a3.5 3.5 0 0 1-.969.13a4 4 0 0 1-.796-.07v2.836H9.99v-6.56zm.474 3.311q.174.049.384.069q.212.018.453.02q.907.001 1.406-.415q.5-.412.499-1.212q0-.386-.132-.669a1.2 1.2 0 0 0-.37-.467a1.7 1.7 0 0 0-.574-.274a2.8 2.8 0 0 0-.738-.092q-.321 0-.557.024a5 5 0 0 0-.37.052zm6.997 2.126q.001.287.008.572q.012.286.062.552h-.445l-.07-.668h-.021a1.5 1.5 0 0 1-.231.273q-.147.145-.326.25a1.6 1.6 0 0 1-.424.181q-.235.068-.52.069q-.352 0-.618-.113a1.3 1.3 0 0 1-.437-.294a1.1 1.1 0 0 1-.256-.419a1.4 1.4 0 0 1-.087-.471q0-.838.722-1.289q.721-.453 2.173-.435v-.129q0-.185-.037-.426a1.3 1.3 0 0 0-.157-.46a1 1 0 0 0-.363-.362q-.241-.147-.655-.149a2.15 2.15 0 0 0-1.18.354l-.152-.346q.322-.216.664-.31q.34-.091.717-.093q.506 0 .82.17c.21.112.38.257.5.434q.178.266.247.596q.067.332.066.657zm-.474-1.405a7 7 0 0 0-.8.028q-.42.042-.771.173a1.5 1.5 0 0 0-.586.39q-.229.257-.23.682q0 .502.292.736q.29.237.656.238q.292-.001.523-.08q.23-.08.404-.214q.172-.134.289-.302a1.4 1.4 0 0 0 .177-.346a1.3 1.3 0 0 0 .05-.286zm1.397-2.199l1.229 3.073a13 13 0 0 1 .354 1.027h.021a20 20 0 0 1 .363-1.043l1.15-3.053h.503l-1.402 3.468q-.212.55-.4.998a10 10 0 0 1-.379.81a6 6 0 0 1-.388.636a2.6 2.6 0 0 1-.436.483q-.285.248-.52.359a3 3 0 0 1-.317.14l-.161-.382q.18-.078.404-.205q.223-.129.433-.335q.181-.175.4-.467q.215-.289.387-.705a.8.8 0 0 0 .062-.205a.6.6 0 0 0-.062-.205l-1.744-4.382h.503z"></svg:path>`,
})
export class LineiconsApplePayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsArcBrowserIcon],svg[lineicons-arc-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4.687 15.146L3.7 17.218c-.502 1.054-.125 2.352.908 2.901a2.166 2.166 0 0 0 2.972-.98l.9-1.891a11.3 11.3 0 0 1-3.794-2.102m15.576-8.788a2.165 2.165 0 0 0-2.547 1.698c-.208 1.04-.695 2.007-1.366 2.83l1.968 4.144c1.817-1.576 3.16-3.723 3.64-6.125a2.16 2.16 0 0 0-1.695-2.547"></svg:path><svg:path d="M12.68 13.24c-.422.1-.853.154-1.283.154c-.336 0-.683-.038-1.03-.113c-1.44-.306-2.89-1.196-3.709-2.28a3.7 3.7 0 0 1-.487-.84a2.17 2.17 0 0 0-2.817-1.197a2.17 2.17 0 0 0-1.197 2.818c.508 1.259 1.404 2.414 2.53 3.364a11.2 11.2 0 0 0 3.791 2.102a9.6 9.6 0 0 0 2.916.475a10 10 0 0 0 3.162-.528z"></svg:path><svg:path d="m19.357 17.21l-3.008-6.328l-.003.003q0-.002.003-.003l-2.862-6.02a2.17 2.17 0 0 0-1.954-1.236c-.834 0-1.594.481-1.953 1.235l-2.919 6.14c.82 1.084 2.269 1.975 3.709 2.28l.944-1.983a.247.247 0 0 1 .445 0l.923 1.942l2.803 5.896a2.16 2.16 0 0 0 2.533 1.155c1.303-.359 1.92-1.858 1.339-3.082"></svg:path></svg:g>`,
})
export class LineiconsArcBrowserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsArchiveIcon],svg[lineicons-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.7 4.3H7.3c-3.1 0-5.6 2.5-5.6 5.6V16c0 2.9 2.2 5.3 5.1 5.5v32.1c0 3.4 2.7 6.1 6.1 6.1H51c3.4 0 6.1-2.7 6.1-6.1V21.5c2.8-.2 5.1-2.6 5.1-5.5V9.9c.1-3.1-2.4-5.6-5.5-5.6M51 55.2H13c-.9 0-1.6-.7-1.6-1.6V21.5h41.3v32.1c0 .9-.8 1.6-1.7 1.6M57.8 16c0 .6-.5 1.1-1.1 1.1H7.3c-.6 0-1.1-.5-1.1-1.1V9.9c0-.6.5-1.1 1.1-1.1h49.4c.6 0 1.1.5 1.1 1.1z"></svg:path><svg:path fill="currentColor" d="M40.2 29.8H23.8c-2.3 0-4.3 1.9-4.3 4.3v6.2c0 2.3 1.9 4.3 4.3 4.3h16.4c2.3 0 4.3-1.9 4.3-4.3V34c-.1-2.3-2-4.2-4.3-4.2m-.3 10.1H24.1v-5.7H40v5.7z"></svg:path>`,
})
export class LineiconsArchiveIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowAllDirectionIcon],svg[lineicons-arrow-all-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.571 11.948a.75.75 0 0 0 0 1.105l2.29 2.29a.75.75 0 1 0 1.06-1.06L4.89 13.25h4.313a.75.75 0 0 0 0-1.5H4.89l1.032-1.032a.75.75 0 1 0-1.061-1.06zm10.326-9.187a.748.748 0 0 0-1.12-.018l-2.292 2.29a.75.75 0 1 0 1.061 1.061l1.033-1.032v4.313a.75.75 0 1 0 1.5 0V5.064l1.03 1.03a.75.75 0 1 0 1.062-1.06zm.182 12.863a.75.75 0 0 0-1.5 0v4.316l-1.032-1.033a.75.75 0 1 0-1.061 1.061l2.312 2.313a.75.75 0 0 0 1.061 0l2.312-2.313a.75.75 0 0 0-1.06-1.06l-1.032 1.031zm2.373-3.874a.75.75 0 0 0 0 1.5h4.315l-1.032 1.033a.75.75 0 1 0 1.06 1.061l2.313-2.312a.75.75 0 0 0-.013-1.073l-2.3-2.3a.75.75 0 0 0-1.06 1.06l1.03 1.032z"></svg:path>`,
})
export class LineiconsArrowAllDirectionIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowAngularTopLeftIcon],svg[lineicons-arrow-angular-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.782 5.992a.75.75 0 0 1 .549-.239l8.995-.003a.75.75 0 1 1 0 1.5l-7.19.002l10.72 10.72a.75.75 0 0 1-1.062 1.06L7.081 8.318l-.003 7.177a.75.75 0 0 1-1.5-.001l.003-8.93a.75.75 0 0 1 .2-.572"></svg:path>`,
})
export class LineiconsArrowAngularTopLeftIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowAngularTopRightIcon],svg[lineicons-arrow-angular-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.92 6.05a.75.75 0 0 0-.598-.297L9.327 5.75a.75.75 0 1 0 0 1.5l7.19.002l-10.72 10.72a.75.75 0 0 0 1.061 1.06L17.573 8.318l.002 7.177a.75.75 0 0 0 1.5-.001l-.003-8.933a.75.75 0 0 0-.152-.51"></svg:path>`,
})
export class LineiconsArrowAngularTopRightIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowBothDirectionHorizontal1Icon],svg[lineicons-arrow-both-direction-horizontal-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.068 11.934a.748.748 0 0 1 .002 1.13l-3.964 3.966a.75.75 0 0 1-1.06-1.06l2.718-2.72H4.888l2.718 2.72a.75.75 0 1 1-1.061 1.06l-3.997-4a.75.75 0 0 1 0-1.06l3.997-4a.75.75 0 0 1 1.061 1.06l-2.718 2.72h14.875l-2.718-2.72a.75.75 0 0 1 1.061-1.06z"></svg:path>`,
})
export class LineiconsArrowBothDirectionHorizontal1Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowBothDirectionVertical1Icon],svg[lineicons-arrow-both-direction-vertical-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.578 5.064V19.94l-2.72-2.718a.75.75 0 1 0-1.06 1.061l4 3.997a.75.75 0 0 0 1.06 0l4-3.997a.75.75 0 0 0-1.06-1.06l-2.72 2.717V5.064l2.72 2.718a.75.75 0 1 0 1.06-1.061l-3.97-3.967a.748.748 0 0 0-1.122.002L7.798 6.72a.75.75 0 1 0 1.06 1.06z"></svg:path>`,
})
export class LineiconsArrowBothDirectionVertical1Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowDownIcon],svg[lineicons-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54.6 33.8c-.9-.9-2.3-.9-3.2 0L34.3 50.6V8c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v42.7l-17.3-17c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l21 20.7c.4.4 1 .6 1.6.6s1.1-.2 1.6-.6l21-20.7c.9-.8.9-2.3 0-3.1"></svg:path>`,
})
export class LineiconsArrowDownIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowDownCircleIcon],svg[lineicons-arrow-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m40.3 32l-6.1 6V20.7c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2V38l-6.1-6c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l9.9 9.8c.4.4 1 .6 1.6.6s1.1-.2 1.6-.6l9.9-9.8c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0"></svg:path><svg:path fill="currentColor" d="M32 1.7C15.3 1.7 1.8 15.3 1.8 32S15.3 62.3 32 62.3S62.2 48.7 62.2 32S48.7 1.7 32 1.7m0 56.1C17.8 57.8 6.2 46.2 6.2 32S17.8 6.2 32 6.2S57.8 17.8 57.8 32S46.2 57.8 32 57.8"></svg:path>`,
})
export class LineiconsArrowDownCircleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowDownwardIcon],svg[lineicons-arrow-downward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.755 20.989a.75.75 0 0 0 .57.262h.001a.75.75 0 0 0 .532-.22l6-5.995a.75.75 0 0 0-1.06-1.061l-4.723 4.72V4.5a.75.75 0 0 0-1.5 0v14.188l-4.717-4.713a.75.75 0 1 0-1.06 1.06z"></svg:path>`,
})
export class LineiconsArrowDownwardIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowLeftIcon],svg[lineicons-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.578 12.498c0 .193.073.385.22.532l5.996 6a.75.75 0 0 0 1.06-1.06l-4.72-4.724H20.33a.75.75 0 0 0 0-1.5H6.141l4.713-4.716a.75.75 0 1 0-1.061-1.06l-5.95 5.953a.75.75 0 0 0-.266.573z"></svg:path>`,
})
export class LineiconsArrowLeftIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowLeftCircleIcon],svg[lineicons-arrow-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.698 11.751l1.372-1.373a.75.75 0 1 0-1.061-1.06l-2.638 2.64a.75.75 0 0 0 .026 1.11l2.612 2.614a.75.75 0 1 0 1.06-1.06l-1.369-1.37h5.068a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.328 12.5c0-5.523 4.477-10 10-10s10 4.477 10 10c0 5.521-4.478 9.998-10 9.998s-10-4.477-10-9.999m10-8.5a8.5 8.5 0 1 0 0 16.999a8.5 8.5 0 0 0 0-16.999" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsArrowLeftCircleIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowRightIcon],svg[lineicons-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.08 12.519a.75.75 0 0 1-.22.51l-5.996 6.001a.75.75 0 0 1-1.061-1.06l4.72-4.724H4.328a.75.75 0 0 1 0-1.5h14.188L13.803 7.03a.75.75 0 1 1 1.06-1.06l5.95 5.953a.75.75 0 0 1 .266.596"></svg:path>`,
})
export class LineiconsArrowRightIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowRightCircleIcon],svg[lineicons-arrow-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.956 11.749H8.888a.75.75 0 0 0 0 1.5h5.07l-1.372 1.373a.75.75 0 1 0 1.061 1.06l2.638-2.64a.75.75 0 0 0-.026-1.11l-2.612-2.614a.75.75 0 0 0-1.06 1.06z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.328 12.5c0-5.523 4.477-10 10-10s10 4.477 10 10c0 5.521-4.478 9.998-10 9.998s-10-4.477-10-9.999m10-8.5a8.5 8.5 0 1 0 0 16.999a8.5 8.5 0 0 0 0-16.999" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsArrowRightCircleIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowTopLeftIcon],svg[lineicons-arrow-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48.9 51.3c-.6 0-1.2-.2-1.6-.7L17.2 20.5l-.2 24c0 1.2-1 2.3-2.3 2.2c-1.2 0-2.2-1-2.2-2.3l.3-29.4c0-1.2 1-2.2 2.2-2.2l29.5-.3c1.2 0 2.2 1 2.2 2.2s-1 2.3-2.2 2.3l-24.2.2l30.2 30.2c.9.9.9 2.3 0 3.2c-.4.4-1 .7-1.6.7"></svg:path>`,
})
export class LineiconsArrowTopLeftIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowTopRightIcon],svg[lineicons-arrow-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 51.3c-.6 0-1.2-.2-1.6-.7c-.9-.9-.9-2.3 0-3.2l30.3-30.3H19.5c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2H49c1.2 0 2.2 1 2.2 2.2v29.7c0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2V20.5L16.6 50.7c-.4.4-1 .6-1.6.6"></svg:path>`,
})
export class LineiconsArrowTopRightIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowUpIcon],svg[lineicons-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m54.6 27.1l-21-20.7c-.9-.9-2.3-.9-3.2 0l-21 20.7c-.9.9-.9 2.3 0 3.2s2.3.9 3.2 0l17.1-16.8V56c0 1.2 1 2.2 2.2 2.2s2.3-1 2.3-2.2V13.3l17.3 17c.4.4 1 .6 1.6.6s1.2-.2 1.6-.7c.8-.8.8-2.3-.1-3.1"></svg:path>`,
})
export class LineiconsArrowUpIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowUpCircleIcon],svg[lineicons-arrow-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33.6 19.1c-.9-.9-2.3-.9-3.2 0l-9.9 9.7c-.9.9-.9 2.3 0 3.2c.4.4 1 .7 1.6.7s1.1-.2 1.6-.6l6.1-6v17.3c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V26l6.1 6c.9.9 2.3.9 3.2 0s.9-2.3 0-3.2z"></svg:path><svg:path fill="currentColor" d="M32 1.7C15.3 1.7 1.8 15.3 1.8 32S15.3 62.3 32 62.3S62.2 48.7 62.2 32S48.7 1.7 32 1.7m0 56.1C17.8 57.8 6.2 46.2 6.2 32S17.8 6.2 32 6.2S57.8 17.8 57.8 32S46.2 57.8 32 57.8"></svg:path>`,
})
export class LineiconsArrowUpCircleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowUpwardIcon],svg[lineicons-arrow-upward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.755 4.013a.75.75 0 0 1 .57-.263h.001c.193 0 .385.073.532.22l6 5.995a.75.75 0 0 1-1.06 1.062l-4.723-4.72V20.5a.75.75 0 0 1-1.5 0V6.313l-4.717 4.714a.75.75 0 0 1-1.06-1.062z"></svg:path>`,
})
export class LineiconsArrowUpwardIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowsHorizontalIcon],svg[lineicons-arrows-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61.6 30.4L51.4 20.1c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l6.4 6.5H9.3l6.4-6.5c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0L2.4 30.4c-.9.9-.9 2.3 0 3.2l10.2 10.3c.4.4 1 .7 1.6.7s1.1-.2 1.6-.6c.9-.9.9-2.3 0-3.2l-6.4-6.5h45.2l-6.4 6.5c-.9.9-.9 2.3 0 3.2c.4.4 1 .6 1.6.6s1.2-.2 1.6-.7l10.2-10.3c.9-.9.9-2.3 0-3.2"></svg:path>`,
})
export class LineiconsArrowsHorizontalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowsVerticalIcon],svg[lineicons-arrows-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m40.8 48.2l-6.5 6.4V9.3l6.5 6.4c.4.4 1 .6 1.6.6s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2l-10.4-10c-.9-.9-2.3-.9-3.2 0L20.1 12.6c-.9.9-.9 2.3 0 3.2s2.3.9 3.2 0l6.5-6.4v45.2l-6.5-6.4c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l10.3 10.2c.4.4 1 .6 1.6.6s1.1-.2 1.6-.6l10.3-10.2c.9-.9.9-2.3 0-3.2c-.8-.8-2.3-.8-3.1 0"></svg:path>`,
})
export class LineiconsArrowsVerticalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAsanaIcon],svg[lineicons-asana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.35 7.12A4.355 4.355 0 0 1 12 11.47a4.355 4.355 0 0 1-4.35-4.35A4.355 4.355 0 0 1 12 2.77a4.31 4.31 0 0 1 4.35 4.35m-10 5.41A4.355 4.355 0 0 0 2 16.88a4.355 4.355 0 0 0 4.35 4.35a4.355 4.355 0 0 0 4.349-4.35a4.334 4.334 0 0 0-4.35-4.35m11.3 0a4.355 4.355 0 0 0-4.349 4.35a4.355 4.355 0 0 0 4.35 4.35A4.355 4.355 0 0 0 22 16.88a4.334 4.334 0 0 0-4.35-4.35"></svg:path>`,
})
export class LineiconsAsanaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAstroIcon],svg[lineicons-astro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.24 19.035c-.901-.826-1.164-2.561-.789-3.819c.65.793 1.552 1.044 2.486 1.186c1.44.218 2.856.137 4.195-.524c.153-.076.295-.177.462-.278c.126.365.159.734.115 1.11c-.107.915-.56 1.622-1.283 2.158c-.289.215-.594.406-.892.608c-.916.622-1.164 1.35-.82 2.41l.034.114a2.4 2.4 0 0 1-1.07-.918a2.6 2.6 0 0 1-.412-1.401c-.003-.248-.003-.497-.036-.74c-.081-.595-.36-.86-.883-.876a1.034 1.034 0 0 0-1.075.843q-.013.058-.033.126M4.1 15.007s2.666-1.303 5.34-1.303l2.016-6.26c.075-.304.296-.51.544-.51c.25 0 .47.206.545.51l2.016 6.26c3.167 0 5.34 1.303 5.34 1.303L15.363 2.602c-.13-.366-.35-.602-.645-.602H9.283c-.296 0-.506.236-.645.602c-.01.024-4.538 12.405-4.538 12.405"></svg:path>`,
})
export class LineiconsAstroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAtlassianIcon],svg[lineicons-atlassian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.892 11.255c-.322-.322-.773-.322-.966.097L2.06 21.114c-.193.354.097.87.548.87h6.797a.62.62 0 0 0 .548-.323c1.45-3.06.548-7.668-2.062-10.406M11.5 2.331c-4.704 7.539-.323 13.563 2.545 19.33a.62.62 0 0 0 .548.322h6.797a.602.602 0 0 0 .548-.87s-9.116-18.33-9.342-18.781c-.29-.42-.838-.42-1.095 0"></svg:path>`,
})
export class LineiconsAtlassianIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAudiIcon],svg[lineicons-audi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.852 18.098v-2.655h-1.096v2.655zm-5.801-1.102v-1.513h-1.062v1.156c0 .336-.014.43-.034.518c-.074.242-.33.35-.591.35c-.363 0-.531-.142-.599-.364a1.3 1.3 0 0 1-.033-.235c-.007-.087 0-.181 0-.282v-1.143H9.656v1.52c0 .343.115.598.303.773c.322.316.867.41 1.371.41c.612 0 1.082-.088 1.418-.417c.175-.168.303-.39.303-.773m-5.216-.189a1 1 0 0 0-.162-.013h-1.21a1 1 0 0 0-.161.013c.02-.02.06-.06.1-.114l.545-.9c.074-.121.108-.202.121-.236c.014.034.047.114.121.242l.558.908c.027.04.067.08.088.1m2.03 1.291l-2.42-3.63H6.087l.356.424q.012.01.034.02q-.022.01-.034.02l-2.11 3.166h1.223l.33-.544a.2.2 0 0 0 .02-.067c.013 0 .047.013.08.013h2.185q.051-.002.074-.014a.1.1 0 0 0 .013.054l.343.558zm7.595-1.364c0-.296-.12-.64-.497-1.116l-.908-1.15h-1.263l.719.807c.121.134.276.255.276.255a1.2 1.2 0 0 0-.572-.14c-.416 0-.84.086-1.216.295c-.404.222-.673.591-.673 1.082c0 .377.168.666.383.887c.485.484 1.365.532 1.688.532c.477 0 1.223-.108 1.647-.491a1.26 1.26 0 0 0 .416-.961m-1.048.033c0 .276-.182.484-.41.598c-.188.101-.41.128-.605.128s-.424-.04-.612-.134c-.229-.115-.403-.336-.403-.578c0-.29.221-.518.484-.632c.161-.074.356-.101.51-.101c.149 0 .364.02.532.087c.302.128.504.37.504.632m2.092-10.953a3.48 3.48 0 0 0-2.168.754a3.48 3.48 0 0 0-2.168-.754A3.48 3.48 0 0 0 12 6.568a3.48 3.48 0 0 0-2.168-.754a3.48 3.48 0 0 0-2.168.754a3.496 3.496 0 1 0 0 5.486a3.48 3.48 0 0 0 2.168.753A3.48 3.48 0 0 0 12 12.054a3.48 3.48 0 0 0 2.168.753a3.48 3.48 0 0 0 2.168-.753a3.496 3.496 0 1 0 2.168-6.24M7.092 11.483A2.694 2.694 0 0 1 2.801 9.31a2.694 2.694 0 0 1 4.291-2.172a3.5 3.5 0 0 0 0 4.344m.572-.57a2.68 2.68 0 0 1-.527-1.602a2.68 2.68 0 0 1 .527-1.602c.344.463.53 1.025.528 1.602a2.68 2.68 0 0 1-.528 1.601m3.764.57a2.7 2.7 0 0 1-1.598.522a2.68 2.68 0 0 1-1.594-.522a3.5 3.5 0 0 0 0-4.344a2.68 2.68 0 0 1 1.594-.523c.598 0 1.15.194 1.598.523a3.5 3.5 0 0 0 0 4.344m.572-.57a2.68 2.68 0 0 1-.527-1.602a2.68 2.68 0 0 1 .527-1.6a2.67 2.67 0 0 1 .527 1.602A2.68 2.68 0 0 1 12 10.912m3.764.57c-.447.33-1 .522-1.598.522a2.68 2.68 0 0 1-1.594-.522a3.5 3.5 0 0 0 0-4.344c.447-.329.996-.523 1.594-.523s1.15.194 1.598.523a3.5 3.5 0 0 0 0 4.344m.572-.57a2.68 2.68 0 0 1-.527-1.602a2.67 2.67 0 0 1 .527-1.602a2.67 2.67 0 0 1 .527 1.602a2.68 2.68 0 0 1-.527 1.601m2.168 1.093c-.594 0-1.15-.198-1.596-.523a3.5 3.5 0 0 0 0-4.344a2.694 2.694 0 0 1 4.291 2.172a2.694 2.694 0 0 1-2.695 2.695" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsAudiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAudiAltIcon],svg[lineicons-audi-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.498 15.471a3.46 3.46 0 0 1-2.165-.749a3.5 3.5 0 0 1-2.165.749a3.46 3.46 0 0 1-2.165-.749a3.5 3.5 0 0 1-2.166.749a3.46 3.46 0 0 1-2.165-.749a3.5 3.5 0 0 1-2.165.749a3.48 3.48 0 0 1-2.452-.995A3.4 3.4 0 0 1 2 12.06a3.45 3.45 0 0 1 .965-2.457a3.48 3.48 0 0 1 2.416-1.075h.236a3.5 3.5 0 0 1 2.05.744a3.47 3.47 0 0 1 2.045-.744h.236a3.5 3.5 0 0 1 2.05.744a3.5 3.5 0 0 1 2.05-.744h.235a3.5 3.5 0 0 1 2.05.744a3.48 3.48 0 0 1 2.05-.744h.236c.919.03 1.778.412 2.416 1.075c.638.664.98 1.538.965 2.452a3.44 3.44 0 0 1-1.045 2.421a3.52 3.52 0 0 1-2.457.995m-1.592-1.316c.447.326 1 .522 1.592.522c1.462 0 2.673-1.18 2.693-2.627c.025-1.447-1.14-2.663-2.597-2.718h-.191c-.558.02-1.07.211-1.492.518c.502.627.763 1.401.753 2.21a3.5 3.5 0 0 1-.758 2.095m-4.33 0a2.68 2.68 0 0 0 3.18 0a3.47 3.47 0 0 1-.754-2.095a3.42 3.42 0 0 1 .753-2.21a2.7 2.7 0 0 0-1.492-.518h-.19c-.558.02-1.07.211-1.493.518c.503.627.764 1.401.754 2.21a3.5 3.5 0 0 1-.759 2.095m-4.336 0a2.68 2.68 0 0 0 3.18 0a3.47 3.47 0 0 1-.754-2.095a3.42 3.42 0 0 1 .754-2.21a2.7 2.7 0 0 0-1.492-.518h-.191c-.558.02-1.07.211-1.492.518c.502.627.763 1.401.753 2.21a3.5 3.5 0 0 1-.758 2.095M5.4 9.327c-1.456.05-2.622 1.271-2.597 2.718s1.231 2.627 2.693 2.627c.593 0 1.14-.196 1.587-.522a3.47 3.47 0 0 1-.753-2.095a3.42 3.42 0 0 1 .753-2.21a2.7 2.7 0 0 0-1.492-.518zm6.597 1.09a2.63 2.63 0 0 0 0 3.165c.321-.432.517-.965.527-1.537c.01-.608-.19-1.17-.527-1.628m-4.336 0a2.63 2.63 0 0 0 0 3.165a2.63 2.63 0 0 0 0-3.165m8.666 0a2.63 2.63 0 0 0 0 3.165a2.65 2.65 0 0 0 .527-1.537a2.6 2.6 0 0 0-.527-1.628"></svg:path>`,
})
export class LineiconsAudiAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAwsIcon],svg[lineicons-aws-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.641 10.357c0 .71.354 1.031.354 1.225c0 .096-.032.128-.128.193l-.42.258c-.032.032-.128.032-.193.032c0 0-.257.032-.644-.806c-.451.58-1.192.967-1.933.902c-.483.033-1.869-.257-1.804-1.771c-.032-1.193 1.03-1.934 2.223-1.87c.225 0 .676 0 1.45.194v-.483c.096-.806-.451-1.45-1.418-1.353c-.032 0-.58 0-1.45.322c-.225.129-.225.129-.322.129c-.225 0-.129-.645-.097-.773c.13-.194 1.128-.548 2.03-.548c.644-.032 1.257.129 1.772.548c.419.45.58 1.03.548 1.643zm-2.738 1c.998 0 1.45-.645 1.546-.967c.032-.323.032-.484.032-.87c-.322-.033-.773-.13-1.256-.13c-.451-.031-1.353.194-1.321 1c.064.58.419.998.999.966m5.348.708c-.258.032-.355-.129-.42-.322L8.286 6.62c-.032-.097-.032-.193-.032-.258c0-.096.032-.129.129-.129h.677c.257-.032.354.194.418.323l1.128 4.381l1.063-4.381c.033-.097.097-.355.42-.323h.547c.032 0 .354 0 .419.323l1.03 4.446l1.128-4.446c0-.033.097-.355.419-.323h.644c.033 0 .194-.032.13.258c0 .032.096-.354-1.644 5.284c-.032.193-.129.354-.419.322h-.58c-.354.032-.418-.322-.418-.354L12.216 7.49l-1.031 4.253c0 .032-.032.354-.419.354h-.483v-.032zm8.505.193c-.193 0-1.03 0-1.772-.354c-.129-.033-.258-.226-.258-.355v-.354c0-.258.194-.226.258-.193c.322.128.483.225.902.322c1.128.258 1.643-.032 1.772-.129c.42-.258.451-.806.13-1.095c-.323-.258-.452-.258-1.644-.645c-.097-.064-1.32-.45-1.32-1.643c-.033-.87.772-1.772 2.158-1.772c.419 0 1.45.129 1.772.483c.032.033.032.13.032.226v.322c0 .129-.032.226-.129.226c-.258-.033-.644-.355-1.546-.355c-.226 0-1.257.032-1.192.773c0 .58.87.806.966.87c1.128.355 1.546.42 1.933.967c.548.676.258 1.482.129 1.707c-.612 1.128-2.126 1-2.19 1m1.289 3.286c-2.159 1.58-5.348 2.449-8.022 2.449A14.43 14.43 0 0 1 2.1 14.256c-.226-.194-.033-.451.225-.258a20.2 20.2 0 0 0 9.859 2.577c2.577 0 5.122-.547 7.507-1.546c.386-.161.708.225.354.515m.902-1.03c-.258-.355-1.869-.13-2.545-.097c-.226.032-.258-.13-.032-.258c1.256-.87 3.318-.644 3.543-.354c.258.257-.032 2.352-1.256 3.35c-.193.13-.354.032-.258-.129c.226-.708.806-2.158.548-2.513"></svg:path>`,
})
export class LineiconsAwsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsAzureIcon],svg[lineicons-azure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.903 4.032L7 9.13l-5 9.065h4.548zm.839 1.226l-2.516 7.097L16 18.387l-9.355 1.58H22z"></svg:path>`,
})
export class LineiconsAzureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBackwardIcon],svg[lineicons-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54.6 4.2c-2.1-1.2-4.8-1.1-6.8.3L10.4 28.9V4c0-1.2-1-2.3-2.3-2.3S5.9 2.8 5.9 4v56c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V35.1l37.4 24.4c1.1.7 2.4 1.1 3.6 1.1c1.1 0 2.2-.3 3.2-.8c2.1-1.2 3.5-3.4 3.5-5.8V10c-.1-2.4-1.5-4.6-3.6-5.8m-1 49.8c0 1.1-.8 1.6-1.1 1.8c-.7.4-1.5.3-2.2-.1L13.9 32L50.3 8.3c.7-.4 1.5-.5 2.2-.1c.3.2 1.1.7 1.1 1.8z"></svg:path>`,
})
export class LineiconsBackwardIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBadgeDecagramPercentIcon],svg[lineicons-badge-decagram-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.22 10.469a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m-1.018 4.269a.75.75 0 0 0 1.06 1.06L15.8 9.262a.75.75 0 0 0-1.06-1.06zm7.83.043a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.477 2.47a2.25 2.25 0 0 0-3.129 0l-.902.873a.75.75 0 0 1-.626.203L7.577 3.37a2.25 2.25 0 0 0-2.531 1.84l-.217 1.236a.75.75 0 0 1-.388.533l-1.108.588a2.25 2.25 0 0 0-.967 2.976l.551 1.128a.75.75 0 0 1 0 .658l-.551 1.128a2.25 2.25 0 0 0 .967 2.976l1.108.588a.75.75 0 0 1 .388.533l.217 1.236a2.25 2.25 0 0 0 2.53 1.84l1.244-.176a.75.75 0 0 1 .626.203l.902.873a2.25 2.25 0 0 0 3.13 0l.901-.873a.75.75 0 0 1 .627-.203l1.243.175a2.25 2.25 0 0 0 2.531-1.839l.217-1.236a.75.75 0 0 1 .387-.533l1.11-.588a2.25 2.25 0 0 0 .966-2.976l-.551-1.128a.75.75 0 0 1 0-.659l.55-1.127a2.25 2.25 0 0 0-.966-2.976l-1.109-.588a.75.75 0 0 1-.387-.533l-.217-1.237a2.25 2.25 0 0 0-2.53-1.839l-1.243.176a.75.75 0 0 1-.627-.203zm-2.086 1.078a.75.75 0 0 1 1.043 0l.902.873a2.25 2.25 0 0 0 1.88.61l1.243-.175a.75.75 0 0 1 .844.613l.217 1.236a2.25 2.25 0 0 0 1.161 1.599l1.109.588c.357.19.5.629.322.992l-.551 1.128a2.25 2.25 0 0 0 0 1.976l.551 1.128a.75.75 0 0 1-.322.992l-1.109.588a2.25 2.25 0 0 0-1.161 1.599l-.217 1.236a.75.75 0 0 1-.844.613l-1.243-.176a2.25 2.25 0 0 0-1.88.611l-.902.873a.75.75 0 0 1-1.043 0l-.902-.873a2.25 2.25 0 0 0-1.88-.61l-1.242.175a.75.75 0 0 1-.844-.613l-.217-1.236a2.25 2.25 0 0 0-1.162-1.599l-1.108-.588a.75.75 0 0 1-.323-.992l.552-1.128a2.25 2.25 0 0 0 0-1.976l-.552-1.128a.75.75 0 0 1 .323-.992l1.108-.588a2.25 2.25 0 0 0 1.162-1.599l.217-1.236a.75.75 0 0 1 .844-.613l1.243.175a2.25 2.25 0 0 0 1.88-.61z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsBadgeDecagramPercentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBalloonsIcon],svg[lineicons-balloons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.91 3.25a5.66 5.66 0 0 0-5.66 5.66c0 1.787.6 3.578 1.58 4.934c.827 1.144 1.978 2.046 3.33 2.295V20a.75.75 0 0 0 1.5 0v-3.861c.977-.18 1.85-.701 2.57-1.408q.057.083.115.163c.687.95 1.644 1.716 2.776 1.957V20a.75.75 0 0 0 1.5 0v-3.15c1.133-.24 2.09-1.006 2.778-1.957a7.35 7.35 0 0 0 1.351-4.219a4.878 4.878 0 0 0-6.86-4.459A5.66 5.66 0 0 0 8.91 3.25m5.513 4.372a3.378 3.378 0 0 1 4.827 3.053a5.85 5.85 0 0 1-1.067 3.34c-.66.914-1.491 1.415-2.311 1.415s-1.652-.501-2.312-1.415a5 5 0 0 1-.33-.522a8.64 8.64 0 0 0 1.34-4.583q0-.666-.147-1.288M8.91 14.707c-1.036 0-2.062-.632-2.864-1.741C5.249 11.864 4.75 10.38 4.75 8.91a4.16 4.16 0 0 1 8.32 0c0 1.47-.5 2.954-1.296 4.056c-.801 1.109-1.828 1.741-2.864 1.741"></svg:path>`,
})
export class LineiconsBalloonsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBaloonIcon],svg[lineicons-baloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M41.2 1.3c-4.8 0-9.1 2.9-11.6 7.6c-1.8-.9-3.7-1.4-5.8-1.4C15.6 7.4 9 15.3 9 25c0 8.7 5.4 18.3 12.9 19.7c-.4 1.1-.7 2.2-.9 2.8c-.7 2.4-.1 4.7.5 6.8c.6 2.3 1 3.7.2 5c-.7 1-.4 2.4.6 3.1c.4.3.8.4 1.2.4c.7 0 1.4-.4 1.9-1c2-3 1.1-6.1.4-8.6c-.4-1.6-.9-3.1-.5-4.3c.2-.8 1-3 1.4-4.3c4.1-1.2 7.5-5 9.5-9.5c.6.3 1.1.6 1.7.8c0 .1-.1.2-.1.3c-.5 1.4-1.1 3-1.3 3.8c-.7 2.4-.1 4.7.5 6.8c.6 2.3 1 3.7.2 5c-.7 1-.4 2.4.6 3.1c.4.3.8.4 1.2.4c.7 0 1.4-.4 1.9-1c2-3 1.1-6.1.4-8.6c-.4-1.6-.9-3.1-.5-4.3c.2-.6.8-2.3 1.2-3.5c.2-.5.4-1 .5-1.4c.5-.1.9-.2 1.4-.3c6.8-2.1 11-11.1 11-18.3c.1-9.3-6.1-16.6-13.7-16.6M23.8 40.4c-5.2 0-10.2-7.6-10.2-15.4c0-7.2 4.6-13 10.2-13S34 17.8 34 25c0 7.7-5.1 15.4-10.2 15.4m18.9-8.8c-1 .3-2 .3-2.9 0c-.6-.2-1.3-.5-1.9-1c.5-1.8.7-3.7.7-5.6c0-5.4-2.1-10.2-5.3-13.4C35 8 38 5.8 41.3 5.8c5.1 0 9.3 5.3 9.3 11.8c-.1 6.1-3.8 12.7-7.9 14"></svg:path>`,
})
export class LineiconsBaloonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBanIcon],svg[lineicons-ban-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 1.8C15.3 1.8 1.8 15.3 1.8 32S15.3 62.3 32 62.3S62.3 48.7 62.3 32S48.7 1.8 32 1.8M6.3 32C6.3 17.8 17.8 6.3 32 6.3c5.3 0 10.1 1.6 14.2 4.3l-32 40C9.3 45.9 6.3 39.3 6.3 32M32 57.8c-5.3 0-10.2-1.6-14.3-4.4l32-40c4.9 4.7 8 11.3 8 18.6c.1 14.2-11.5 25.8-25.7 25.8"></svg:path>`,
})
export class LineiconsBanIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBan2Icon],svg[lineicons-ban-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.001c-5.523 0-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10s-4.477-10-10-10m-8.5 10a8.5 8.5 0 0 1 13.957-6.517L5.483 17.458A8.47 8.47 0 0 1 3.5 12.001m3.044 6.518L18.518 6.545A8.5 8.5 0 0 1 6.544 18.519"></svg:path>`,
})
export class LineiconsBan2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBarChartIcon],svg[lineicons-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 55.2h-5.4V35.5c0-3.2-2.6-5.7-5.7-5.7h-5.8c-3.2 0-5.7 2.6-5.7 5.7v19.7h-6V20.4c0-3.2-2.6-5.7-5.7-5.7h-5.8c-3.2 0-5.7 2.6-5.7 5.7v34.8H6.3V6.5c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v48.9c0 2.3 1.9 4.3 4.3 4.3h54c1.2 0 2.3-1 2.3-2.3s-1.1-2.2-2.3-2.2m-41.3 0V20.4c0-.7.6-1.2 1.2-1.2h5.8c.7 0 1.2.6 1.2 1.2v34.8zm23.2 0V35.5c0-.7.6-1.2 1.2-1.2h5.8c.7 0 1.2.6 1.2 1.2v19.7z"></svg:path>`,
})
export class LineiconsBarChartIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBarChart4Icon],svg[lineicons-bar-chart-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 5.25a.75.75 0 0 0-1.5 0v12a2.25 2.25 0 0 0 2.25 2.25h17a.75.75 0 0 0 0-1.5h-17a.75.75 0 0 1-.75-.75z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7 10.277a2 2 0 0 0-2 2v3.473c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75v-3.473a2 2 0 0 0-2-2m-.5 2a.5.5 0 0 1 1 0V15h-1zm4-5.777a2 2 0 1 1 4 0v9.25a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75zm2-.5a.5.5 0 0 0-.5.5V15h1V6.5a.5.5 0 0 0-.5-.5M18 8.059a2 2 0 0 0-2 2v5.691c0 .414.336.75.75.75h2.5a.75.75 0 0 0 .75-.75v-5.69a2 2 0 0 0-2-2m-.5 2a.5.5 0 0 1 1 0V15h-1z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsBarChart4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBarChartDollarIcon],svg[lineicons-bar-chart-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.808 2a.75.75 0 0 1 .75.75v.169c.748.19 1.302.867 1.302 1.674a.75.75 0 1 1-1.5 0a.227.227 0 0 0-.227-.227h-.395a.483.483 0 0 0-.17.935l1.005.377a1.983 1.983 0 0 1-.015 3.72v.236a.75.75 0 0 1-1.5 0v-.17a1.73 1.73 0 0 1-1.303-1.673a.75.75 0 0 1 1.5 0c0 .125.102.226.227.226h.395a.483.483 0 0 0 .17-.934l-1.005-.377a1.983 1.983 0 0 1 .016-3.72V2.75a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 3.25A2.25 2.25 0 0 0 3.25 5.5v13a2.25 2.25 0 0 0 2.25 2.25h.333a2.25 2.25 0 0 0 2.25-2.25v-13a2.25 2.25 0 0 0-2.25-2.25zM4.75 5.5a.75.75 0 0 1 .75-.75h.333a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H5.5a.75.75 0 0 1-.75-.75zm7.083 4.134a2.25 2.25 0 0 0-2.25 2.25V18.5a2.25 2.25 0 0 0 2.25 2.25h.333a2.25 2.25 0 0 0 2.25-2.25v-6.616a2.25 2.25 0 0 0-2.25-2.25zm-.75 2.25a.75.75 0 0 1 .75-.75h.333a.75.75 0 0 1 .75.75V18.5a.75.75 0 0 1-.75.75h-.333a.75.75 0 0 1-.75-.75zm4.833 3.038a2.25 2.25 0 0 1 2.25-2.25h.333a2.25 2.25 0 0 1 2.25 2.25V18.5a2.25 2.25 0 0 1-2.25 2.25h-.333a2.25 2.25 0 0 1-2.25-2.25zm2.25-.75a.75.75 0 0 0-.75.75V18.5c0 .415.336.75.75.75h.333a.75.75 0 0 0 .75-.75v-3.578a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsBarChartDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBasketShopping3Icon],svg[lineicons-basket-shopping-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.75 11.5a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m5.25.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" d="M10.68 2.136a.75.75 0 0 1 .184 1.044L8.365 6.75h7.27l-2.5-3.57a.75.75 0 0 1 1.23-.86l3.1 4.43h2.285A2.25 2.25 0 0 1 22 9v.785a2.25 2.25 0 0 1-.833 1.748l-1.163.943l-.803 6.308a2.25 2.25 0 0 1-2.232 1.966H7.031a2.25 2.25 0 0 1-2.232-1.966l-.804-6.308l-1.162-.943A2.25 2.25 0 0 1 2 9.785V9a2.25 2.25 0 0 1 2.25-2.25h2.284l3.102-4.43a.75.75 0 0 1 1.044-.184m9.07 6.114H4.25A.75.75 0 0 0 3.5 9v.785c0 .226.102.44.278.583L5.174 11.5a.75.75 0 0 1 .271.488l.842 6.607a.75.75 0 0 0 .744.655h9.938a.75.75 0 0 0 .744-.655l.841-6.607a.75.75 0 0 1 .272-.488l1.396-1.132a.75.75 0 0 0 .278-.583V9a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class LineiconsBasketShopping3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBasketballIcon],svg[lineicons-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.6 14.5c-3.8-5.3-9.3-9.3-15.5-11.3Q34.95 1.25 28.2 2c-5.2.7-9.9 2.5-13.9 5.4Q8 11.9 4.7 18.8c-1.9 4.1-3 8.4-3 12.5c-.1 6.6 1.8 13 5.6 18.3c3.9 5.4 9.2 9.3 15.5 11.3c3 .9 6 1.4 9.1 1.4c1.2 0 2.5-.1 3.7-.2c5.2-.7 9.9-2.5 13.9-5.4q6.3-4.5 9.6-11.4c1.9-4.1 3-8.4 3-12.5c.3-6.6-1.7-12.9-5.5-18.3m1.1 18.2c0 1.3-.2 2.6-.4 3.9c-5.5.6-10.7 2.4-15.4 5.4l-6.7-9.4l19-13.6c2.4 4.2 3.6 8.8 3.5 13.7m-6.1-17.3L32.6 29L26 19.7c4.3-3.5 7.8-8 10.2-13c1.2.2 2.4.5 3.6.8c4.6 1.4 8.7 4.2 11.8 7.9m-22.8-9c.8-.1 1.7-.1 2.5-.1c-2 3.7-4.7 7-8 9.7l-4.4-6.2c3-1.8 6.3-2.9 9.9-3.4m-13.5 6l4.4 6.2C16.1 20.8 12 22.3 7.9 23c.3-.8.6-1.6 1-2.3c1.5-3.2 3.7-6 6.4-8.3m-9 18.9c0-1.2.1-2.4.4-3.6c5.6-.6 10.9-2.5 15.7-5.5l6.6 9.3l-19 13.6C7.4 41 6.2 36.2 6.3 31.3m6.2 17.5l19-13.6l6.7 9.4c-4.3 3.5-7.8 7.9-10.2 12.9c-1.3-.2-2.6-.5-3.8-.9c-4.6-1.5-8.6-4.1-11.7-7.8m22.7 8.8c-.7.1-1.5.1-2.2.2c2-3.6 4.7-6.8 7.9-9.5l4.2 6c-3 1.6-6.3 2.8-9.9 3.3m13.5-6l-4.2-5.9C48 43.5 51.9 42 56 41.3c-.3.7-.5 1.3-.8 2c-1.6 3.2-3.8 6-6.5 8.3"></svg:path>`,
})
export class LineiconsBasketballIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBeatIcon],svg[lineicons-beat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.407 3.25a.75.75 0 0 1 .719.617l2.438 13.554l1.892-4.377a.75.75 0 0 1 .689-.453h2.878a.75.75 0 1 1 0 1.5h-2.385l-2.683 6.207a.75.75 0 0 1-1.427-.165L13.29 7.693l-2.051 8.73a.75.75 0 0 1-1.393.178l-3.017-5.71l-1.408 2.788a.75.75 0 0 1-.67.412H1.874a.75.75 0 0 1 0-1.5H4.29L6.144 8.92a.75.75 0 0 1 1.333-.012l2.76 5.223l2.42-10.302a.75.75 0 0 1 .75-.578"></svg:path>`,
})
export class LineiconsBeatIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBehanceIcon],svg[lineicons-behance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.097 11.323c.548-.226.968-.58 1.226-1s.419-.968.419-1.549c0-.548-.097-1.032-.258-1.451c-.194-.42-.452-.742-.807-.968a3.5 3.5 0 0 0-1.225-.516A8.5 8.5 0 0 0 7.87 5.71H2v12.258h5.968c.548 0 1.097-.032 1.58-.226a4.1 4.1 0 0 0 1.42-.645c.42-.258.742-.645.967-1.129c.226-.452.355-1 .355-1.645c0-.774-.193-1.452-.548-1.968c-.387-.452-.936-.806-1.645-1.032M4.742 7.839H7.29c.226 0 .452.032.678.032s.451.13.58.226a.83.83 0 0 1 .42.452c.097.193.129.419.129.742c0 .483-.13.903-.452 1.129a2.35 2.35 0 0 1-1.193.322h-2.71zm4.71 7.258c-.097.226-.226.355-.452.484c-.194.129-.42.226-.645.226c-.226.032-.484.032-.742.032H4.71v-3.323h2.967c.581 0 1.033.13 1.42.42c.355.258.548.742.548 1.355c-.064.322-.064.58-.193.806m12.355-2.903c-.13-.645-.42-1.194-.775-1.678a4.4 4.4 0 0 0-1.355-1.193a4.65 4.65 0 0 0-1.967-.452c-.678 0-1.323.13-1.807.355a4.05 4.05 0 0 0-1.451 1c-.42.42-.742.903-.968 1.484a5 5 0 0 0-.355 1.87c0 .678.097 1.323.323 1.904c.225.58.548 1.032.903 1.484c.42.42.87.742 1.451.968a5 5 0 0 0 1.904.355c1 0 1.87-.226 2.58-.678c.742-.451 1.226-1.226 1.581-2.322h-2.13c-.096.258-.322.548-.644.774c-.323.226-.774.355-1.258.355c-.678 0-1.226-.194-1.58-.549c-.356-.355-.582-1.032-.582-1.742H22c0-.677-.032-1.355-.194-1.935m-6.259.42c0-.227.097-.453.162-.646c.096-.226.193-.452.354-.613c.194-.194.452-.387.71-.516c.258-.13.58-.13.871-.13c.58 0 1.097.194 1.355.485c.258.322.484.774.548 1.42zm4.485-6.065h-5v1.225h5z"></svg:path>`,
})
export class LineiconsBehanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBehanceOriginalIcon],svg[lineicons-behance-original-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.1 29.8c1.7-.7 3-1.8 3.8-3.1s1.3-3 1.3-4.8c0-1.7-.3-3.2-.8-4.5c-.6-1.3-1.4-2.3-2.5-3s-2.3-1.3-3.8-1.6c-1.6-.3-3.2-.4-4.9-.4H1v38h18.5c1.7 0 3.4-.1 4.9-.7c1.7-.4 3.1-1.1 4.4-2c1.3-.8 2.3-2 3-3.5c.7-1.4 1.1-3.1 1.1-5.1c0-2.4-.6-4.5-1.7-6.1c-1.2-1.4-2.9-2.5-5.1-3.2M9.5 19h7.9c.7 0 1.4.1 2.1.1s1.4.4 1.8.7c.6.3 1 .7 1.3 1.4c.3.6.4 1.3.4 2.3c0 1.5-.4 2.8-1.4 3.5c-1 .6-2.3 1-3.7 1H9.5zm14.6 22.5c-.3.7-.7 1.1-1.4 1.5c-.6.4-1.3.7-2 .7c-.7.1-1.5.1-2.3.1h-9V33.5h9.2c1.8 0 3.2.4 4.4 1.3c1.1.8 1.7 2.3 1.7 4.2c-.2 1-.2 1.8-.6 2.5m38.3-9c-.4-2-1.3-3.7-2.4-5.2s-2.5-2.7-4.2-3.7c-1.7-.8-3.8-1.4-6.1-1.4c-2.1 0-4.1.4-5.6 1.1c-1.7.7-3.2 1.7-4.5 3.1c-1.3 1.3-2.3 2.8-3 4.6c-.7 1.7-1.1 3.7-1.1 5.8s.3 4.1 1 5.9s1.7 3.2 2.8 4.6c1.3 1.3 2.7 2.3 4.5 3c1.7.7 3.7 1.1 5.9 1.1c3.1 0 5.8-.7 8-2.1c2.3-1.4 3.8-3.8 4.9-7.2H56c-.3.8-1 1.7-2 2.4s-2.4 1.1-3.9 1.1c-2.1 0-3.8-.6-4.9-1.7s-1.8-3.2-1.8-5.4H63c0-2.1-.1-4.2-.6-6M43 33.8c0-.7.3-1.4.5-2c.3-.7.6-1.4 1.1-1.9c.6-.6 1.4-1.2 2.2-1.6s1.8-.4 2.7-.4c1.8 0 3.4.6 4.2 1.5c.8 1 1.5 2.4 1.7 4.4zM41.4 15h15.5v3.8H41.4z"></svg:path>`,
})
export class LineiconsBehanceOriginalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBell1Icon],svg[lineicons-bell-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.002 2.001a.75.75 0 0 1 .75.75v.787a7.5 7.5 0 0 1 6.75 7.463v3.114l.692 1.846A2.25 2.25 0 0 1 18.087 19h-3.024a3.063 3.063 0 0 1-6.126 0h-3.02a2.25 2.25 0 0 1-2.108-3.04l.693-1.846V11a7.5 7.5 0 0 1 6.75-7.463V2.75a.75.75 0 0 1 .75-.75m-1.565 17a1.563 1.563 0 0 0 3.125 0zm-4.435-8v3.116c0 .178-.033.356-.095.523l-.693 1.848a.75.75 0 0 0 .702 1.013h12.171a.75.75 0 0 0 .702-1.013l-.693-1.848a1.5 1.5 0 0 1-.094-.523V11a6 6 0 1 0-12 0"></svg:path>`,
})
export class LineiconsBell1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBiCycleIcon],svg[lineicons-bi-cycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 36.1c-6.2 0-11.2 5-11.2 11.2s5 11.2 11.2 11.2s11.2-5 11.2-11.2s-5-11.2-11.2-11.2m0 18a6.7 6.7 0 1 1 0-13.4a6.7 6.7 0 0 1 0 13.4m38.1-17.9c-6.2 0-11.2 5-11.2 11.2s5 11.2 11.2 11.2s11.2-5 11.2-11.2s-5.1-11.2-11.2-11.2m0 17.8a6.7 6.7 0 1 1 0-13.4a6.7 6.7 0 0 1 0 13.4m-4.9-23.5c.8 1 2.2 1.1 3.2.4c1-.8 1.1-2.2.4-3.2l-8.5-10.8l-.2-.2c-1-1-2.4-1.2-3.6-.6l-11.6 6.8c-.8.5-1.4 1.3-1.5 2.2s.2 1.7.8 2.4l3.8 4.4c.5.6.8 1.4.8 2.3v6.7c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3v-6.7c0-1.9-.7-3.8-1.9-5.2l-2.7-3.1l8.8-5.2zm2.4-12.8c3.4 0 6.1-2.7 6.1-6.1S52 5.4 48.6 5.4s-6.1 2.7-6.1 6.1s2.7 6.2 6.1 6.2m0-7.8c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6s-1.6-.6-1.6-1.5s.7-1.7 1.6-1.7"></svg:path>`,
})
export class LineiconsBiCycleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBikeIcon],svg[lineicons-bike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.792 3.616a1.25 1.25 0 1 0-1.768 1.768a1.25 1.25 0 0 0 1.768-1.768m1.276 6.602a.75.75 0 1 0 .088-1.497l-2.082-.122a.75.75 0 0 1-.636-.432l-.784-1.68a1.593 1.593 0 0 0-2.568-.452L8.429 8.693a1.61 1.61 0 0 0 .386 2.562l2.056 1.089a.75.75 0 0 1 .399.668l-.018 2.659a.75.75 0 0 0 1.5.01l.018-2.66a2.25 2.25 0 0 0-1.197-2.003l-1.272-.673l2.385-2.387l.394.843a2.25 2.25 0 0 0 1.907 1.295z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 15.75a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m3.75-2.25a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m12.5-1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M16 15.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsBikeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBingIcon],svg[lineicons-bing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.073 8.307a.77.77 0 0 0-.676.72c-.011.163-.008.174.361 1.122c.84 2.16 1.042 2.679 1.077 2.752q.125.267.344.493c.112.115.186.177.31.26c.219.146.328.186 1.18.438c.829.246 1.282.41 1.673.603c.506.251.859.537 1.082.876c.16.243.302.68.364 1.118a3.5 3.5 0 0 1 0 .706a2.1 2.1 0 0 1-.315.855c-.085.126-.055.105.068-.048c.348-.433.703-1.173.884-1.844a5.56 5.56 0 0 0 .085-2.51a5.53 5.53 0 0 0-2.761-3.776a89 89 0 0 0-1.11-.58l-.663-.347l-.872-.455c-.46-.24-.654-.337-.709-.354a1.2 1.2 0 0 0-.243-.038z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.075 16.366a4 4 0 0 0-.17.105a345 345 0 0 0-1.506.929a116 116 0 0 1-.83.512l-.388.24a84 84 0 0 1-1.26.784a2.4 2.4 0 0 1-.916.322c-.15.02-.436.02-.587 0a2.36 2.36 0 0 1-1.106-.448a3 3 0 0 1-.455-.454c-.215-.29-.353-.6-.425-.951a2 2 0 0 0-.035-.152c-.007-.007.006.116.027.275c.023.166.072.406.124.611c.404 1.59 1.553 2.881 3.108 3.496c.448.177.9.289 1.392.343c.185.021.708.03.9.015c.885-.067 1.656-.328 2.445-.827l.294-.185l.389-.246l.104-.066l.322-.203l1.455-.92c.638-.4.828-.541 1.125-.831c.124-.121.31-.328.32-.354c.001-.006.034-.057.073-.114q.235-.348.313-.852a3.5 3.5 0 0 0 0-.706a3.6 3.6 0 0 0-.267-.947c-.188-.393-.587-.75-1.16-1.038a2.5 2.5 0 0 0-.34-.151c-.01 0-.543.327-1.187.725l-1.39.86z"></svg:path><svg:path fill="currentColor" d="m5.39 17.23l.036.16c.112.504.307.867.645 1.205a2.28 2.28 0 0 0 1.64.678c.451 0 .84-.112 1.242-.358c.068-.041.334-.204.59-.363l.467-.288V8.67c0-1.921-.004-3.062-.01-3.152a2.27 2.27 0 0 0-.669-1.47c-.121-.12-.225-.2-.534-.413L6.864 2.302c-.299-.206-.322-.22-.413-.253a.79.79 0 0 0-1.053.58c-.01.053-.013.753-.013 4.557v4.495z"></svg:path>`,
})
export class LineiconsBingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBitbucketIcon],svg[lineicons-bitbucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C7.234 2 3.32 3.277 3.32 4.894c0 .425 1.02 6.468 1.446 8.85c.17 1.107 2.979 2.639 7.234 2.639c4.256 0 6.979-1.532 7.234-2.638c.426-2.383 1.447-8.426 1.447-8.851C20.596 3.277 16.766 2 12 2m0 12.426a2.69 2.69 0 0 1-2.723-2.724A2.69 2.69 0 0 1 12 8.98a2.69 2.69 0 0 1 2.723 2.723c0 1.447-1.191 2.723-2.723 2.723m0-8.681c-3.064 0-5.532-.511-5.532-1.192S8.936 3.362 12 3.362s5.532.51 5.532 1.191S15.064 5.745 12 5.745"></svg:path><svg:path fill="currentColor" d="M18.281 16.043c-.17 0-.255.085-.255.085s-2.128 1.702-5.957 1.702c-3.83 0-5.958-1.702-5.958-1.702s-.17-.085-.255-.085c-.17 0-.34.085-.34.34v.085c.34 1.787.595 3.064.595 3.234C6.366 20.98 8.92 22 11.984 22s5.617-1.021 5.872-2.298c0-.17.255-1.447.595-3.234v-.085c.086-.17 0-.34-.17-.34M12 12.979a1.362 1.362 0 1 0 0-2.724a1.362 1.362 0 0 0 0 2.724"></svg:path>`,
})
export class LineiconsBitbucketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBitcoinIcon],svg[lineicons-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.738 15.048c.895.237 2.853.754 3.164-.496c.318-1.279-1.58-1.704-2.505-1.912l-.27-.062l-.602 2.415zm.845-3.529c.747.2 2.375.633 2.658-.502c.29-1.163-1.293-1.513-2.066-1.684l-.226-.052l-.546 2.19z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 22.46c5.523 0 10-4.476 10-10c0-5.522-4.477-10-10-10s-10 4.478-10 10c0 5.524 4.477 10 10 10m2.21-13.947c1.385.477 2.398 1.193 2.2 2.523c-.145.974-.685 1.446-1.402 1.612c.985.513 1.485 1.299 1.008 2.661c-.592 1.692-1.999 1.835-3.87 1.48l-.454 1.82l-1.097-.273l.448-1.795a42 42 0 0 1-.874-.227l-.45 1.803l-1.096-.273l.454-1.823l-.304-.08l-.478-.122l-1.428-.356l.545-1.256s.808.214.797.199c.311.076.449-.126.503-.261l1.231-4.938c.014-.233-.066-.527-.51-.638c.016-.012-.798-.198-.798-.198l.292-1.172l1.513.378l-.001.005q.342.084.7.165l.45-1.802l1.097.274l-.44 1.766c.294.067.59.135.878.207l.438-1.755l1.097.274z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsBitcoinIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBittorrentIcon],svg[lineicons-bittorrent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.789 9.986a10 10 0 0 0-.585-1.876a9.9 9.9 0 0 0-2.144-3.178a9.9 9.9 0 0 0-3.18-2.143A10 10 0 0 0 11.995 2c-.677 0-1.344.082-2 .215a10 10 0 0 0-1.877.585a9.9 9.9 0 0 0-3.18 2.142A9.9 9.9 0 0 0 2.794 8.12a9.95 9.95 0 0 0 0 7.77a9.9 9.9 0 0 0 2.144 3.178a9.9 9.9 0 0 0 3.179 2.143a9.97 9.97 0 0 0 7.774 0a9.9 9.9 0 0 0 3.18-2.142a9.9 9.9 0 0 0 2.143-3.179a10 10 0 0 0 .79-3.885a11 11 0 0 0-.216-2.02m-9.785 10.743c-4.83 0-8.739-3.916-8.739-8.734s3.919-8.734 8.74-8.734s8.738 3.916 8.738 8.734a8.73 8.73 0 0 1-8.738 8.734"></svg:path><svg:path fill="currentColor" d="M12.394 19.98c.04 0 .082 0 .123-.01h.01c.041 0 .072 0 .113-.01h.03c.031 0 .062 0 .093-.01h.03c.031 0 .062-.01.103-.01h.02c.042 0 .083-.01.124-.01s.072-.011.113-.021h.02c.03 0 .062-.01.092-.01h.021c.041-.01.072-.01.113-.021c.082-.01.164-.03.236-.051h.02c.031-.01.072-.01.103-.02h.01c.082-.021.154-.042.236-.062a9.2 9.2 0 0 1-2.287-.216c-1.129-.246-2.205-.686-3.118-1.445a6.31 6.31 0 0 1-2.277-4.91A5.97 5.97 0 0 1 7.727 9.36a6.1 6.1 0 0 1 4.533-2.152h.236V5.844h-.267a7.7 7.7 0 0 0-1.538.185a7.4 7.4 0 0 0-1.477.502a7.6 7.6 0 0 0-1.354.82c-.43.328-.83.707-1.18 1.128c-.327.39-.615.81-.85 1.26a7.3 7.3 0 0 0-.565 1.364a7.5 7.5 0 0 0-.276 1.425l-.031.451v.267q.016.784.184 1.537a7.4 7.4 0 0 0 .503 1.476c.256.564.718 1.395 1.405 2.02a7.94 7.94 0 0 0 4.923 1.701z"></svg:path><svg:path fill="currentColor" d="M14.394 18.658a10.4 10.4 0 0 1-1.508-.164c-2.113-.38-3.928-1.67-4.595-3.619c-.81-2.368.43-4.93 2.79-5.71a4.4 4.4 0 0 1 1.395-.225c.605 0 1.21.123 1.764.349l.574-1.22a10 10 0 0 0-.523-.195a6 6 0 0 0-1.815-.277c-.616 0-1.231.103-1.816.297a5.7 5.7 0 0 0-2.02 1.17a5.7 5.7 0 0 0-1.354 1.784a5.8 5.8 0 0 0-.574 2.163c-.052.778.05 1.557.307 2.295a5.7 5.7 0 0 0 1.231 2.04c.503.543 1.087.953 1.795 1.333c.738.39 1.651.594 2.605.728c.615.081 1.436.102 1.918.102c.42-.154.595-.226.82-.318c.195-.092.39-.184.585-.297s.226-.133.554-.349c.03-.02.061-.04.082-.061c-1.128.205-1.415.195-2.215.174"></svg:path><svg:path fill="currentColor" d="M16.917 17.141c-.318.02-.77.051-1.282.051c-.913 0-2.031-.082-2.985-.4c-1.477-.492-2.872-1.753-2.872-3.31a2.807 2.807 0 0 1 2.81-2.81c1.057 0 1.97.585 2.452 1.436l1.22-.605a4 4 0 0 0-.728-.974a4.16 4.16 0 0 0-5.887 0a4.16 4.16 0 0 0-1.22 2.942c0 .564.122 1.128.358 1.66q.323.708.893 1.323c.666.718 1.58 1.292 2.553 1.62c.934.307 2.308.42 3.642.328a6.4 6.4 0 0 0 1.117-.164a7.7 7.7 0 0 0 1.231-1.22c-.307.03-.892.092-1.302.123"></svg:path>`,
})
export class LineiconsBittorrentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBlackboardIcon],svg[lineicons-blackboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.1 9.4H34.3V6.5c0-1.2-1-2.3-2.3-2.3c-1.2 0-2.3 1-2.3 2.3v2.8H7.9c-3.4 0-6.1 2.7-6.1 6.1v20.3c0 3.4 2.7 6.1 6.1 6.1h8.6L8.3 56.3c-.6 1.1-.2 2.5.9 3.1c.3.2.7.3 1.1.3c.8 0 1.6-.4 2-1.2l9.3-16.7h8.1v15.6c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3V41.9h8.3L52 58.6c.4.7 1.2 1.1 2 1.1c.4 0 .8-.1 1.1-.3c1.1-.6 1.5-2 .9-3.1l-8.2-14.5h8.5c3.4 0 6.1-2.7 6.1-6.1V15.5c-.1-3.4-2.9-6.1-6.3-6.1m1.7 26.4c0 .9-.7 1.6-1.6 1.6H7.9c-.9 0-1.6-.7-1.6-1.6V15.5c0-.9.7-1.6 1.6-1.6h48.3c.9 0 1.6.7 1.6 1.6z"></svg:path>`,
})
export class LineiconsBlackboardIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBloggerIcon],svg[lineicons-blogger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.817 12.887a.8.8 0 0 1 .634.296a.86.86 0 0 1 .253.634a.86.86 0 0 1-.253.634a.86.86 0 0 1-.634.253H10.14a.86.86 0 0 1-.634-.253a.86.86 0 0 1-.254-.634a.86.86 0 0 1 .254-.634a.8.8 0 0 1 .634-.296zm-3.676-2.704a.86.86 0 0 1-.634-.253a.86.86 0 0 1-.254-.634a.86.86 0 0 1 .254-.634a.86.86 0 0 1 .634-.254h2.366a.86.86 0 0 1 .634.254a.86.86 0 0 1 .253.634a.86.86 0 0 1-.253.634a.86.86 0 0 1-.634.253zm5.45 0V8.408q0-1.098-.802-1.901q-.803-.803-1.902-.803H9.296q-1.099 0-1.902.803t-.802 1.901v6.296q0 1.098.802 1.901q.804.803 1.902.803h5.408q1.099 0 1.902-.803q.802-.802.802-1.9V12a.86.86 0 0 0-.253-.634a.86.86 0 0 0-.634-.253a1 1 0 0 1-.676-.254a1 1 0 0 1-.254-.676M19.225 3q.72 0 1.226.55q.549.506.549 1.225v14.45q0 .72-.55 1.268a1.67 1.67 0 0 1-1.225.507H4.775q-.72 0-1.268-.507A1.8 1.8 0 0 1 3 19.225V4.775q0-.72.507-1.226Q4.057 3 4.775 3z"></svg:path>`,
})
export class LineiconsBloggerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBloggerAltIcon],svg[lineicons-blogger-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.104 14.275q.651 0 1.083.505q.434.433.434 1.083t-.434 1.083t-1.083.433H8.823q-.651 0-1.083-.433a1.47 1.47 0 0 1-.434-1.083q0-.65.434-1.083q.433-.505 1.083-.505zM8.823 9.654q-.651 0-1.083-.434a1.47 1.47 0 0 1-.434-1.083q0-.65.434-1.083a1.47 1.47 0 0 1 1.083-.433h4.043q.65 0 1.083.433q.433.434.433 1.083q0 .651-.433 1.083a1.47 1.47 0 0 1-1.083.434zm9.314 0V6.62q0-1.878-1.372-3.25Q15.393 2 13.515 2H7.38Q5.5 2 4.129 3.372q-1.37 1.371-1.37 3.248v10.758q0 1.877 1.372 3.249Q5.5 22 7.379 22h9.242q1.877 0 3.249-1.372t1.372-3.249v-4.62a1.47 1.47 0 0 0-.434-1.084a1.47 1.47 0 0 0-1.083-.433q-.65 0-1.155-.433a1.72 1.72 0 0 1-.433-1.155"></svg:path>`,
})
export class LineiconsBloggerAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBluetoothIcon],svg[lineicons-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.3 21.442a.75.75 0 0 0 .433.864a.75.75 0 0 0 .876-.18l6.412-4.518a.75.75 0 0 0 0-1.226L13.35 12.38l5.693-4.017a.75.75 0 0 0 0-1.226l-6.557-4.62a.75.75 0 0 0-1.186.61v7.807L5.923 7.139a.75.75 0 0 0-.865 1.226l5.69 4.015l-5.669 4a.75.75 0 1 0 .865 1.225l5.356-3.779zm1.5-1.285v-6.33l4.488 3.167zM17.31 7.75l-4.51 3.182v-6.36z"></svg:path>`,
})
export class LineiconsBluetoothIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBluetoothLogoIcon],svg[lineicons-bluetooth-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.808 6.938l1.654 1.654l-1.653 1.652zm0 10.123l1.654-1.654l-1.653-1.652zm-1.765-5.062L7.468 8.416L8.504 7.38l2.848 2.849V3.4l5.178 5.18L13.11 12l3.42 3.42l-5.179 5.178v-6.827L8.504 16.62l-1.036-1.037zM12 22c4.367 0 7.376-2.075 7.376-10c0-7.926-3.009-10-7.376-10c-4.366 0-7.377 2.075-7.377 10S7.633 22 12 22"></svg:path>`,
})
export class LineiconsBluetoothLogoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBluetoothOriginalIcon],svg[lineicons-bluetooth-original-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m36.4 32.4l11.3-12.5L30 1v24.9L19.5 15.5l-3.8 3.9l13.1 13.1l-13.1 13.2l3.8 3.8L30 39l.3 24l18-18zm5-12.4l-6.1 6.1V14zm-6.2 18.9l6.1 6.1l-6.1 6z"></svg:path>`,
})
export class LineiconsBluetoothOriginalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBmwIcon],svg[lineicons-bmw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-.296 0c0-5.36-4.345-9.704-9.704-9.704S2.296 6.641 2.296 12S6.641 21.704 12 21.704s9.704-4.345 9.704-9.704" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.475 11.982a5.533 5.533 0 0 1 5.534-5.534v11.067a5.534 5.534 0 0 0 5.533-5.533zm.741-4.818l-.744.888l-.468-.392l.751-.894c.084-.101.273-.13.4-.024c.145.12.16.304.061.422m-.823-.612l-.706.841l-.442-.37l.714-.852c.083-.099.27-.094.39.007c.132.111.132.268.044.374"></svg:path><svg:path fill="currentColor" d="M21.266 11.982a9.258 9.258 0 1 1-18.515 0a9.258 9.258 0 1 1 18.515 0M4.51 7.237l1.87 1.57l1.253-1.495c.287-.342.332-.681.03-.973a.62.62 0 0 0-.782-.072a.54.54 0 0 0 .003-.363c-.114-.21-.16-.247-.247-.32l-.02-.017c-.327-.274-.671-.04-.917.254zm8.451-3.272v1.702h.487V3.23h-.732l-.664 1.736l-.664-1.736h-.732v2.437h.488V3.965l.642 1.702h.533zm4.998 4.016l.919-1.301l-.405-.5l-1.463.628l.958-1.252l-.377-.465l-1.53 1.966l.448.548l1.444-.595l.005.006l-.881 1.29l.442.55L19.76 7.77l-.377-.466zm-5.95 9.915a5.914 5.914 0 1 0 0-11.828a5.914 5.914 0 0 0 0 11.828"></svg:path>`,
})
export class LineiconsBmwIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBoardWriting3Icon],svg[lineicons-board-writing-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 3.25a.75.75 0 0 0-1.5 0V4.5h-6.5A2.25 2.25 0 0 0 2.5 6.75V15a2.25 2.25 0 0 0 2.25 2.25h3.157l-1.116 3.257a.75.75 0 1 0 1.419.486l1.283-3.743h1.757v4a.75.75 0 0 0 1.5 0v-4h1.757l1.284 3.743a.75.75 0 0 0 1.419-.486l-1.117-3.257h3.157A2.25 2.25 0 0 0 21.5 15V6.75a2.25 2.25 0 0 0-2.25-2.25h-6.5zm6.5 12.5H4.75A.75.75 0 0 1 4 15V6.75A.75.75 0 0 1 4.75 6h14.5a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-.75.75"></svg:path>`,
})
export class LineiconsBoardWriting3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBoldIcon],svg[lineicons-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 2.75A.75.75 0 0 1 4.25 2h8.875a5.375 5.375 0 0 1 3.352 9.577A5.377 5.377 0 0 1 14.625 22H4.25a.75.75 0 0 1 0-1.5H5v-17h-.75a.75.75 0 0 1-.75-.75m3 8.5h6.625a3.875 3.875 0 0 0 0-7.75H6.5zm0 1.5v7.75h8.125a3.875 3.875 0 0 0 0-7.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsBoldIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBoltIcon],svg[lineicons-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.4 62.3c-.7 0-1.3-.1-2-.4c-1.9-.9-2.9-2.9-2.5-5l3-15.9H8.6c-1.7 0-3.3-1-4.1-2.5s-.6-3.4.4-4.8L27.4 3.6C28.6 2 30.6 1.4 32.5 2s3.1 2.3 3.1 4.3v14.1h19.8c1.8 0 3.4 1 4.1 2.6c.8 1.6.5 3.5-.6 4.8l-27 32.8c-.9 1.1-2.2 1.7-3.5 1.7m2.6-56L8.5 36.4l21.1.1c.7 0 1.3.3 1.7.8s.6 1.2.5 1.9l-3.5 18.6l.1.1L55.5 25l-22.1-.1c-1.2 0-2.3-1-2.3-2.3z"></svg:path>`,
})
export class LineiconsBoltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBolt2Icon],svg[lineicons-bolt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.677 3.093A.75.75 0 0 1 7.41 2.5h7.28a.75.75 0 0 1 .678 1.069l-2.18 4.646h5.652a.75.75 0 0 1 .635 1.149l-8.029 12.785a.75.75 0 0 1-1.382-.464l.62-7.15H5.16a.75.75 0 0 1-.733-.906zM8.017 4l-1.93 9.035h5.415a.75.75 0 0 1 .747.815l-.423 4.873l5.657-9.008h-5.476a.75.75 0 0 1-.679-1.069L13.508 4z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsBolt2Icon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBolt3Icon],svg[lineicons-bolt-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.244 2.586a.75.75 0 0 1 .393.778l-1.285 8.385h4.452a.75.75 0 0 1 .516 1.294l-9.76 9.251a.75.75 0 0 1-1.257-.658l1.286-8.385H5.137a.75.75 0 0 1-.516-1.294l9.759-9.251a.75.75 0 0 1 .864-.12M7.018 11.75h3.444a.75.75 0 0 1 .742.864L10.118 19.7l6.804-6.45h-3.444a.75.75 0 0 1-.741-.864l1.086-7.084z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsBolt3Icon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBoltAltIcon],svg[lineicons-bolt-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.8 62.3c-1.2 0-2.3-.5-3.1-1.4c-1.5-1.7-1-3.7-.8-4.6l5.3-22.7H14.9c-.7 0-2.1 0-3.3-.9c-2-1.6-1.4-4.3-1.3-5.2L14.5 7c.2-1.1.6-2.8 2.1-4C18.3 1.7 20 1.7 21 1.8h13.7c1.2 0 3.7 0 5.2 1.9s1 4.4.8 5.6L39.5 15l8.8.1c3.5 0 4.8 1.6 5.2 2.9c.7 2-.5 3.8-1 4.5L28 59.4c-.5.7-1.2 1.8-2.5 2.5c-.5.2-1 .4-1.5.4c0-.1-.1 0-.2 0m-9-33.3h13.3q1.05 0 1.8.9c.4.5.6 1.2.4 1.9l-5.8 24.8L48.7 20c.1-.1.2-.3.2-.4h-.8l-11.5-.1c-.7 0-1.3-.3-1.7-.8s-.6-1.2-.4-1.9l1.8-8.5c.3-1.4.2-1.7.1-1.8s-.4-.2-1.8-.2H21c-.8 0-1.3 0-1.4.1s-.3.6-.5 1.4l-4.2 20.5c0 .3-.1.5-.1.7"></svg:path>`,
})
export class LineiconsBoltAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBookIcon],svg[lineicons-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.6 50.1H24.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h15.3c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.4-2.3M24.1 34.3h15.8c2.3 0 4.3-1.9 4.3-4.3v-5.9c0-2.3-1.9-4.3-4.3-4.3H24.1c-2.3 0-4.3 1.9-4.3 4.3V30c.1 2.3 2 4.3 4.3 4.3m.3-9.9h15.3v5.4H24.4z"></svg:path><svg:path fill="currentColor" d="M17 6.3h35.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H17c-4 0-7.2 3.1-7.5 7V56c0 3.4 2.9 6.1 6.5 6.1h32.9c2.8 0 5.1-2.3 5.1-5.1V17c0-2.8-2.3-5.1-5.1-5.1H16.7c-1.7 0-2.7-1-2.7-2.6c-.1-1.7 1.3-3 3-3m-.4 10.1s.1 0 0 0q.15 0 0 0h32.2c.3 0 .6.3.6.6v40.2c0 .3-.3.6-.6.6H15.9c-1.1 0-2-.7-2-1.6V16c.8.3 1.7.4 2.7.4"></svg:path>`,
})
export class LineiconsBookIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBook1Icon],svg[lineicons-book-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 5a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-.75-.75zM9 9V6.5h6V9z"></svg:path><svg:path fill="currentColor" d="M6.75 2A2.25 2.25 0 0 0 4.5 4.25V19a3 3 0 0 0 3 3h11.25a.75.75 0 0 0 0-1.5H18v-3h.75a.75.75 0 0 0 .75-.75V4.25A2.25 2.25 0 0 0 17.25 2zM18 16H7.5c-.546 0-1.059.146-1.5.401V4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75zm-1.5 1.5v3h-9a1.5 1.5 0 0 1 0-3z"></svg:path>`,
})
export class LineiconsBook1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBookmarkIcon],svg[lineicons-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.8 62.3c-.7 0-1.3-.1-2-.4c-1.7-.8-2.8-2.5-2.8-4.4V8.2c0-3.5 2.9-6.4 6.4-6.4h27.3c3.5 0 6.4 2.9 6.4 6.4v49.1c0 1.9-1.1 3.6-2.8 4.4s-3.7.5-5.2-.8l-11-9.6c-.7-.5-1.5-.4-2.2 0l-11 9.7c-.9.8-2 1.3-3.1 1.3m1.5-56c-1.1 0-1.9.9-1.9 1.9v49.3c0 .1 0 .2.2.3s.3 0 .3 0l11.2-9.9c2.3-1.8 5.5-1.8 7.8 0l.2.2L47 57.7s.1.1.3 0s.2-.2.2-.3V8.2c0-1.1-.9-1.9-1.9-1.9z"></svg:path>`,
})
export class LineiconsBookmarkIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBookmark1Icon],svg[lineicons-bookmark-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 4.482a2.25 2.25 0 0 1 2.25-2.25h10.5A2.25 2.25 0 0 1 20 4.482v17a.75.75 0 0 1-1.166.625l-5.918-3.946a.75.75 0 0 0-.832 0l-5.918 3.945A.75.75 0 0 1 5 21.483zm2.25-.75a.75.75 0 0 0-.75.75v15.599l4.752-3.168a2.25 2.25 0 0 1 2.496 0l4.752 3.168V4.482a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsBookmark1Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBookmarkAltIcon],svg[lineicons-bookmark-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.5 22.1H29.2v-7c0-3.2-2.6-5.8-5.8-5.8h-8.2c-3.2 0-5.8 2.6-5.8 5.8v7H7.5c-3.2 0-5.8 2.6-5.8 5.8v21c0 3.2 2.6 5.8 5.8 5.8h48.9c3.2 0 5.8-2.6 5.8-5.8v-21c.1-3.2-2.5-5.8-5.7-5.8m-42.6-6.9c0-.7.6-1.3 1.3-1.3h8.2c.7 0 1.3.6 1.3 1.3v14.7l-2.8-2.2l-.2-.1c-1.4-1-3.3-1-4.7 0L14 30V15.2zm43.9 33.6c0 .7-.6 1.3-1.3 1.3h-49c-.7 0-1.3-.6-1.3-1.3v-21c0-.7.6-1.3 1.3-1.3h1.9v5.3c0 1.4.8 2.6 2 3.2c.5.2 1 .4 1.5.4c.8 0 1.5-.3 2.2-.8l4.2-3.3l4.1 3.3c1.1.8 2.5 1 3.7.4s2-1.8 2-3.2v-5.2h27.3c.7 0 1.3.6 1.3 1.3v20.9z"></svg:path>`,
})
export class LineiconsBookmarkAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBookmarkCircleIcon],svg[lineicons-bookmark-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.72 6.857a2.25 2.25 0 0 0-2.25 2.25v7.75a.75.75 0 0 0 1.174.619l2.432-1.668a.75.75 0 0 1 .848 0l2.432 1.668a.75.75 0 0 0 1.174-.619v-7.75a2.25 2.25 0 0 0-2.25-2.25zm-.75 2.25a.75.75 0 0 1 .75-.75h3.56a.75.75 0 0 1 .75.75v6.326l-1.257-.862a2.25 2.25 0 0 0-2.546 0l-1.257.862z"></svg:path><svg:path d="M12.5 2.232c-5.523 0-10 4.478-10 10s4.477 10 10 10s10-4.477 10-10s-4.477-10-10-10m-8.5 10a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0"></svg:path></svg:g>`,
})
export class LineiconsBookmarkCircleIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBooks2Icon],svg[lineicons-books-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.333 5.5a2.25 2.25 0 0 1 2.25-2.25h1.583a2.25 2.25 0 0 1 2.25 2.196c.227-.175.492-.308.786-.387l2.253-.604a2.25 2.25 0 0 1 2.756 1.591L21.93 16.19a2.25 2.25 0 0 1-1.591 2.755l-2.254.604a2.25 2.25 0 0 1-2.756-1.59l-1.912-7.136v6.428a2.25 2.25 0 0 1-2.25 2.25H9.583a2.24 2.24 0 0 1-1.5-.573a2.24 2.24 0 0 1-1.5.573H4.25A2.25 2.25 0 0 1 2 17.25v-9.5A2.25 2.25 0 0 1 4.25 5.5h2.333c.263 0 .516.045.75.128zm0 11.75V7.728A.75.75 0 0 0 6.583 7H4.25a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h2.333a.75.75 0 0 0 .75-.73zm2.25.75h1.583a.75.75 0 0 0 .75-.75V5.5a.75.75 0 0 0-.75-.75H9.583a.75.75 0 0 0-.75.75v11.77a.75.75 0 0 0 .75.73M14.06 7.427l2.717 10.142a.75.75 0 0 0 .919.53l2.253-.604a.75.75 0 0 0 .53-.918L17.763 6.435a.75.75 0 0 0-.918-.53l-2.254.603a.75.75 0 0 0-.53.919"></svg:path>`,
})
export class LineiconsBooks2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBootstrapIcon],svg[lineicons-bootstrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M41.4 39.7c0 5.9-5.5 5.8-6 5.8H24.1V34.2h11.2c6-.2 6.1 4.3 6.1 5.5m-6.9-10.2c.1 0 5.3.1 5.3-5.1c0-2.1-.4-4.9-5.3-4.9H24.1v10zm28.4-18.1v41.3c0 5.6-4.6 10.3-10.4 10.3h-41C5.7 63 1.1 58.4 1.1 52.6V11.4C1.1 5.6 5.7 1 11.5 1h41.3c5.5 0 10.1 4.6 10.1 10.4m-15.2 29c0-3-.8-8-6.7-9.3V31c3.2-1.4 5.1-3.9 5.1-7.6c0-1 .3-9-10.7-9H17.9v36c17.7 0 19.4.1 22.6-.7c1.9-.6 7.2-2.4 7.2-9.3"></svg:path>`,
})
export class LineiconsBootstrapIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBootstrap5Icon],svg[lineicons-bootstrap-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.154 4.065c-1.141 0-1.986.995-1.948 2.074c.037 1.037-.01 2.38-.35 3.474c-.34 1.098-.916 1.794-1.856 1.883v1.008c.94.09 1.516.785 1.856 1.883c.34 1.095.387 2.437.35 3.474c-.038 1.078.807 2.074 1.948 2.074h11.693c1.142 0 1.986-.995 1.948-2.074c-.036-1.037.01-2.38.35-3.474c.34-1.098.915-1.794 1.855-1.883v-1.008c-.94-.09-1.514-.785-1.855-1.883c-.34-1.095-.386-2.437-.35-3.474c.038-1.079-.806-2.074-1.948-2.074zm9.405 9.769c0 1.486-1.112 2.387-2.958 2.387H9.458a.34.34 0 0 1-.34-.338V8.117a.337.337 0 0 1 .34-.337h3.125c1.54 0 2.55.83 2.55 2.105c0 .895-.68 1.697-1.546 1.837v.047c1.179.129 1.972.942 1.972 2.065M12.258 8.85h-1.792v2.521h1.51c1.166 0 1.81-.468 1.81-1.304c0-.784-.554-1.217-1.528-1.217m-1.792 3.521v2.779h1.858c1.215 0 1.858-.486 1.858-1.398c0-.913-.662-1.38-1.936-1.38z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsBootstrap5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBootstrap5SquareIcon],svg[lineicons-bootstrap-5-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.73 14.236c0 1.712-1.598 1.683-1.743 1.683h-3.28v-3.28h3.251c1.742-.058 1.771 1.248 1.771 1.597m-2.004-2.962c.03 0 1.539.03 1.539-1.48c0-.61-.116-1.423-1.539-1.423h-3.02v2.903zm8.245-5.255v11.99c0 1.627-1.335 2.991-3.02 2.991H6.05a3 3 0 0 1-3.02-3.02V6.02A3 3 0 0 1 6.05 3h11.99c1.597 0 2.932 1.335 2.932 3.02m-4.413 8.42c0-.871-.232-2.323-1.945-2.7v-.03c.93-.406 1.48-1.132 1.48-2.206c0-.29.088-2.613-3.106-2.613h-5.08v10.452c5.138 0 5.632.029 6.561-.203c.552-.174 2.09-.697 2.09-2.7"></svg:path>`,
})
export class LineiconsBootstrap5SquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBoxArchive1Icon],svg[lineicons-box-archive-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 11.565a.75.75 0 1 0 0 1.5h4a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" d="M2 6.064a2.25 2.25 0 0 1 2.25-2.25h15.5A2.25 2.25 0 0 1 22 6.064v1a2.25 2.25 0 0 1-1.25 2.017v9.984a2.25 2.25 0 0 1-2.25 2.25h-13a2.25 2.25 0 0 1-2.25-2.25V9.08A2.25 2.25 0 0 1 2 7.064zm2.75 3.25v9.75c0 .415.336.75.75.75h13a.75.75 0 0 0 .75-.75v-9.75zm15.75-2.25v-1a.75.75 0 0 0-.75-.75H4.25a.75.75 0 0 0-.75.75v1c0 .415.336.75.75.75h15.5a.75.75 0 0 0 .75-.75"></svg:path>`,
})
export class LineiconsBoxArchive1Icon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBoxClosedIcon],svg[lineicons-box-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.916 4.962a2.25 2.25 0 0 1 1.961-1.147h8.246a2.25 2.25 0 0 1 1.96 1.147l2.378 4.226c.19.337.289.717.289 1.103v8.774a2.25 2.25 0 0 1-2.25 2.25h-13a2.25 2.25 0 0 1-2.25-2.25V10.29c0-.386.1-.766.289-1.103zM11.25 9.15V5.315H7.877a.75.75 0 0 0-.653.383l-1.942 3.45zm-6.5 1.5v8.416c0 .414.336.75.75.75h13a.75.75 0 0 0 .75-.75v-8.417zm13.968-1.5l-1.942-3.451a.75.75 0 0 0-.653-.383H12.75V9.15z"></svg:path>`,
})
export class LineiconsBoxClosedIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBoxGift1Icon],svg[lineicons-box-gift-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.406 5.787a2.625 2.625 0 0 1 4.23-3a2.625 2.625 0 0 1 4.23 3h2.277a2.25 2.25 0 0 1 2.25 2.25V8.5a2.25 2.25 0 0 1-1.082 1.924V19a2.25 2.25 0 0 1-2.25 2.25H7.21A2.25 2.25 0 0 1 4.96 19v-8.576A2.25 2.25 0 0 1 3.877 8.5v-.463a2.25 2.25 0 0 1 2.25-2.25zM14.51 3.5c-.621 0-1.125.504-1.125 1.125V5.75h1.125a1.125 1.125 0 0 0 0-2.25m-2.625 2.25V4.625A1.125 1.125 0 1 0 10.76 5.75zm6.926 5H6.46V19c0 .414.335.75.75.75h10.85a.75.75 0 0 0 .75-.75zm.332-1.5a.75.75 0 0 0 .75-.75v-.463a.75.75 0 0 0-.75-.75H6.127a.75.75 0 0 0-.75.75V8.5c0 .414.336.75.75.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsBoxGift1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBraveIcon],svg[lineicons-brave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m15.013 2l1.716 1.983s1.507-.426 2.218.299a62 62 0 0 1 1.298 1.364l-.46 1.152l.585 1.705s-1.723 6.65-1.925 7.463c-.398 1.599-.67 2.217-1.8 3.027a152 152 0 0 1-3.742 2.584c-.287.2-.608.423-.903.423s-.617-.224-.904-.423q-.117-.083-.226-.153a152 152 0 0 1-3.516-2.43c-1.13-.811-1.402-1.43-1.8-3.028c-.202-.812-1.925-7.463-1.925-7.463l.586-1.705l-.46-1.152s.585-.64 1.297-1.364c.711-.725 2.218-.299 2.218-.299L8.986 2zM7.751 5.241s-2.207 2.719-2.207 3.3c0 .48.19.668.414.89q.07.069.143.146l1.655 1.79l.054.057c.165.169.409.418.237.832l-.035.084c-.189.449-.42 1.002-.125 1.563c.314.597.853.995 1.199.93c.345-.067 1.156-.498 1.454-.696s1.243-.991 1.243-1.295c0-.253-.68-.675-1.01-.88l-.147-.093l-.162-.104c-.301-.19-.845-.536-.859-.688c-.017-.188-.01-.244.233-.709c.051-.099.112-.205.174-.315c.232-.405.49-.86.433-1.184c-.064-.368-.63-.578-1.107-.757l-.175-.065l-.498-.19v-.001a44 44 0 0 1-1.096-.426c-.12-.057-.09-.11.277-.146l.178-.019c.455-.05 1.292-.14 1.7-.024l.264.073c.457.127 1.018.281 1.072.37l.027.042c.052.075.085.123.028.44l-.094.508c-.127.672-.324 1.724-.349 1.96l-.011.095c-.032.263-.053.438.247.508l.078.018c.338.08.834.195 1.014.195c.179 0 .675-.116 1.013-.195l.078-.018c.3-.07.279-.245.247-.508l-.01-.095c-.026-.236-.223-1.285-.35-1.957l-.094-.51c-.057-.318-.024-.366.028-.44l.027-.043c.054-.089.615-.243 1.072-.37l.265-.073c.407-.116 1.245-.025 1.699.024l.178.019c.367.035.398.09.277.146c-.087.041-.618.244-1.096.426l-.498.19l-.174.066c-.479.179-1.043.39-1.108.757c-.058.325.202.779.433 1.185c.062.109.123.215.175.314c.242.465.249.52.232.709c-.014.153-.558.497-.86.688c-.07.044-.127.08-.16.104l-.148.093c-.33.205-1.01.627-1.01.88c0 .304.945 1.098 1.243 1.295c.298.198 1.11.63 1.455.695c.345.066.884-.332 1.198-.929c.296-.56.064-1.114-.124-1.563l-.036-.084c-.171-.414.072-.663.237-.832l.054-.056l1.655-1.791q.074-.078.144-.146c.223-.222.413-.41.413-.89c0-.581-2.207-3.3-2.207-3.3s-1.863.363-2.114.363c-.2 0-.587-.136-.99-.277l-.307-.107c-.503-.17-.837-.172-.837-.172h.009h-.018H12c-.006 0-.34.003-.838.172q-.152.052-.306.107c-.404.141-.79.277-.99.277c-.252 0-2.115-.363-2.115-.363m5.688 9.78c-.59-.31-1.325-.575-1.44-.575s-.85.265-1.439.576l-.374.196c-.395.207-.674.354-.78.422c-.137.087-.053.251.071.34c.125.09 1.797 1.41 1.96 1.556l.065.06c.156.143.356.326.498.326c.141 0 .34-.183.497-.326l.066-.06a99 99 0 0 1 1.959-1.555c.124-.09.208-.254.071-.341c-.105-.068-.385-.214-.778-.421z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsBraveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBricksIcon],svg[lineicons-bricks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.667 6.75a2.25 2.25 0 0 1 2.25-2.25h3.167a2.25 2.25 0 0 1 2.25 2.25V9h.833a2.25 2.25 0 0 1 2.25 2.25v2.25h.833a2.25 2.25 0 0 1 2.25 2.25v3a.75.75 0 0 1-.75.75H3.25a.75.75 0 0 1-.75-.75v-3a2.25 2.25 0 0 1 2.25-2.25h.834v-2.25A2.25 2.25 0 0 1 7.834 9h.833zm1.5 2.25h4.667V6.75a.75.75 0 0 0-.75-.75h-3.167a.75.75 0 0 0-.75.75zm-2.333 1.5a.75.75 0 0 0-.75.75v2.25h4.667v-3zm5.417 0v3h4.666v-2.25a.75.75 0 0 0-.75-.75zM4.75 15a.75.75 0 0 0-.75.75V18h4.667v-3zm5.417 0v3h4.667v-3zm6.167 0v3H21v-2.25a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsBricksIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBridgeIcon],svg[lineicons-bridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61 29.1h-6.7c-3-9.2-11.8-15.9-22.3-15.9S12.7 19.9 9.7 29.1H3c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3h5.7v13c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V35.9c0-.8.1-1.5.2-2.3h37.3c.1.8.2 1.5.2 2.3v10.7c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-13H61c1.2 0 2.3-1 2.3-2.3c0-1.2-1.1-2.2-2.3-2.2m-31.2 0h-6v-9.5c1.9-.9 3.9-1.5 6-1.7zm4.5-11.2c2.1.2 4.2.9 6 1.7v9.5h-6zm-15.1 4.7v6.5h-4.7c1.1-2.5 2.7-4.7 4.7-6.5m25.6 6.5v-6.5c2 1.8 3.6 4 4.7 6.5z"></svg:path>`,
})
export class LineiconsBridgeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBridge3Icon],svg[lineicons-bridge-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.33 12.871a7.78 7.78 0 0 1 15.34 0H22a.75.75 0 0 1 .25 1.457l-.455.161a3 3 0 0 0-1.893 2.026l-.153.55a.75.75 0 0 1-1.472-.2V14.37H5.723v2.493a.75.75 0 0 1-1.473.2l-.152-.549a3 3 0 0 0-1.892-2.026l-.456-.16A.75.75 0 0 1 2 12.87zm1.526 0h2.15V9.32a6.28 6.28 0 0 0-2.15 3.552M9.506 8.4v4.471h1.744V7.93a6.2 6.2 0 0 0-1.744.47m3.244-.47v4.941h1.744V8.4a6.2 6.2 0 0 0-1.744-.47m3.244 1.39v3.551h2.15a6.28 6.28 0 0 0-2.15-3.551" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsBridge3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBriefcaseIcon],svg[lineicons-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 13.2H44.8V7.7c0-2.9-2.4-5.3-5.3-5.3H24.4c-2.9 0-5.3 2.4-5.3 5.3v5.5H8c-3.4 0-6.3 2.8-6.3 6.3v35.8c0 3.4 2.8 6.3 6.3 6.3h48c3.4 0 6.3-2.8 6.3-6.3V19.5c-.1-3.5-2.9-6.3-6.3-6.3M23.7 7.7c0-.4.3-.7.7-.7h15.1c.4 0 .8.3.8.8v5.5H23.7zm34 47.6c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V19.5c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8v35.8z"></svg:path>`,
})
export class LineiconsBriefcaseIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBriefcase1Icon],svg[lineicons-briefcase-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.023 3a2.25 2.25 0 0 0-2.25 2.25V6h-3a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h14.5a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 19.274 6h-3v-.75A2.25 2.25 0 0 0 14.023 3zm4.75 3h-5.5v-.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75zm-10 1.5h14.5a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75h-14.5a.75.75 0 0 1-.75-.75v-9a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class LineiconsBriefcase1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBriefcase2Icon],svg[lineicons-briefcase-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.773 5.25A2.25 2.25 0 0 1 10.023 3h4a2.25 2.25 0 0 1 2.25 2.25V6h3a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-14.5a2.25 2.25 0 0 1-2.25-2.25v-9A2.25 2.25 0 0 1 4.773 6h3zm7 0a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.75.75V6h5.5zm-10 2.25a.75.75 0 0 0-.75.75v2.25h5.419c.28-.591.883-1 1.581-1h2a1.75 1.75 0 0 1 1.582 1h5.419V8.25a.75.75 0 0 0-.75-.75zM9.442 12H4.023v5.25c0 .414.336.75.75.75h14.5a.75.75 0 0 0 .75-.75V12h-5.418c-.28.591-.883 1-1.582 1h-2a1.75 1.75 0 0 1-1.581-1"></svg:path>`,
})
export class LineiconsBriefcase2Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBriefcaseAltIcon],svg[lineicons-briefcase-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 20H43.7v-1.8c0-5.7-4.6-10.3-10.3-10.3h-2.9c-5.7 0-10.3 4.6-10.3 10.3V20H8c-3.4 0-6.3 2.8-6.3 6.3v23.6c0 3.4 2.8 6.3 6.3 6.3h48c3.4 0 6.3-2.8 6.3-6.3V26.2c0-3.4-2.9-6.2-6.3-6.2m-31.2-1.8c0-3.2 2.6-5.8 5.8-5.8h2.9c3.2 0 5.8 2.6 5.8 5.8V20H24.8zM8 24.5h48c1 0 1.8.8 1.8 1.8v5.6h-5.9V30c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v1.9H16.7V30c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v1.9H6.3v-5.6c0-1 .7-1.8 1.7-1.8m48 27.1H8c-1 0-1.8-.8-1.8-1.8V36.3h5.9v1.9c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-1.9h30.6v1.9c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-1.9h5.9v13.5c0 1-.8 1.8-1.8 1.8"></svg:path>`,
})
export class LineiconsBriefcaseAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBriefcasePlus1Icon],svg[lineicons-briefcase-plus-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.023 8.56a.75.75 0 0 0-.75.75V12h-2.69a.75.75 0 0 0 0 1.5h2.69v2.69a.75.75 0 0 0 1.5 0V13.5h2.691a.75.75 0 0 0 0-1.5h-2.69V9.31a.75.75 0 0 0-.75-.75"></svg:path><svg:path fill="currentColor" d="M7.773 5.25A2.25 2.25 0 0 1 10.023 3h4a2.25 2.25 0 0 1 2.25 2.25V6h3a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-14.5a2.25 2.25 0 0 1-2.25-2.25v-9A2.25 2.25 0 0 1 4.773 6h3zm7 0a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.75.75V6h5.5zm-10 2.25a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h14.5a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75z"></svg:path>`,
})
export class LineiconsBriefcasePlus1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBrushIcon],svg[lineicons-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60.1 19.1L45 4c-2.9-2.9-7.5-2.9-10.4 0L20.1 18.5c-2.4 2.4-3.8 5.6-3.8 9.1c0 2.7.8 5.2 2.3 7.3L3.9 49.6c-1.4 1.4-2.2 3.2-2.2 5.1c0 2 .8 3.9 2.2 5.3s3.3 2.1 5.2 2.1s3.8-.7 5.2-2.1L29 45.3c2.2 1.6 4.8 2.4 7.4 2.4c3.3 0 6.6-1.2 9.1-3.7L60 29.5c1.4-1.4 2.1-3.2 2.1-5.2s-.6-3.8-2-5.2m-49 37.7c-1.1 1.1-2.9 1.1-4 0c-.5-.5-.8-1.3-.8-2s.3-1.4.8-2l14.5-14.5l4 4zm19.5-16l-7.3-7.3c-1.6-1.6-2.4-3.7-2.4-5.9s.9-4.3 2.4-5.9l2.5-2.5l19.1 19.1l-2.5 2.5c-3.3 3.2-8.6 3.2-11.8 0m26.3-14.5L48 35.2L29 16.1l8.9-8.9c1.1-1.1 2.9-1.1 4 0L57 22.3c.5.5.8 1.2.8 2s-.3 1.4-.9 2"></svg:path><svg:path fill="currentColor" d="M36.4 35.2c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.8.9-2.3 0-3.2m-7.7-8.7c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.8.9-2.3 0-3.2"></svg:path>`,
})
export class LineiconsBrushIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBrush1RotatedIcon],svg[lineicons-brush-1-rotated-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.888 2.53a2.25 2.25 0 0 1 3.182 0l7.425 7.425a2.25 2.25 0 0 1 0 3.182L14.07 20.56a2.25 2.25 0 0 1-3.182 0l-2.121-2.12l-1.945 1.945a2.25 2.25 0 1 1-3.182-3.182l1.945-1.945l-2.121-2.12a2.25 2.25 0 0 1 0-3.182zm2.121 1.06a.75.75 0 0 0-1.06 0L6.645 8.895l8.486 8.486l5.303-5.304a.75.75 0 0 0 0-1.06l-3.713-3.713l-1.237 1.237a.75.75 0 1 1-1.06-1.06l1.237-1.238l-1.06-1.06l-3.006 3.005a.75.75 0 0 1-1.06-1.06L13.54 4.12zm1.06 14.85L5.586 9.955l-1.06 1.06a.75.75 0 0 0 0 1.06L11.95 19.5a.75.75 0 0 0 1.06 0zm-7.424-2.122l-1.944 1.945a.75.75 0 0 0 1.06 1.06l1.945-1.944z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsBrush1RotatedIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBrush2Icon],svg[lineicons-brush-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.413 3.744a2.086 2.086 0 0 0-2.881-.066l-9.794 8.94a4 4 0 0 0-.239-.007c-1.125 0-2.248.516-3.016 1.702l-.035.06c-.706 1.353-1.466 2.098-2.016 2.5c-.276.202-.504.32-.653.386a2 2 0 0 1-.16.063l-.03.01l.005-.002h.004l.175.729l-.183-.728a.75.75 0 0 0-.277 1.32l.46-.592l-.46.592h.001l.001.002l.005.003l.013.01a9 9 0 0 0 .224.164c.15.106.366.253.633.42c.53.331 1.278.748 2.126 1.075c1.645.634 3.977 1.034 5.706-.695c.85-.85 1.341-1.971 1.39-3.071l9.067-9.933a2.086 2.086 0 0 0-.066-2.882M12.04 14.74a3.5 3.5 0 0 0-.657-.911a4.2 4.2 0 0 0-.961-.716l9.121-8.327a.586.586 0 0 1 .828.828zm-7.723 3.344c.736-.537 1.638-1.451 2.443-2.983c.482-.727 1.117-.99 1.739-.99c.663 0 1.349.303 1.824.778c.843.843.833 2.485-.362 3.68c-1.062 1.062-2.588.94-4.105.356a11 11 0 0 1-1.61-.79z"></svg:path>`,
})
export class LineiconsBrush2Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBrushAltIcon],svg[lineicons-brush-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60.4 5.8c-1.3-1.3-2.9-2-4.7-2c-1.7 0-3.3.7-4.5 1.8L15.5 38.7c-1.2 0-2.5.2-3.9.8c-2.3 1-3.3 2.8-4.3 4.5c-.9 1.6-1.9 3.3-4.2 5c-1 .8-1.5 2-1.4 3.2s.8 2.3 1.9 2.9C8.2 57.6 13.9 60 18.7 60c2.1 0 4-.5 5.6-1.7c2.3-1.8 3.5-4.1 3.5-6.8V51l32.7-36.1c2.4-2.4 2.3-6.6-.1-9.1M21.6 54.9c-2.2 1.6-7.9.4-14.7-3.1c2.3-2 3.4-4 4.3-5.5s1.3-2.2 2.2-2.6c2.3-1 4.2-.1 4.4.1c2.7 1.9 5.4 5.2 5.4 8c.1 1.2-.4 2.2-1.6 3.1M57.2 12l-31 34.2c-1.4-2.5-3.6-4.7-5.6-6.1L54.3 8.9c.8-.8 2.1-.8 2.9 0c.7.9.8 2.3 0 3.1"></svg:path>`,
})
export class LineiconsBrushAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBtcIcon],svg[lineicons-btc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.615 11.452c1.097-.549 1.774-1.549 1.645-3.194c-.225-2.226-2.032-3-4.484-3.193V2h-1.903v3.032c-.516 0-1 0-1.484.033V2H8.454v3.097c-.678.032-1.484 0-3.807 0v2.032C6.131 7.097 6.906 7 7.1 8v8.516c-.129.774-.742.645-2.097.645l-.355 2.258h3.807V22h1.903v-2.645h1.484V22h1.903v-2.645c3.194-.194 5.323-.968 5.58-3.968c.227-2.42-.935-3.484-2.709-3.935m-6.258-4.226c1.032 0 4.42-.355 4.42 1.903c0 2.13-3.355 1.871-4.42 1.871zm0 9.87v-4.128c1.258 0 5.194-.355 5.194 2.097c.032 2.29-3.936 2.032-5.194 2.032"></svg:path>`,
})
export class LineiconsBtcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBubbleIcon],svg[lineicons-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.9 56.1c-.6 0-1.2-.1-1.8-.4c-1.5-.7-2.4-2.1-2.4-3.8V14.2c0-3.4 2.8-6.3 6.3-6.3h48c3.4 0 6.3 2.8 6.3 6.3v27.6c0 3.4-2.8 6.3-6.3 6.3H17.1l-8.5 7c-.8.6-1.7 1-2.7 1M8 12.4c-1 0-1.8.8-1.8 1.8v37l8.6-7.1c.4-.3.9-.5 1.4-.5H56c1 0 1.8-.8 1.8-1.8V14.2c0-1-.8-1.8-1.8-1.8z"></svg:path>`,
})
export class LineiconsBubbleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBugIcon],svg[lineicons-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M57.7 38.5h-9c-.1-2.4-.5-4.7-1.1-6.9l7.2-6.3c.9-.8 1-2.2.2-3.2c-.8-.9-2.2-1-3.2-.2l-6 5.3c-1.4-2.7-3.2-4.9-5.3-6.6c.9-.4 1.7-.9 2.4-1.7c1.3-1.4 1.9-3.3 1.7-5.2c-.6-6.8-6-11.9-12.7-11.9c-6.6 0-12.2 5.1-12.9 11.9c-.2 1.9.4 3.8 1.7 5.2c.7.8 1.5 1.3 2.4 1.7c-2.1 1.6-3.8 3.8-5.2 6.4l-5.8-5.1c-.9-.8-2.4-.7-3.2.2s-.7 2.4.2 3.2l7 6.1c-.7 2.2-1.1 4.6-1.2 7.1H6.3c-1.2 0-2.3 1-2.3 2.3S5 43 6.3 43h8.9c.2 2.1.7 4 1.3 5.9l-7.2 6.4c-.9.8-1 2.2-.2 3.2c.4.5 1.1.8 1.7.8c.5 0 1.1-.2 1.5-.6l6.1-5.4c3.1 5.5 8 9 13.6 9s10.6-3.6 13.6-9.2l6.3 5.6c.4.4 1 .6 1.5.6c.6 0 1.2-.3 1.7-.8c.8-.9.7-2.4-.2-3.2l-7.4-6.5q.9-2.7 1.2-5.7h9.1c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.4-2.3M23.5 14.1c.5-4.5 4.1-7.9 8.4-7.9s7.8 3.4 8.3 7.9c.1.7-.1 1.3-.5 1.7c-.5.5-1.1.8-1.6.8H25.7c-.6 0-1.2-.3-1.6-.7q-.6-.75-.6-1.8m8.4 43.7c-6.8 0-12.4-8-12.4-17.9S25.1 22 31.9 22s12.4 8 12.4 17.9c0 9.8-5.6 17.9-12.4 17.9"></svg:path>`,
})
export class LineiconsBugIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBug1Icon],svg[lineicons-bug-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.134 2.08a.75.75 0 0 1 1.006.335l.542 1.085h2.665q.078 0 .156.006l.545-1.091a.75.75 0 0 1 1.342.67l-.51 1.019c.194.18.357.396.479.64l.879 1.758a2.25 2.25 0 0 1 2.16 2.248v.732l1.398-.446a.75.75 0 1 1 .456 1.429l-1.853.591v2.07h1.625a.75.75 0 1 1 0 1.5h-1.625v1q-.001.532-.085 1.04l1.938.62a.75.75 0 1 1-.456 1.429l-1.9-.607a6.377 6.377 0 0 1-11.746 0l-1.898.607a.75.75 0 1 1-.457-1.43l1.938-.618a6.4 6.4 0 0 1-.084-1.042v-1H4.024a.75.75 0 0 1 0-1.5h1.625v-2.069l-1.854-.591a.75.75 0 1 1 .457-1.43l1.397.447V8.75a2.25 2.25 0 0 1 2.16-2.248l.88-1.758c.141-.285.34-.53.575-.726l-.466-.932a.75.75 0 0 1 .336-1.007M14.56 6.5l-.543-1.085a.75.75 0 0 0-.67-.415H10.7a.75.75 0 0 0-.671.415L9.487 6.5zM7.9 8a.75.75 0 0 0-.75.75v6.875a4.875 4.875 0 1 0 9.75 0V8.75a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsBug1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBuildings1Icon],svg[lineicons-buildings-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 14.667a.75.75 0 0 1 .75-.75h3a.75.75 0 1 1 0 1.5h-3a.75.75 0 0 1-.75-.75m.75-6.084a.75.75 0 0 0 0 1.5h3a.75.75 0 1 0 0-1.5z"></svg:path><svg:path fill="currentColor" d="M11.5 3.25A2.25 2.25 0 0 0 9.25 5.5v2.25H5.5A2.25 2.25 0 0 0 3.25 10v10c0 .414.336.75.75.75h16a.75.75 0 0 0 .75-.75V5.5a2.25 2.25 0 0 0-2.25-2.25zm-2.25 16h-4.5V10a.75.75 0 0 1 .75-.75h3.75v2.25H7.756a.75.75 0 0 0 0 1.5H9.25v2.5H7.756a.75.75 0 0 0 0 1.5H9.25zm1.5-6.973V5.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v13.75h-8.5z"></svg:path>`,
})
export class LineiconsBuildings1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBulbIcon],svg[lineicons-bulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M55.2 24.9C55.2 12.1 44.8 1.8 32 1.8S8.8 12.1 8.8 24.9c0 8.6 4.8 16.5 12.3 20.5v10.7c0 3.4 2.7 6.1 6.1 6.1h9.5c3.4 0 6.1-2.7 6.1-6.1V45.4c7.6-4 12.4-11.9 12.4-20.5M38.4 56.1c0 .9-.7 1.6-1.6 1.6h-9.5c-.9 0-1.6-.7-1.6-1.6v-9.9h12.7zm1.7-14.3h-5.5v-7.3l5.7-4.4c1-.8 1.2-2.2.4-3.2s-2.2-1.2-3.2-.4l-3 2.3V24c0-1.2-1-2.3-2.3-2.3c-1.2 0-2.3 1-2.3 2.3v5.1l-3.8-2.7c-1-.7-2.4-.5-3.1.5s-.5 2.4.5 3.1l6.4 4.5v7.2h-6.2c-6.4-3.1-10.6-9.7-10.6-16.8c0-10.3 8.4-18.7 18.7-18.7s18.7 8.4 18.7 18.7c.2 7.2-4 13.8-10.4 16.9"></svg:path>`,
})
export class LineiconsBulbIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBulb2Icon],svg[lineicons-bulb-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.063 18.045c-.046-1.131-.794-2.194-1.803-3.18a7.5 7.5 0 1 1 10.48 0c-1.041 1.017-1.805 2.117-1.805 3.29v1.595a2.25 2.25 0 0 1-2.25 2.25h-2.373a2.25 2.25 0 0 1-2.25-2.25zM6.5 9.5a5.98 5.98 0 0 0 1.808 4.293c.741.724 1.512 1.633 1.933 2.707h1.509v-4.659a2.24 2.24 0 0 1-.841-.53l-.846-.846a.75.75 0 1 1 1.061-1.06l.846.845a.75.75 0 0 0 1.06 0l.846-.846a.75.75 0 1 1 1.06 1.06l-.845.846a2.24 2.24 0 0 1-.841.531V16.5h1.509c.421-1.074 1.192-1.984 1.933-2.707A6 6 0 1 0 6.5 9.5m4.063 8.713v1.537c0 .414.335.75.75.75h2.372a.75.75 0 0 0 .75-.75V18h-3.873v.017a4 4 0 0 1 0 .196"></svg:path>`,
})
export class LineiconsBulb2Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBulb4Icon],svg[lineicons-bulb-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.063 18.045c-.046-1.131-.794-2.194-1.803-3.18a7.5 7.5 0 1 1 10.48 0c-1.041 1.017-1.805 2.117-1.805 3.29v1.595a2.25 2.25 0 0 1-2.25 2.25h-2.373a2.25 2.25 0 0 1-2.25-2.25zM6.5 9.5a5.98 5.98 0 0 0 1.808 4.293c.741.724 1.512 1.633 1.933 2.707h4.518c.421-1.074 1.192-1.984 1.933-2.707A6 6 0 1 0 6.5 9.5m4.063 8.713v1.537c0 .414.335.75.75.75h2.372a.75.75 0 0 0 .75-.75V18h-3.873v.017a4 4 0 0 1 0 .196M1.75 9.5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m2.465-5.65a.75.75 0 1 0-.75 1.3l.866.5a.75.75 0 1 0 .75-1.3zM3.19 14.875a.75.75 0 0 1 .275-1.024l.866-.5a.75.75 0 0 1 .75 1.298l-.866.5a.75.75 0 0 1-1.025-.274M21.5 8.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm-1.855 4.875a.75.75 0 0 1 1.025-.274l.866.5a.75.75 0 1 1-.75 1.298l-.866-.5a.75.75 0 0 1-.275-1.024m.275-9.275a.75.75 0 0 0 .75 1.3l.866-.5a.75.75 0 1 0-.75-1.3z"></svg:path>`,
})
export class LineiconsBulb4Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBullhornIcon],svg[lineicons-bullhorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M55.9 1.8h-8.1c-3.2 0-5.9 2.4-6.2 5.5L17.2 9.7H8.1c-3.4 0-6.2 2.7-6.2 6v16.5c0 2.3 1.4 4.4 3.4 5.4l3.5 19.3c.7 3.1 3.6 5.4 6.9 5.4c2.2 0 4.3-1 5.7-2.7c1.2-1.5 1.7-3.4 1.3-5.2L20 38.8L41.5 43c.2 3.3 2.9 5.9 6.2 5.9h8.1c3.4 0 6.3-2.8 6.3-6.3V8c0-3.4-2.8-6.2-6.2-6.2M19.6 14l21.9-2.2v26.6l-21.9-4.3zM6.4 15.7c0-.7.7-1.5 1.7-1.5h7v19.5h-7c-.9 0-1.7-.7-1.7-1.5zm11.5 41.1c-.5.6-1.3 1-2.2 1c-1.2 0-2.3-.8-2.5-1.7L10 38.2h5.3l2.9 17v.1c.2.7-.1 1.2-.3 1.5m39.7-14.2c0 1-.8 1.8-1.8 1.8h-8.1c-1 0-1.8-.8-1.8-1.8V8c0-1 .8-1.8 1.8-1.8h8.1c1 0 1.8.8 1.8 1.8z"></svg:path>`,
})
export class LineiconsBullhornIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBurgerIcon],svg[lineicons-burger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.8 23.1c-1-9.1-8.7-16.2-18-16.2H25.2c-4.9 0-9.4 1.9-12.8 5.3c-3 3-4.8 6.8-5.2 11C4 24.8 1.8 28 1.8 31.7v.8c0 3.7 2.2 6.9 5.4 8.5c.9 9.1 8.7 16.3 18 16.3h13.6c4.9 0 9.4-1.9 12.8-5.3c3-2.9 4.8-6.8 5.2-11c3.2-1.6 5.4-4.8 5.4-8.5v-.7c.1-3.9-2.2-7.2-5.4-8.7m-41.2-7.8c2.6-2.6 6-4 9.6-4h13.6c6.5 0 12 4.6 13.3 10.8H11.9c.5-2.5 1.8-4.9 3.7-6.8m32.8 33.4c-2.6 2.6-6 4-9.7 4H25.2c-6.5 0-12-4.6-13.3-10.8h40.2c-.5 2.6-1.8 4.9-3.7 6.8m9.4-16.3c0 2.8-2.4 5-5.3 5h-41c-2.9 0-5.3-2.2-5.3-5v-.8c0-2.8 2.4-5 5.3-5h41.1c2.8 0 5.1 2.3 5.1 5.1v.7z"></svg:path>`,
})
export class LineiconsBurgerIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBurger1Icon],svg[lineicons-burger-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 3.75A5.25 5.25 0 0 0 3.25 9v1.484a2.25 2.25 0 0 0 0 4.032V18a2.25 2.25 0 0 0 2.25 2.25h13A2.25 2.25 0 0 0 20.75 18v-3.484a2.25 2.25 0 0 0 0-4.032V9c0-2.9-2.35-5.25-5.25-5.25zm11.25 8a.75.75 0 0 1 0 1.5H4.25a.75.75 0 0 1 0-1.5zm-.5-1.5H4.75V9A3.75 3.75 0 0 1 8.5 5.25h7A3.75 3.75 0 0 1 19.25 9zm-14.5 4.5h14.5V18a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class LineiconsBurger1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBurgerDrinkIcon],svg[lineicons-burger-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.151 4.493A.75.75 0 0 1 11.856 4h2.41a.75.75 0 1 0 0-1.5h-2.41a2.25 2.25 0 0 0-2.114 1.48l-.759 2.083H4a.75.75 0 0 0-.746.823l1.164 11.836a2.25 2.25 0 0 0 2.239 2.03h2.641a2.3 2.3 0 0 1-.129-.754v-.746H6.657a.75.75 0 0 1-.746-.677L4.827 7.563H14.2l-.357 3.625h1.507l.423-4.302a.75.75 0 0 0-.746-.824H10.58z"></svg:path><svg:path fill="currentColor" d="M12.919 12.689a2.25 2.25 0 0 0-2.25 2.25v1.033a.75.75 0 0 0 0 1.492v2.535c0 .414.336.75.75.75h7.91a.75.75 0 0 0 .75-.75v-2.535a.75.75 0 0 0 0-1.492V14.94a2.25 2.25 0 0 0-2.25-2.25zm5.66 3.279h-6.41v-1.03a.75.75 0 0 1 .75-.75h4.91a.75.75 0 0 1 .75.75zm-6.41 1.5h1.189l.781.78a.75.75 0 0 0 1.06 0l.781-.78h2.6v1.78h-6.411z"></svg:path>`,
})
export class LineiconsBurgerDrinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBusIcon],svg[lineicons-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.8 33.4c-3.3 0-6 2.7-6 6s2.7 6 6 6s6-2.7 6-6s-2.7-6-6-6m0 7.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m20.4-7.5c-3.3 0-6 2.7-6 6s2.7 6 6 6s6-2.7 6-6s-2.7-6-6-6m0 7.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.6 1.5-1.5 1.5"></svg:path><svg:path fill="currentColor" d="M56.4 4.3h-2.3c-.8-1.5-2.3-2.5-4.1-2.5H14.1c-1.8 0-3.4 1-4.1 2.5H7.6C5.4 4.3 3.5 6 3.4 8.1v4.4c0 2.2 1.9 3.9 4.3 3.9h1.7v29.7c0 3 2.2 5.5 5.1 5.9v4c0 3.4 2.8 6.3 6.3 6.3H23c3.4 0 6.3-2.8 6.3-6.3v-3.9H35V56c0 3.4 2.8 6.3 6.3 6.3h2.2c3.4 0 6.3-2.8 6.3-6.3v-4c2.9-.4 5.1-2.9 5.1-5.9V16.4h1.7c2.4 0 4.3-1.8 4.3-3.9V8.2c-.3-2.2-2.2-3.9-4.5-3.9m-42.3 2h35.8c.1 0 .2.1.2.2V12H13.9V6.4c0-.1.1-.1.2-.1m36 20.9H34.3V16.4h15.9v10.8zm-36.2 0V16.4h15.9v10.8zm-6-15.3V8.8h1.5v3.1zM24.7 56c0 1-.8 1.8-1.8 1.8h-2.2c-1 0-1.8-.8-1.8-1.8v-3.9h5.7V56zM45 56c0 1-.8 1.8-1.8 1.8H41c-1 0-1.8-.8-1.8-1.8v-3.9H45zm3.7-8.4H15.3c-.8 0-1.4-.7-1.4-1.4V31.7h36.2v14.4c0 .8-.6 1.5-1.4 1.5m7.4-35.7h-1.5V8.8h1.5z"></svg:path>`,
})
export class LineiconsBusIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBus1Icon],svg[lineicons-bus-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14.438a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m8.75-1.25a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></svg:path><svg:path fill="currentColor" d="M7.625 2.625a3.75 3.75 0 0 0-3.662 2.938h-.088a1.5 1.5 0 0 0-1.5 1.5v.75c0 .414.336.75.75.75h.75v8.062c0 .725.343 1.37.875 1.781v1.469a1.5 1.5 0 0 0 3 0v-1h8.5v1a1.5 1.5 0 0 0 3 0v-1.469a2.25 2.25 0 0 0 .875-1.781V8.563h.75a.75.75 0 0 0 .75-.75v-.75a1.5 1.5 0 0 0-1.5-1.5h-.088a3.75 3.75 0 0 0-3.662-2.938zm11 3.75V10H5.375V6.375a2.25 2.25 0 0 1 2.25-2.25h8.75a2.25 2.25 0 0 1 2.25 2.25m-.75 11H6.125a.75.75 0 0 1-.75-.75V11.5h13.25v5.125a.75.75 0 0 1-.75.75"></svg:path>`,
})
export class LineiconsBus1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsBusketBallIcon],svg[lineicons-busket-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.5c-5.523 0-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10s-4.477-10-10-10M6.598 5.937a8.46 8.46 0 0 1 4.652-1.904v3.809a8.46 8.46 0 0 1-4.652-1.905M5.524 6.994a9.96 9.96 0 0 0 5.726 2.353v2.403H3.533a8.46 8.46 0 0 1 1.99-4.756m7.226 2.353a9.96 9.96 0 0 0 5.726-2.353a8.46 8.46 0 0 1 1.991 4.756H12.75zm4.652-3.41a8.46 8.46 0 0 1-4.652 1.905v-3.81a8.46 8.46 0 0 1 4.652 1.905M3.532 13.25h7.718v2.402a9.96 9.96 0 0 0-5.727 2.353a8.46 8.46 0 0 1-1.99-4.755m3.065 5.812a8.46 8.46 0 0 1 4.653-1.905v3.81a8.46 8.46 0 0 1-4.653-1.905m6.153-1.905a8.46 8.46 0 0 1 4.653 1.905a8.46 8.46 0 0 1-4.653 1.905zm5.727.848a9.96 9.96 0 0 0-5.727-2.353V13.25h7.717a8.46 8.46 0 0 1-1.99 4.755"></svg:path>`,
})
export class LineiconsBusketBallIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCakeIcon],svg[lineicons-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M58.1 29.7h-1V11.4c0-4-3.3-7.3-7.3-7.3H14.1c-4 0-7.3 3.3-7.3 7.3v18.3h-1c-2.3 0-4.1 1.8-4.1 4.1v18.7c0 4 3.3 7.3 7.3 7.3h46c1.9 0 3.8-.8 5.1-2.1c1.4-1.4 2.1-3.2 2.1-5.2V33.8c.1-2.2-1.8-4.1-4.1-4.1m-46.8-9.4c.8.3 1.5.7 2.3 1.2c1.5 1 3.4 2.1 6.9 2.1s5.4-1.2 6.9-2.1c1.3-.8 2.3-1.5 4.5-1.5s3.2.6 4.5 1.5c1.5 1 3.4 2.1 6.9 2.1s5.4-1.2 6.9-2.1c.8-.5 1.4-.9 2.3-1.2v9.5H11.3zm2.8-11.6h35.8c1.5 0 2.8 1.2 2.8 2.8v4.2c-2.1.4-3.5 1.2-4.7 2c-1.3.8-2.3 1.5-4.5 1.5s-3.2-.6-4.5-1.5c-1.5-1-3.4-2.1-6.9-2.1s-5.4 1.2-6.9 2.1c-1.3.8-2.3 1.5-4.5 1.5s-3.2-.6-4.5-1.5c-1.2-.7-2.5-1.6-4.7-2v-4.2c-.2-1.6 1.1-2.8 2.6-2.8M6.8 34.2h50.9v5.9c-2.7.4-4.4 1.4-5.9 2.4c-1.6 1-3 1.8-5.8 1.8c-2.9 0-4.2-.8-5.8-1.8c-1.9-1.2-4-2.5-8.2-2.5s-6.3 1.3-8.2 2.5c-1.6 1-3 1.8-5.8 1.8s-4.2-.8-5.8-1.8c-1.5-1-3.2-2-5.9-2.4v-5.9zm50.1 20.3c-.5.5-1.2.8-2 .8H9c-1.5 0-2.8-1.3-2.8-2.8v-7.8c1.4.3 2.4.9 3.6 1.6c1.9 1.2 4 2.5 8.2 2.5s6.3-1.3 8.2-2.5c1.6-1 3-1.8 5.8-1.8c2.9 0 4.2.8 5.8 1.8c1.9 1.2 4 2.5 8.2 2.5c4.1 0 6.3-1.3 8.2-2.5c1.1-.7 2.1-1.3 3.6-1.6v7.8c0 .8-.3 1.5-.9 2"></svg:path>`,
})
export class LineiconsCakeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCake1Icon],svg[lineicons-cake-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.25 7.75v-1A2.25 2.25 0 0 0 18 4.5H6a2.25 2.25 0 0 0-2.25 2.25v4.056A2.25 2.25 0 0 0 2 13v5.75c0 .414.336.75.75.75h18.5a.75.75 0 0 0 .75-.75V13a2.25 2.25 0 0 0-1.75-2.194V7.749M6 6h12a.75.75 0 0 1 .75.75v.471l-2.075.673a3 3 0 0 1-1.85 0l-1.437-.466a4.5 4.5 0 0 0-2.776 0l-1.436.466a3 3 0 0 1-1.852 0L5.25 7.221V6.75A.75.75 0 0 1 6 6m12.75 2.798v1.952H5.25V8.798l1.612.523a4.5 4.5 0 0 0 2.776 0l1.437-.466a3 3 0 0 1 1.85 0l1.437.466a4.5 4.5 0 0 0 2.776 0zM4.25 12.25h15.5a.75.75 0 0 1 .75.75v.83l-2.95.956a3 3 0 0 1-1.85 0l-2.312-.75a4.5 4.5 0 0 0-2.776 0l-2.311.75a3 3 0 0 1-1.852 0L3.5 13.83V13a.75.75 0 0 1 .75-.75m16.25 3.157V18h-17v-2.593l2.487.806a4.5 4.5 0 0 0 2.776 0l2.312-.75a3 3 0 0 1 1.85 0l2.312.75a4.5 4.5 0 0 0 2.776 0z"></svg:path>`,
})
export class LineiconsCake1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCalculatorIcon],svg[lineicons-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.3 31.3h-1v-1c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v1h-1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h1v1c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-1h1c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3M45 33.6l.9-.9c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0l-.9.9l-.8-.9c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l.9.9l-.9.9c-.9.9-.9 2.3 0 3.2c.4.4 1 .7 1.6.7s1.1-.2 1.6-.7l.9-.9l.9.9c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2zM24.5 48.8h-4.9c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h4.9c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3M42.7 47l-4.9 4.9c-.9.9-.9 2.3 0 3.2c.4.4 1 .7 1.6.7s1.1-.2 1.6-.7l4.9-4.9c.9-.9.9-2.3 0-3.2c-.9-.8-2.3-.8-3.2 0"></svg:path><svg:path fill="currentColor" d="M48.1 1.8H15.9c-3.4 0-6.1 2.7-6.1 6.1v48.3c0 3.4 2.7 6.1 6.1 6.1H48c3.4 0 6.1-2.7 6.1-6.1V7.9c.1-3.4-2.7-6.1-6-6.1M15.9 6.3H48c.9 0 1.6.7 1.6 1.6v13.9H14.3V7.9c0-.9.7-1.6 1.6-1.6m-1.6 20h15.4v14.2H14.3zm20 0h15.4v14.2H34.3zm-20 29.8V45h15.4v12.8H15.9c-.9 0-1.6-.8-1.6-1.7m33.8 1.7H34.3V45h15.4v11.1c0 .9-.7 1.7-1.6 1.7"></svg:path><svg:path fill="currentColor" d="M18.8 20.3h26.4c1.2 0 2.3-1 2.3-2.3v-6.8c0-1.2-1-2.3-2.3-2.3H18.8c-1.2 0-2.3 1-2.3 2.3V18c0 1.2 1 2.3 2.3 2.3m2.2-6.9h22v2.3H21z"></svg:path>`,
})
export class LineiconsCalculatorIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCalculator1Icon],svg[lineicons-calculator-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.71 17.61a.5.5 0 1 0 0 1h2.58a.5.5 0 0 0 0-1zm-.5-.966a.5.5 0 0 1 .5-.5h2.58a.5.5 0 0 1 0 1h-2.58a.5.5 0 0 1-.5-.5m.43-6.128a.5.5 0 0 0 0 .707l.653.654l-.654.653a.5.5 0 1 0 .707.708l.654-.654l.653.654a.5.5 0 0 0 .707-.707l-.653-.654l.653-.654a.5.5 0 0 0-.707-.707L15 11.17l-.654-.654a.5.5 0 0 0-.707 0M7.21 17.377a.5.5 0 0 1 .5-.5h2.58a.5.5 0 1 1 0 1H7.71a.5.5 0 0 1-.5-.5M9 10.087a.5.5 0 0 0-.5.5v.79h-.79a.5.5 0 0 0 0 1h.79v.79a.5.5 0 0 0 1 0v-.79h.79a.5.5 0 1 0 0-1H9.5v-.79a.5.5 0 0 0-.5-.5"></svg:path><svg:path fill="currentColor" d="M4.5 4.25A2.25 2.25 0 0 1 6.75 2h10.5a2.25 2.25 0 0 1 2.25 2.25v15.5A2.25 2.25 0 0 1 17.25 22H6.75a2.25 2.25 0 0 1-2.25-2.25zm2.25-.75a.75.75 0 0 0-.75.75v3h12v-3a.75.75 0 0 0-.75-.75zM6 19.75c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75v-11H6z"></svg:path>`,
})
export class LineiconsCalculator1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCalculator2Icon],svg[lineicons-calculator-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 5.75A.75.75 0 0 1 8.25 5h7.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75zm1 4.1a.9.9 0 1 0 0 1.8a.9.9 0 0 0 0-1.8m2.6.9a.9.9 0 1 1 1.8 0a.9.9 0 0 1-1.8 0m4.4-.9a.9.9 0 1 0 0 1.8a.9.9 0 0 0 0-1.8m-7.9 4.4a.9.9 0 1 1 1.8 0a.9.9 0 0 1-1.8 0m4.4-.9a.9.9 0 1 0 0 1.8a.9.9 0 0 0 0-1.8m2.6.9a.9.9 0 1 1 1.8 0a.9.9 0 0 1-1.8 0m-6.1 2.6a.9.9 0 1 0 0 1.8a.9.9 0 0 0 0-1.8m2.6.9a.9.9 0 1 1 1.8 0a.9.9 0 0 1-1.8 0m4.4-.9a.9.9 0 1 0 0 1.8a.9.9 0 0 0 0-1.8"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 4.25A2.25 2.25 0 0 1 6.75 2h10.5a2.25 2.25 0 0 1 2.25 2.25v15.5A2.25 2.25 0 0 1 17.25 22H6.75a2.25 2.25 0 0 1-2.25-2.25zm2.25-.75a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsCalculator2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCalculatorAltIcon],svg[lineicons-calculator-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.1 6.25c-.957 0-1.75.793-1.75 1.75v48c0 .957.793 1.75 1.75 1.75h37.8c.957 0 1.75-.793 1.75-1.75V8c0-.957-.793-1.75-1.75-1.75zM6.85 8c0-3.443 2.807-6.25 6.25-6.25h37.8c3.443 0 6.25 2.807 6.25 6.25v48c0 3.443-2.807 6.25-6.25 6.25H13.1c-3.443 0-6.25-2.807-6.25-6.25zm13.4 6.15v7h23.5v-7zm-4.5-.25A4.256 4.256 0 0 1 20 9.65h24a4.256 4.256 0 0 1 4.25 4.25v7.5c0 1.111-.38 2.212-1.209 3.041S45.111 25.65 44 25.65H20a4.256 4.256 0 0 1-4.25-4.25zM20 29.75a2.25 2.25 0 0 0 0 4.5h1a2.25 2.25 0 0 0 0-4.5zM28.75 32A2.25 2.25 0 0 1 31 29.75h1a2.25 2.25 0 0 1 0 4.5h-1A2.25 2.25 0 0 1 28.75 32M42 29.75a2.25 2.25 0 0 0 0 4.5h1a2.25 2.25 0 0 0 0-4.5zM17.75 42A2.25 2.25 0 0 1 20 39.75h1a2.25 2.25 0 0 1 0 4.5h-1A2.25 2.25 0 0 1 17.75 42M31 39.75a2.25 2.25 0 0 0 0 4.5h1a2.25 2.25 0 0 0 0-4.5zM39.75 42A2.25 2.25 0 0 1 42 39.75h1a2.25 2.25 0 0 1 0 4.5h-1A2.25 2.25 0 0 1 39.75 42M20 49.75a2.25 2.25 0 0 0 0 4.5h1a2.25 2.25 0 0 0 0-4.5zM28.75 52A2.25 2.25 0 0 1 31 49.75h1a2.25 2.25 0 0 1 0 4.5h-1A2.25 2.25 0 0 1 28.75 52M42 49.75a2.25 2.25 0 0 0 0 4.5h1a2.25 2.25 0 0 0 0-4.5z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsCalculatorAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCalendarIcon],svg[lineicons-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 36.6h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.5-1-1-1m13 0h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.4-1-1-1m13.1 0h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.4-1-1-1M20.5 49.5h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.5-1-1-1m13 0h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.4-1-1-1m13.1 0h-3.1c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h3.1c.6 0 1-.4 1-1v-3c0-.5-.4-1-1-1"></svg:path><svg:path fill="currentColor" d="M56 15.4H34.3v-1.9c2.3-.9 3.9-3.1 3.9-5.7c0-3.4-2.8-6.1-6.2-6.1s-6.2 2.7-6.2 6.1c0 2.6 1.6 4.8 3.9 5.7v1.9H8c-3.4 0-6.3 2.8-6.3 6.3V56c0 3.4 2.8 6.3 6.3 6.3h48c3.4 0 6.3-2.8 6.3-6.3V21.6c0-3.4-2.9-6.2-6.3-6.2M32 6.2c.9 0 1.7.7 1.7 1.6S33 9.4 32 9.4s-1.7-.7-1.7-1.6s.8-1.6 1.7-1.6M8 19.9h48c1 0 1.8.8 1.8 1.8v6.2H6.3v-6.2c0-1.1.7-1.8 1.7-1.8m48 37.9H8c-1 0-1.8-.8-1.8-1.8V32.3h51.5V56c.1 1-.7 1.8-1.7 1.8"></svg:path>`,
})
export class LineiconsCalendarIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCalendarDaysIcon],svg[lineicons-calendar-days-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.185 12.75a.8.8 0 0 1 .8-.8h.01a.8.8 0 0 1 0 1.6h-.01a.8.8 0 0 1-.8-.8m.8 3.2a.8.8 0 0 0 0 1.6h.01a.8.8 0 0 0 0-1.6zm3.21-3.2a.8.8 0 0 1 .8-.8h.01a.8.8 0 0 1 0 1.6h-.01a.8.8 0 0 1-.8-.8m.8 3.2a.8.8 0 0 0 0 1.6h.01a.8.8 0 0 0 0-1.6zm3.21-3.2a.8.8 0 0 1 .8-.8h.01a.8.8 0 0 1 0 1.6h-.01a.8.8 0 0 1-.8-.8m.8 3.2a.8.8 0 0 0 0 1.6h.01a.8.8 0 0 0 0-1.6z"></svg:path><svg:path fill="currentColor" d="M8.75 2.75a.75.75 0 0 0-1.5 0v1H5.5A2.25 2.25 0 0 0 3.25 6v13a2.25 2.25 0 0 0 2.25 2.25h13A2.25 2.25 0 0 0 20.75 19V6a2.25 2.25 0 0 0-2.25-2.25h-1.75v-1a.75.75 0 0 0-1.5 0v1h-6.5zm10.5 5.5H4.75V6a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 .75.75zm-14.5 1.5h14.5V19a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class LineiconsCalendarDaysIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCameraIcon],svg[lineicons-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60.4 19.7c-1.2-1.2-2.8-1.9-4.5-1.9h-7.3v-3.9c0-1.1-.4-3.7-4.2-3.7h-25c-3.6 0-4 2.6-4 3.7v3.9H8.1c-3.5 0-6.4 2.9-6.4 6.4v23.2c0 3.5 2.9 6.4 6.4 6.4h47.7c3.5 0 6.4-2.9 6.4-6.4V24.2c.1-1.7-.6-3.3-1.8-4.5m-2.7 27.7c0 1-.8 1.9-1.9 1.9H8.1c-1 0-1.9-.8-1.9-1.9V24.2c0-1 .8-1.9 1.9-1.9h8.5c1.8 0 3.3-1.5 3.3-3.3v-4.3H44V19c0 1.8 1.5 3.3 3.3 3.3h8.6c.5 0 1 .2 1.3.6c.4.4.5.8.5 1.3z"></svg:path><svg:path fill="currentColor" d="M31.6 23.5c-5.2 0-9.4 4.2-9.4 9.5c0 5.2 4.1 9.3 9.4 9.3c5.2 0 9.4-4.2 9.4-9.3s-4.3-9.5-9.4-9.5m0 14.3c-2.8 0-4.9-2.1-4.9-4.8s2.2-5 4.9-5s4.9 2.3 4.9 5s-2.2 4.8-4.9 4.8M13.8 25.3h-2.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h2.3c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsCameraIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCamera1Icon],svg[lineicons-camera-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 7.002a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5m-3.25 4.75a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"></svg:path><svg:path d="M9.994 2.75a2.25 2.25 0 0 0-1.803.904l-.594.795a.75.75 0 0 1-.6.301H4.25A2.25 2.25 0 0 0 2 7v10.25a2.25 2.25 0 0 0 2.25 2.25h15.5A2.25 2.25 0 0 0 22 17.25V7a2.25 2.25 0 0 0-2.25-2.25h-2.747a.75.75 0 0 1-.6-.301l-.594-.795a2.25 2.25 0 0 0-1.803-.904zm-.601 1.801a.75.75 0 0 1 .6-.301h4.013a.75.75 0 0 1 .601.301l.594.795a2.25 2.25 0 0 0 1.802.904h2.747a.75.75 0 0 1 .75.75v10.25a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75V7a.75.75 0 0 1 .75-.75h2.746A2.25 2.25 0 0 0 8.8 5.346z"></svg:path></svg:g>`,
})
export class LineiconsCamera1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCameraMovie1Icon],svg[lineicons-camera-movie-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.24 7a3.25 3.25 0 1 0-5.535-3.408A2.75 2.75 0 0 0 5.55 7h-.801A2.25 2.25 0 0 0 2.5 9.25v8a2.25 2.25 0 0 0 2.25 2.25h11.5a2.25 2.25 0 0 0 2.25-2.25v-.328l2.066 1.35a1.25 1.25 0 0 0 1.934-1.046V9.274a1.25 1.25 0 0 0-1.934-1.046L18.5 9.578V9.25A2.25 2.25 0 0 0 16.25 7zm-4.49-1.75a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0m7.75 6.12L21 9.735v7.028l-2.5-1.633zM9.25 5.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M4.75 8.5h11.5a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75H4.75a.75.75 0 0 1-.75-.75v-8a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class LineiconsCameraMovie1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCandyIcon],svg[lineicons-candy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M59.8 7L57 4.1c-1.7-1.7-4.1-2.6-6.6-2.3c-2.4.3-4.6 1.6-6 3.7l-3.3 5.1c-6.3-1.9-13.4-.3-18.4 4.6L15 22.8c-3.5 3.5-5.4 8.1-5.4 13c0 1.9.3 3.7.8 5.4l-5 3.2c-2.1 1.3-3.5 3.5-3.7 6c-.3 2.5.6 4.9 2.3 6.6l2.9 2.9c1.5 1.5 3.6 2.4 5.7 2.4h.8c2.4-.3 4.6-1.6 5.9-3.6l3.4-5.1c1.7.5 3.5.8 5.2.8c4.7 0 9.5-1.8 13.1-5.4l2.8-2.8l4.8-4.7c3.5-3.5 5.4-8.1 5.4-13c0-1.9-.3-3.7-.8-5.5l4.9-3.1c2.1-1.3 3.5-3.5 3.8-6s-.3-5.2-2.1-6.9m-44 49.1c-.6.9-1.6 1.5-2.7 1.6s-2.2-.3-2.9-1l-2.9-2.9c-.8-.8-1.2-1.9-1-3c.1-1.1.7-2 1.7-2.6l4.4-2.8c.8 1.2 1.7 2.4 2.7 3.5c1.1 1.1 2.4 2 3.7 2.8zm2.5-10.5c-2.6-2.6-4.1-6.1-4.1-9.8s1.5-7.2 4.1-9.8l1.5-1.5c1.2.7 2.3 1 3.2 1.1c1.1.2 1.7.3 2.7 1.3c.9.9 1.1 1.6 1.3 2.7c.3 1.3.6 3.1 2.5 5s3.7 2.3 5 2.5c1.1.2 1.7.3 2.7 1.3c.9.9 1.1 1.6 1.3 2.7c.2.9.4 2 1.1 3.2l-1.5 1.4c-5.5 5.4-14.3 5.4-19.8-.1M45.7 38L43 40.8c0-.2-.1-.4-.1-.6c-.3-1.3-.6-3.1-2.5-5s-3.7-2.3-5-2.5c-1.1-.2-1.7-.3-2.7-1.3c-.9-.9-1.1-1.6-1.3-2.7c-.3-1.3-.6-3.1-2.5-5s-3.7-2.3-5-2.5c-.2 0-.4-.1-.6-.1l2.8-2.7c2.7-2.7 6.3-4.1 9.9-4.1s7.2 1.4 9.9 4.1c2.6 2.6 4.1 6.1 4.1 9.8s-1.6 7.2-4.3 9.8m12-24.9c-.1 1.1-.7 2.1-1.7 2.7l-4.4 2.8c-.8-1.2-1.6-2.4-2.7-3.4c-1.1-1.1-2.3-2-3.6-2.8l2.9-4.5c.6-.9 1.6-1.5 2.7-1.6s2.2.3 2.9 1l2.9 2.9c.7.7 1.1 1.8 1 2.9"></svg:path>`,
})
export class LineiconsCandyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCandyCaneIcon],svg[lineicons-candy-cane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40.2 54.7c-1.9 0-3.9-.7-5.4-2.2c-1.5-1.4-2.3-3.3-2.3-5.3c0-1.9.7-3.7 2.1-5L46.1 31c.7-.7 1.1-1.7 1.1-2.7c0-1.2-.6-2.3-1.5-3.1c-1.7-1.5-4.3-1.4-5.9.1L14.5 49.9C11.6 52.7 7 52.6 4 49.8c-1.5-1.4-2.3-3.3-2.3-5.3c0-1.9.7-3.7 2.1-5l25.7-25.1c7.2-7 19.3-6.8 26.8.6c3.7 3.6 5.8 8.3 5.9 13.2c.1 5-1.7 9.6-5.3 13.1L45.2 52.7c-1.4 1.4-3.2 2-5 2m.3-11.9l-2.7 2.7c-.5.5-.7 1.1-.7 1.8q0 1.2.9 2.1c1.2 1.2 3.1 1.2 4.1.2l4.2-4.1zm-27.2-6.3L7 42.7c-.5.5-.7 1.1-.7 1.8q0 1.2.9 2.1c1.2 1.2 3.1 1.2 4.1.2l7.8-7.6zm30.6 2.9l5.8 2.6l4.1-4c2.6-2.6 4-6 3.9-9.7c-.1-3.8-1.7-7.4-4.5-10.1c-5.8-5.7-15-5.9-20.5-.6l-6.5 6.3l5.8 2.6l4.6-4.5c3.2-3.1 8.5-3.3 11.9-.3c1.9 1.6 3.1 4 3.1 6.5c.1 2.3-.8 4.5-2.5 6.1zm-27.1-6.3l5.8 2.6l6-5.9l-5.8-2.6z"></svg:path>`,
})
export class LineiconsCandyCaneIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCandyCane2Icon],svg[lineicons-candy-cane-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.292 5.673a6.375 6.375 0 0 1 11.042 6.375l-1.938 3.356a2.25 2.25 0 0 1-3.897-2.25l1.938-3.356a1.875 1.875 0 0 0-3.248-1.875l-5.687 9.851a2.25 2.25 0 0 1-3.897-2.25zm7.958-1.034a4.875 4.875 0 0 0-6.659 1.784l-5.687 9.851a.75.75 0 1 0 1.299.75l5.687-9.851a3.375 3.375 0 0 1 5.846 3.375l-1.938 3.356a.75.75 0 0 0 1.3.75l1.937-3.356a4.875 4.875 0 0 0-1.785-6.66" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsCandyCane2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCandyRound1Icon],svg[lineicons-candy-round-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.25a6.75 6.75 0 0 1 6.24 4.172l2.583-1.789A.75.75 0 0 1 22 8.25v7.5a.75.75 0 0 1-1.177.617l-2.583-1.789a6.751 6.751 0 0 1-12.479 0l-2.584 1.789A.75.75 0 0 1 2 15.75v-7.5a.75.75 0 0 1 1.177-.617l2.584 1.79a6.75 6.75 0 0 1 6.24-4.173m0 1.5a5.25 5.25 0 1 0 .002 10.5a5.25 5.25 0 0 0-.001-10.5m6.75 6.357l1.75 1.212V9.68l-1.75 1.212zm-13.5 0v-2.214L3.5 9.681v4.638z"></svg:path>`,
})
export class LineiconsCandyRound1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCanvaIcon],svg[lineicons-canva-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.869 13.173c-.03 0-.06.02-.08.07c-.201.581-.482.932-.712.932c-.13 0-.18-.15-.18-.37c0-.572.34-1.785.51-2.346q.03-.105.03-.18c0-.161-.09-.242-.31-.242c-.23 0-.491.09-.732.522c-.08-.381-.34-.542-.702-.542c-.41 0-.812.271-1.142.702c-.331.431-.722.572-1.013.501c.21-.51.29-.902.29-1.183c0-.45-.22-.721-.58-.721c-.542 0-.853.521-.853 1.062c0 .421.19.852.612 1.063c-.351.792-.862 1.514-1.063 1.514c-.25 0-.33-1.233-.31-2.116c.01-.5.05-.53.05-.681c0-.09-.06-.15-.291-.15c-.532 0-.702.45-.722.972c-.01.2-.04.39-.09.581c-.22.792-.682 1.404-.983 1.404c-.14 0-.18-.14-.18-.321c0-.572.32-1.293.32-1.905c0-.45-.2-.732-.57-.732c-.442 0-1.013.522-1.564 1.494c.18-.742.25-1.463-.281-1.463q-.18 0-.331.09a.19.19 0 0 0-.11.18c.05.792-.642 2.827-1.293 2.827c-.12 0-.18-.13-.18-.34c0-.572.34-1.785.51-2.347a.7.7 0 0 0 .03-.19c0-.15-.09-.23-.31-.23c-.23 0-.491.09-.732.52c-.09-.38-.34-.54-.702-.54c-.591 0-1.243.62-1.534 1.433c-.39 1.083-1.162 2.135-2.215 2.135c-.952 0-1.454-.792-1.454-2.045c0-1.814 1.334-3.288 2.316-3.288c.471 0 .692.3.692.762c0 .561-.31.812-.31 1.032c0 .06.05.13.16.13c.43 0 .932-.5.932-1.192S6.25 8.792 5.268 8.792C3.634 8.792 2 10.426 2 12.532c0 1.673.822 2.676 2.246 2.676c.972 0 1.824-.752 2.275-1.634c.05.732.381 1.112.892 1.112c.451 0 .812-.27 1.093-.741c.11.49.39.731.762.731c.42 0 .782-.27 1.112-.761c0 .39.08.761.422.761c.16 0 .35-.04.38-.18c.361-1.474 1.244-2.687 1.514-2.687c.08 0 .1.08.1.17c0 .402-.28 1.224-.28 1.745c0 .572.24.942.742.942c.551 0 1.112-.671 1.483-1.664c.12.923.371 1.664.762 1.664c.481 0 1.353-1.022 1.875-2.105c.2.03.511.02.812-.19c-.13.32-.2.671-.2 1.012c0 1.003.48 1.283.891 1.283c.451 0 .812-.27 1.093-.741c.09.42.33.731.762.731c.672 0 1.263-.691 1.263-1.263c.01-.12-.06-.22-.13-.22m-14.035.952c-.27 0-.38-.27-.38-.682c0-.711.49-1.904 1.002-1.904c.22 0 .31.26.31.591c0 .722-.46 1.995-.932 1.995M17.187 12c-.16-.19-.22-.461-.22-.692c0-.29.11-.531.23-.531s.17.12.17.3c-.01.281-.11.712-.18.923m2.115 2.125c-.27 0-.38-.32-.38-.682c0-.691.49-1.904 1.002-1.904c.22 0 .3.26.3.591c.01.722-.44 1.995-.922 1.995"></svg:path>`,
})
export class LineiconsCanvaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCapsuleIcon],svg[lineicons-capsule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.9 62.2c-4.9 0-9.8-1.9-13.5-5.6c-3.7-3.6-5.6-8.4-5.6-13.5s2-9.9 5.6-13.5L29.6 7.4c3.6-3.6 8.4-5.6 13.5-5.6s9.9 2 13.5 5.6c7.5 7.5 7.5 19.6 0 27.1L34.4 56.6c-3.7 3.8-8.6 5.6-13.5 5.6m-.9-39l-9.5 9.5c-2.8 2.8-4.3 6.4-4.3 10.4c0 3.9 1.5 7.6 4.3 10.4s6.4 4.3 10.4 4.3c3.9 0 7.6-1.5 10.4-4.3l9.5-9.5zm3.2-3.2L44 40.8l9.5-9.5c2.8-2.8 4.3-6.4 4.3-10.4c0-3.9-1.5-7.6-4.3-10.4S47 6.2 43.1 6.2s-7.6 1.5-10.4 4.3z"></svg:path>`,
})
export class LineiconsCapsuleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCapsule1Icon],svg[lineicons-capsule-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.398 7.625a5.625 5.625 0 1 1 11.25 0v8.75a5.625 5.625 0 0 1-11.25 0zM12.023 3.5a4.125 4.125 0 0 0-4.125 4.125v3.625h8.25V7.625A4.125 4.125 0 0 0 12.023 3.5m4.125 9.25h-8.25v3.625a4.125 4.125 0 1 0 8.25 0z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsCapsule1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCarIcon],svg[lineicons-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.4 30.1c-3.9 0-7.1 3.1-7.1 7s3.2 7 7.1 7s7.1-3.1 7.1-7s-3.2-7-7.1-7m0 9.5c-1.4 0-2.6-1.1-2.6-2.5s1.2-2.5 2.6-2.5s2.6 1.1 2.6 2.5c0 1.3-1.1 2.5-2.6 2.5m29.2-9.7c-3.9 0-7.1 3.2-7.1 7.1s3.2 7.1 7.1 7.1s7.1-3.2 7.1-7.1s-3.2-7.1-7.1-7.1m0 9.6c-1.4 0-2.6-1.1-2.6-2.6s1.2-2.6 2.6-2.6s2.6 1.1 2.6 2.6s-1.2 2.6-2.6 2.6m-12.2-4.8h-4.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h4.8c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3"></svg:path><svg:path fill="currentColor" d="m57.8 23.3l-.9-9.9c-.5-5.6-5.6-10-11.6-10H18.7c-6 0-11.1 4.4-11.6 9.9l-.9 9.9c-2.6.8-4.4 3.2-4.4 6v15.5C1.8 48.2 4.6 51 8 51h.2v3.3c0 3.4 2.8 6.3 6.3 6.3H16c3.4 0 6.3-2.8 6.3-6.3V51h19.4v3.3c0 3.4 2.8 6.3 6.3 6.3h1.6c3.4 0 6.3-2.8 6.3-6.3V51h.1c3.4 0 6.3-2.8 6.3-6.3V29.2c0-2.8-1.9-5.1-4.5-5.9m-46.2-9.5C11.9 10.5 15 8 18.7 8h26.7c3.7 0 6.9 2.6 7.1 5.8l.8 9.2H10.7zm6.2 40.5c0 1-.8 1.8-1.8 1.8h-1.6c-1 0-1.8-.8-1.8-1.8V51h5.1v3.3zm33.5 0c0 1-.8 1.8-1.8 1.8H48c-1 0-1.8-.8-1.8-1.8V51h5.1zm6.5-9.5c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V29.2c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8z"></svg:path>`,
})
export class LineiconsCarIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCar2Icon],svg[lineicons-car-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12.125a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm7.75.75a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" d="M10.376 2a.75.75 0 0 0-.67.414l-.42.836H7.7a2.25 2.25 0 0 0-2.107 1.46L4.64 7.25H2.75a.75.75 0 0 0 0 1.5h1.33l-.044.116A2.25 2.25 0 0 0 2.5 11v7a1.5 1.5 0 0 0 3 0v-1h13v1a1.5 1.5 0 0 0 3 0v-7c0-.993-.643-1.835-1.535-2.134l-.043-.116h1.328a.75.75 0 0 0 0-1.5h-1.89l-.951-2.54a2.25 2.25 0 0 0-2.107-1.46h-1.589l-.419-.836a.75.75 0 0 0-.67-.414zM20 15.5H4V11a.75.75 0 0 1 .75-.75h14.5A.75.75 0 0 1 20 11zM7.7 4.75h8.602a.75.75 0 0 1 .702.487L18.32 8.75H5.68l1.316-3.513A.75.75 0 0 1 7.7 4.75"></svg:path>`,
})
export class LineiconsCar2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCar4Icon],svg[lineicons-car-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.7 3.25a2.25 2.25 0 0 0-2.107 1.46L4.64 7.25H2.75a.75.75 0 0 0 0 1.5h1.33l-.044.116A2.25 2.25 0 0 0 2.5 11v7a1.5 1.5 0 0 0 3 0v-1h13v1a1.5 1.5 0 0 0 3 0v-7c0-.993-.643-1.835-1.535-2.134l-.043-.116h1.328a.75.75 0 0 0 0-1.5h-1.89l-.951-2.54a2.25 2.25 0 0 0-2.107-1.46zM20 11v4.5h-3.25V14a2.25 2.25 0 0 0-2.25-2.25h-5A2.25 2.25 0 0 0 7.25 14v1.5H4V11a.75.75 0 0 1 .75-.75h14.5A.75.75 0 0 1 20 11m-1.68-2.25H5.68l1.316-3.513A.75.75 0 0 1 7.7 4.75h8.602a.75.75 0 0 1 .702.487zm-3.07 6.75h-6.5V14a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75z"></svg:path>`,
})
export class LineiconsCar4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCar6Icon],svg[lineicons-car-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12.125a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm7.75.75a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" d="M7.699 3.25a2.25 2.25 0 0 0-2.107 1.46L3.706 9.746A3.74 3.74 0 0 0 2.5 12.5v.75a3.75 3.75 0 0 0 2.25 3.438V18a1.5 1.5 0 0 0 3 0v-1h8.5v1a1.5 1.5 0 0 0 3 0v-1.312a3.75 3.75 0 0 0 2.25-3.438v-.75a3.74 3.74 0 0 0-1.207-2.756L18.408 4.71A2.25 2.25 0 0 0 16.3 3.25zM17.75 15.5H6.25A2.25 2.25 0 0 1 4 13.25v-.75a2.25 2.25 0 0 1 2.25-2.25h11.5A2.25 2.25 0 0 1 20 12.5v.75a2.25 2.25 0 0 1-2.25 2.25m.586-6.705a4 4 0 0 0-.586-.045H6.25q-.3 0-.587.046l1.333-3.56A.75.75 0 0 1 7.7 4.75h8.6a.75.75 0 0 1 .702.487z"></svg:path>`,
})
export class LineiconsCar6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCarAltIcon],svg[lineicons-car-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.2 38.4h6.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-6.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3m26.4 0H48c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-6.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3"></svg:path><svg:path fill="currentColor" d="M60 21.4h-2.9l-4.7-12c-.7-1.8-2.5-3.1-4.5-3.1H15.7c-2 0-3.7 1.2-4.5 3l-4.7 12H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h.8v16.6c0 2.6 2 4.8 4.5 5.2v3.9c0 3.4 2.8 6.3 6.3 6.3h2c3.4 0 6.3-2.8 6.3-6.3v-3.8h15.5v3.8c0 3.4 2.8 6.3 6.3 6.3h2c3.4 0 6.3-2.8 6.3-6.3v-3.8c2.8-.1 5-2.4 5-5.2V25.8h1c1.2 0 2.3-1 2.3-2.3s-1.1-2.1-2.3-2.1M15.4 11c0-.1.1-.2.3-.2h32.2c.1 0 .2.1.3.1v.1l5.1 12.8h-43zm3.9 40.4c0 1-.8 1.8-1.8 1.8h-2c-1 0-1.8-.8-1.8-1.8v-3.8h5.5v3.8zm30.1 0c0 1-.8 1.8-1.8 1.8h-2c-1 0-1.8-.8-1.8-1.8v-3.8h5.5v3.8zm5-9c0 .4-.3.8-.8.8H10c-.4 0-.8-.3-.8-.8v-14h45.1v14z"></svg:path>`,
})
export class LineiconsCarAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCaravanIcon],svg[lineicons-caravan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.3 19.6h-5.6c-1.8 0-3.3 1.5-3.3 3.3v5.6c0 1.8 1.5 3.3 3.3 3.3h5.6c1.8 0 3.3-1.5 3.3-3.3v-5.6c-.1-1.9-1.5-3.3-3.3-3.3M17 27.2h-3.1v-3.1H17z"></svg:path><svg:path fill="currentColor" d="M60 39.9h-5.4V26.8c0-.5-.1-1-.4-1.5l-7.1-11.4c-.8-1.2-2.1-2-3.6-2H7.9c-3.4 0-6.1 2.7-6.1 6.1v20.3c0 3 2.2 5.5 5.1 6v.4c0 4 3.3 7.3 7.3 7.3s7.3-3.3 7.3-7.3v-.3H60c1.2 0 2.3-1 2.3-2.3s-1.1-2.2-2.3-2.2m-45.8 7.7c-1.6 0-2.8-1.3-2.8-2.8c0-1.6 1.3-2.8 2.8-2.8c1.6 0 2.8 1.3 2.8 2.8s-1.3 2.8-2.8 2.8m0-10.2c-2.2 0-4.2 1-5.5 2.6h-.8c-.9 0-1.6-.7-1.6-1.6V18c0-.9.7-1.6 1.6-1.6h35.5l6.7 10.9v12.6h-8.2V25.4c0-1.8-1.5-3.3-3.3-3.3H33c-1.8 0-3.3 1.5-3.3 3.3V40h-10c-1.3-1.6-3.3-2.6-5.5-2.6m20.1 2.5V26.6h3.1v13.3z"></svg:path>`,
})
export class LineiconsCaravanIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCaravan1Icon],svg[lineicons-caravan-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.25 4.5A2.25 2.25 0 0 0 2 6.75v9.75a2.25 2.25 0 0 0 2.25 2.25h.92a3.001 3.001 0 0 0 5.66 0h10.42a.75.75 0 0 0 0-1.5h-1v-7.5c0-2.9-2.35-5.25-5.25-5.25zm6.709 12.75a3 3 0 0 0-5.918 0H4.25a.75.75 0 0 1-.75-.75V6.75A.75.75 0 0 1 4.25 6H15a3.75 3.75 0 0 1 3.75 3.75v7.5zm-4.459.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path>`,
})
export class LineiconsCaravan1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCartIcon],svg[lineicons-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M37.1 47.8c-4 0-7.2 3.2-7.2 7.2s3.2 7.2 7.2 7.2s7.2-3.2 7.2-7.2c0-3.9-3.3-7.2-7.2-7.2m0 10c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7c0 1.4-1.3 2.7-2.7 2.7m-19-10c-4 0-7.2 3.2-7.2 7.2s3.2 7.2 7.2 7.2s7.2-3.2 7.2-7.2c0-3.9-3.3-7.2-7.2-7.2m0 10c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7c0 1.4-1.2 2.7-2.7 2.7m40.1-56h-5.4c-2.4 0-4.5 1.8-4.8 4.2l-1.6 11.5H6.9c-1 0-2 .5-2.7 1.3c-.6.8-.9 1.9-.6 2.9v.2l6.2 18.7C10.2 42 11.5 43 13 43h27.6c3.7 0 6.9-2.8 7.4-6.5l4.2-29.9c0-.2.2-.3.4-.3H58c1.2 0 2.3-1 2.3-2.3s-.9-2.2-2.1-2.2m-14.5 34c-.2 1.5-1.5 2.6-3 2.6H13.9L8.5 22h37.2z"></svg:path>`,
})
export class LineiconsCartIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCart1Icon],svg[lineicons-cart-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.316 3.25a.75.75 0 1 0 0 1.5h1.181a.75.75 0 0 1 .743.646l1.254 8.917a2.25 2.25 0 0 0 2.228 1.937h10.344a.75.75 0 0 0 0-1.5H7.722a.75.75 0 0 1-.743-.646l-.12-.853h10.852a2.25 2.25 0 0 0 2.15-1.583l1.921-6.188a.75.75 0 0 0-.716-.972H5.516A2.25 2.25 0 0 0 3.498 3.25zm3.525 2.758h14.207l-1.62 5.215a.75.75 0 0 1-.717.527H6.648zM7.784 17.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m6.786 1.75a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0"></svg:path>`,
})
export class LineiconsCart1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCart2Icon],svg[lineicons-cart-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.566 4a.75.75 0 0 1 .75-.75h1.181a2.25 2.25 0 0 1 2.228 1.937l.061.435h13.965a2.25 2.25 0 0 1 2.063 3.148l-2.668 6.128a2.25 2.25 0 0 1-2.063 1.352H7.722a2.25 2.25 0 0 1-2.228-1.937L4.24 5.396a.75.75 0 0 0-.743-.646h-1.18a.75.75 0 0 1-.75-.75m4.431 3.122l.982 6.982a.75.75 0 0 0 .743.646h9.361a.75.75 0 0 0 .688-.45l2.667-6.13a.75.75 0 0 0-.687-1.048z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.034 19.5a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0m10.286-1.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5"></svg:path>`,
})
export class LineiconsCart2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCartFullIcon],svg[lineicons-cart-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M37.1 47.8c-4 0-7.2 3.2-7.2 7.2s3.2 7.2 7.2 7.2s7.2-3.2 7.2-7.2c0-3.9-3.3-7.2-7.2-7.2m0 10c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7c0 1.4-1.3 2.7-2.7 2.7m-19-10c-4 0-7.2 3.2-7.2 7.2s3.2 7.2 7.2 7.2s7.2-3.2 7.2-7.2c0-3.9-3.3-7.2-7.2-7.2m0 10c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7c0 1.4-1.2 2.7-2.7 2.7m40.1-56h-5.4c-2.4 0-4.5 1.8-4.8 4.2l-1.6 11.5h-4.2v-7.3C42.1 8.4 40.7 7 39 7h-7.4c-.3-1.5-1.6-2.6-3.1-2.6h-8.7c-1.7 0-3.2 1.5-3.2 3.4v1.9H9.3c-1.7 0-3.2 1.4-3.2 3v4.9c-.8.2-1.4.6-1.9 1.2c-.6.8-.9 1.9-.6 2.9v.2l6.2 18.7C10.2 42 11.5 43 13 43h27.6c3.7 0 6.9-2.8 7.4-6.5l4.2-29.9c0-.2.2-.3.4-.3H58c1.2 0 2.3-1 2.3-2.3s-.9-2.2-2.1-2.2M37.6 17.5h-6v-6h6zM21.2 8.9h6v8.6h-6zm-10.5 5.2h6v3.4h-6zm33 21.7c-.2 1.5-1.5 2.6-3 2.6H13.9L8.5 22h37.2z"></svg:path>`,
})
export class LineiconsCartFullIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCashAppIcon],svg[lineicons-cash-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.413 3.31C17.428 3 16.528 3 14.728 3H9.272c-1.8 0-2.7 0-3.684.31a3.83 3.83 0 0 0-2.279 2.278C3 6.56 3 7.466 3 9.272v5.453c0 1.803 0 2.703.31 3.688a3.82 3.82 0 0 0 2.278 2.278C6.56 21 7.466 21 9.272 21h5.456c1.8 0 2.7 0 3.685-.315a3.82 3.82 0 0 0 2.278-2.278c.309-.973.309-1.879.309-3.684V9.275c0-1.803 0-2.703-.31-3.687a3.82 3.82 0 0 0-2.277-2.279M15.45 9.693a.356.356 0 0 1-.506 0l.006.005a3.77 3.77 0 0 0-2.447-.925c-.742 0-1.482.27-1.482.95c0 .649.678.897 1.505 1.2l.205.075c1.603.554 2.925 1.235 2.925 2.849c0 1.752-1.328 2.953-3.507 3.1l-.197.953a.37.37 0 0 1-.365.298l-1.364-.011a.373.373 0 0 1-.358-.453l.209-1.004a4.96 4.96 0 0 1-2.192-1.238a.38.38 0 0 1 0-.54l.76-.76a.366.366 0 0 1 .517 0c.731.735 1.676 1.036 2.576 1.036c.99 0 1.66-.41 1.66-1.111c0-.615-.55-.822-1.592-1.213l-.35-.131c-1.34-.481-2.609-1.182-2.609-2.813c0-1.884 1.536-2.804 3.347-2.897l.197-.95a.37.37 0 0 1 .36-.299h1.36c.234 0 .409.22.36.453l-.221 1.069a5.6 5.6 0 0 1 1.89 1.08c.157.152.166.405.017.546z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsCashAppIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCertificateIcon],svg[lineicons-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 34.8h-3.9V9.6c0-4.2-3.3-7.6-7.3-7.8H13.2C6.9 1.7 1.8 7 1.8 13.5v4.3c0 2 1.7 3.7 3.7 3.7H12v26.7c0 3.5 2.9 6.4 6.5 6.4h3.7v5.1c0 1 .5 1.8 1.4 2.3q.6.3 1.2.3c.5 0 1-.1 1.4-.4l4.6-3l4.5 2.9l.2.1c.9.4 1.8.4 2.6-.1s1.2-1.3 1.2-2.2v-5H56c3.4 0 6.3-2.8 6.3-6.3V41c0-3.4-2.9-6.2-6.3-6.2M6.3 13.5c0-4 3.1-7.3 6.9-7.3h22.7c-.6 1.2-1 2.6-1 4.1V17H6.3zm24.4 31c-3.7 0-6.6-2.9-6.6-6.5s3-6.5 6.6-6.5s6.6 2.9 6.6 6.5s-2.9 6.5-6.6 6.5m1.7 10.1c-1-.7-2.3-.7-3.4 0l-2.4 1.6v-8c1.3.5 2.7.8 4.1.8c1.5 0 2.9-.3 4.1-.8v8zm6.9-4.5v-5.2c1.6-1.9 2.5-4.3 2.5-6.9c0-6.1-5-11-11.1-11s-11.1 4.9-11.1 11c0 2.6.9 5.1 2.5 7v5.1h-3.7c-1.1 0-2-.8-2-1.9V21.5h19.2c2 0 3.7-1.7 3.7-3.7v-7.4c0-2.2 1.5-3.9 3.5-4.1h1.5c1.8 0 3.2 1.5 3.2 3.3v40.5zm18.5-1.8c0 1-.8 1.8-1.8 1.8h-3.9V39.3H56c1 0 1.8.8 1.8 1.8z"></svg:path>`,
})
export class LineiconsCertificateIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCertificateBadge1Icon],svg[lineicons-certificate-badge-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.75A2.25 2.25 0 0 1 4.25 4.5h15.5A2.25 2.25 0 0 1 22 6.75v5.588a7 7 0 0 0-1.5-1.393V6.75a.75.75 0 0 0-.75-.75H4.25a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75h5.638a6.8 6.8 0 0 0 .49 1.5H4.25A2.25 2.25 0 0 1 2 17.25z"></svg:path><svg:path fill="currentColor" d="M18.25 9.75H5.75a.75.75 0 0 1 0-1.5h12.5a.75.75 0 0 1 0 1.5m-7.305 3a7 7 0 0 1 1.33-1.448a.8.8 0 0 0-.275-.052H5.75a.75.75 0 0 0 0 1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20.657 15.282c0 1.216-.54 2.307-1.392 3.046v2.922a.75.75 0 0 1-1.256.553l-1.383-1.264l-1.382 1.264a.75.75 0 0 1-1.256-.553v-2.919a4.031 4.031 0 1 1 6.668-3.05m-4.032-2.532a2.532 2.532 0 1 0 0 5.063a2.532 2.532 0 0 0 0-5.063" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsCertificateBadge1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsChatBubble2Icon],svg[lineicons-chat-bubble-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.511 3.332a4.84 4.84 0 0 0-4.525-1.182a4.84 4.84 0 0 0-3.478 3.42a3.377 3.377 0 0 0 .684 6.317a4.56 4.56 0 0 0 1.842 2a4.58 4.58 0 0 0 4.778-.126a3.407 3.407 0 0 0 4.673-1.89a3.378 3.378 0 0 0 .87-6.165a3.57 3.57 0 0 0-2.22-2.435a3.57 3.57 0 0 0-2.624.061m-.74 1.403a.75.75 0 0 0 .991.155a2.076 2.076 0 0 1 3.191 1.428a.75.75 0 0 0 .436.572a1.877 1.877 0 0 1-.572 3.582a.75.75 0 0 0-.66.597a1.907 1.907 0 0 1-2.836 1.266l-.185-.11a.75.75 0 0 0-.86.071a3.07 3.07 0 0 1-3.491.293a3.06 3.06 0 0 1-1.353-1.623a.75.75 0 0 0-.632-.494a1.877 1.877 0 0 1-.408-3.647a.75.75 0 0 0 .499-.578a3.339 3.339 0 0 1 5.88-1.512M4.75 20.75a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m4.867-5.327a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m-.75 2.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0"></svg:path>`,
})
export class LineiconsChatBubble2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCheckIcon],svg[lineicons-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.28 6.763a.75.75 0 0 1 0 1.06L9.863 17.24a.75.75 0 0 1-1.06 0L4.72 13.157a.75.75 0 0 1 1.06-1.06l3.553 3.552l8.887-8.886a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class LineiconsCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCheckBoxIcon],svg[lineicons-check-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61.6 8.8c-.9-.9-2.3-.9-3.2 0l-3.6 3.6v-.7c0-3.4-2.8-6.3-6.3-6.3H8c-3.4 0-6.3 2.8-6.3 6.3v40.6c0 3.4 2.8 6.3 6.3 6.3h40.6c3.4 0 6.3-2.8 6.3-6.3V18.8l6.8-6.8c.8-.9.8-2.3-.1-3.2M50.3 52.3c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V11.7C6.3 10.8 7 10 8 10h40.6c1 0 1.8.8 1.8 1.8V17L40.1 27.2L33.9 21c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l7.8 7.8s.1.1.2.1l.2.2c.1 0 .1.1.2.1s.1.1.2.1s.2.1.3.1h1c.1 0 .2-.1.4-.1h.1c.1 0 .2-.1.3-.2c0 0 .1 0 .1-.1c.1-.1.2-.1.3-.2l8.6-8.6v28.9z"></svg:path>`,
})
export class LineiconsCheckBoxIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCheckCircle1Icon],svg[lineicons-check-circle-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.507 10.525a.75.75 0 1 0-1.06-1.061l-3.482 3.481l-1.411-1.41a.75.75 0 0 0-1.061 1.06l1.942 1.941a.75.75 0 0 0 1.06 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsCheckCircle1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCheckSquare2Icon],svg[lineicons-check-square-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.75 18.5V8.678l-1.5 1.5V18.5a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75v-13a.75.75 0 0 1 .75-.75h12.814l.98-.98q.136-.136.288-.243A2.24 2.24 0 0 0 18.5 3.25h-13A2.25 2.25 0 0 0 3.25 5.5v13a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25"></svg:path><svg:path fill="currentColor" d="M20.484 6.519a.75.75 0 0 0-1.06-1.061l-7.494 7.493l-3.353-3.353a.75.75 0 1 0-1.06 1.061l3.882 3.883a.75.75 0 0 0 1.061 0z"></svg:path>`,
})
export class LineiconsCheckSquare2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCheckmarkIcon],svg[lineicons-checkmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60.6 13.4c-.9-.9-2.3-.9-3.2 0l-34 33L6.6 29.9c-.9-.9-2.3-.8-3.2 0c-.9.9-.8 2.3 0 3.2l17.7 17.2c.6.6 1.4.9 2.3.9s1.6-.3 2.3-.9l34.9-33.9c.9-.7.9-2.1 0-3"></svg:path>`,
})
export class LineiconsCheckmarkIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCheckmarkCircleIcon],svg[lineicons-checkmark-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 1.8C15.3 1.8 1.8 15.3 1.8 32S15.3 62.3 32 62.3S62.3 48.7 62.3 32S48.7 1.8 32 1.8m0 56C17.8 57.8 6.3 46.2 6.3 32S17.8 6.3 32 6.3s25.8 11.6 25.8 25.8c0 14.1-11.6 25.7-25.8 25.7"></svg:path><svg:path fill="currentColor" d="M40.6 22.7L28.7 34.3L23.3 29c-.9-.9-2.3-.8-3.2 0c-.9.9-.8 2.3 0 3.2l6.4 6.2c.6.6 1.4.9 2.2.9s1.6-.3 2.2-.9L43.8 26c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2-.1"></svg:path>`,
})
export class LineiconsCheckmarkCircleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsChefHatIcon],svg[lineicons-chef-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M47.3 12.7C45.1 6.1 39 1.8 32 1.8S18.9 6.2 16.7 12.7C8.9 14.4 3.4 21.3 3.4 29.2v.1c0 6.1 4.6 11.2 10.5 12.2c0 3.4.1 10.2.2 14.5c0 3.4 2.8 6.2 6.2 6.2h23.3c3.4 0 6.2-2.7 6.2-6.1l.3-14.6c5.9-1 10.4-6.2 10.4-12.4c.1-7.8-5.4-14.7-13.2-16.4m-3.6 45.1H20.4c-.9 0-1.7-.8-1.7-1.7c0-1.2 0-2.7-.1-4.1h26.9l-.1 4c0 1-.8 1.8-1.7 1.8m4.8-20.6c-1.5.1-2.7 1.3-2.7 2.8l-.2 7.4H18.5c0-3.2-.1-6.2-.1-7.4c0-1.5-1.2-2.7-2.7-2.8c-4.3-.2-7.8-3.7-7.8-7.9v-.1c0-5.9 4.2-11.1 10.1-12.2c1.3-.3 2.4-1.2 2.8-2.5c1.5-4.9 6-8.2 11.2-8.2s9.7 3.3 11.2 8.2c.4 1.3 1.5 2.3 2.8 2.5c5.8 1.1 10.1 6.3 10.1 12.2c0 4.3-3.3 7.8-7.6 8"></svg:path>`,
})
export class LineiconsChefHatIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsChevronDownIcon],svg[lineicons-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.548 9.095a.75.75 0 0 1 1.06 0l5.72 5.72l5.72-5.72a.75.75 0 0 1 1.06 1.06l-6.25 6.25a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class LineiconsChevronDownIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsChevronDownCircleIcon],svg[lineicons-chevron-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.608 10.22a.75.75 0 1 0-1.06 1.06l3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 0 0-1.06-1.06l-2.72 2.72z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.328 2c-5.523 0-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10s-4.477-10-10-10m-8.5 10a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsChevronDownCircleIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsChevronLeftIcon],svg[lineicons-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.234 5.22a.75.75 0 0 1 0 1.06L9.514 12l5.72 5.72a.75.75 0 0 1-1.061 1.06l-6.25-6.25a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class LineiconsChevronLeftIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsChevronLeftCircleIcon],svg[lineicons-chevron-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.109 9.28a.75.75 0 0 0-1.061-1.06l-3.25 3.25a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 0 0 1.06-1.06L11.388 12z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.328 2c-5.523 0-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10s-4.477-10-10-10m-8.5 10a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsChevronLeftCircleIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsChevronRightIcon],svg[lineicons-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.7 57.3c-.6 0-1.1-.2-1.6-.6c-.9-.9-.9-2.3 0-3.2l21-21.5l-21-21.4c-.9-.9-.9-2.3 0-3.2s2.3-.9 3.2 0l22.6 23c.9.9.9 2.3 0 3.2l-22.6 23c-.4.4-1 .7-1.6.7"></svg:path>`,
})
export class LineiconsChevronRightIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsChevronRightCircleIcon],svg[lineicons-chevron-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.548 14.72a.75.75 0 1 0 1.06 1.06l3.25-3.25a.75.75 0 0 0 0-1.06l-3.25-3.25a.75.75 0 0 0-1.06 1.06l2.72 2.72z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.328 2c-5.523 0-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10s-4.477-10-10-10m-8.5 10a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsChevronRightCircleIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsChevronUpIcon],svg[lineicons-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.109 14.905a.75.75 0 0 1-1.061 0l-5.72-5.72l-5.72 5.72a.75.75 0 0 1-1.06-1.06l6.25-6.25a.75.75 0 0 1 1.06 0l6.25 6.25a.75.75 0 0 1 0 1.06"></svg:path>`,
})
export class LineiconsChevronUpIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsChevronUpCircleIcon],svg[lineicons-chevron-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.048 13.78a.75.75 0 0 0 1.06-1.06l-3.25-3.25a.75.75 0 0 0-1.06 0l-3.25 3.25a.75.75 0 1 0 1.06 1.06l2.72-2.72z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.328 2c-5.523 0-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10s-4.477-10-10-10m-8.5 10a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsChevronUpCircleIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsChromeIcon],svg[lineicons-chrome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.436 8.695h-6.815a4.21 4.21 0 0 1 .828 5.735l-4.217 7.536c.256.02.512.035.769.034c5.52-.005 9.995-4.479 10-10a9.9 9.9 0 0 0-.565-3.305"></svg:path><svg:path fill="currentColor" d="M11.986 16.22a4.2 4.2 0 0 1-2.095-.563a4.24 4.24 0 0 1-1.547-1.547a4 4 0 0 1-.221-.448L3.808 6.278a10 10 0 0 0-1.728 4.47a9.993 9.993 0 0 0 8.2 11.098l3.33-5.948a4.2 4.2 0 0 1-1.624.321"></svg:path><svg:path fill="currentColor" d="M9.889 8.347a4.22 4.22 0 0 1 2.565-.541h8.616a10 10 0 0 0-2.959-3.72C13.87.808 7.828 1.474 4.392 5.516l3.434 5.877c.18-1.233.9-2.375 2.063-3.046"></svg:path><svg:path fill="currentColor" d="M9.073 10.313a3.378 3.378 0 1 0 4.617-1.236a3.4 3.4 0 0 0-1.68-.452h-.002a3.37 3.37 0 0 0-2.935 1.688"></svg:path>`,
})
export class LineiconsChromeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsChromecastIcon],svg[lineicons-chromecast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.032 17.428v2.746H4.78a2.744 2.744 0 0 0-2.747-2.746m0-3.618v1.809c2.488 0 4.556 2.035 4.556 4.555h1.81c-.033-3.489-2.844-6.364-6.366-6.364m3.651-6.365V8.93c3.586 1.163 6.43 4.039 7.593 7.625h5.105v-9.11zm-3.65 2.746v1.81a8.197 8.197 0 0 1 8.206 8.206h1.777c.032-5.557-4.459-10.016-9.984-10.016m18.221-6.397H3.81c-1.002 0-1.81.84-1.81 1.842v2.746h1.81V5.636h16.38v12.697h-6.365v1.81h6.365c1.001 0 1.81-.809 1.81-1.81V5.636c.031-1.067-.776-1.842-1.746-1.842"></svg:path>`,
})
export class LineiconsChromecastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCircleMinusIcon],svg[lineicons-circle-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.2 29.7H21.8c-1.2 0-2.2 1-2.2 2.3c0 1.2 1 2.2 2.3 2.2h20.4c1.2 0 2.2-1 2.2-2.3c-.1-1.2-1.1-2.2-2.3-2.2"></svg:path><svg:path fill="currentColor" d="M32 1.8C15.3 1.8 1.8 15.3 1.8 32s13.6 30.3 30.3 30.3S62.4 48.7 62.4 32C62.3 15.3 48.7 1.8 32 1.8m0 56C17.8 57.8 6.3 46.2 6.3 32S17.8 6.3 32 6.3s25.8 11.6 25.8 25.8c0 14.1-11.6 25.7-25.8 25.7"></svg:path>`,
})
export class LineiconsCircleMinusIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCirclePlusIcon],svg[lineicons-circle-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.2 29.7h-8v-7.9c0-1.2-1-2.2-2.3-2.2c-1.2 0-2.2 1-2.2 2.3v7.9h-7.9c-1.2 0-2.2 1-2.2 2.3c0 1.2 1 2.2 2.3 2.2h7.9v7.9c0 1.2 1 2.2 2.3 2.2c1.2 0 2.2-1 2.2-2.3v-7.9h7.9c1.2 0 2.2-1 2.2-2.3c0-1.2-1-2.2-2.2-2.2"></svg:path><svg:path fill="currentColor" d="M32 1.8C15.3 1.8 1.8 15.3 1.8 32s13.6 30.3 30.3 30.3S62.4 48.7 62.4 32C62.3 15.3 48.7 1.8 32 1.8m0 56C17.8 57.8 6.3 46.2 6.3 32S17.8 6.3 32 6.3S57.8 17.8 57.8 32S46.2 57.8 32 57.8"></svg:path>`,
})
export class LineiconsCirclePlusIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCiscoIcon],svg[lineicons-cisco-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.61 17.144v-.926l-.02.008a1.7 1.7 0 0 1-.667.17a1 1 0 0 1-.671-.198a.87.87 0 0 1-.294-.415a1 1 0 0 1-.019-.556a.85.85 0 0 1 .298-.474a.9.9 0 0 1 .468-.202c.305-.034.612.024.884.165l.02.011v-.93l-.042-.013a2.4 2.4 0 0 0-.843-.11a2 2 0 0 0-.752.172c-.24.11-.45.273-.616.476a1.85 1.85 0 0 0-.034 2.254c.246.315.591.538.98.63c.409.1.838.085 1.239-.043zm-9.163 0v-.926l-.019.008a1.7 1.7 0 0 1-.667.17a1 1 0 0 1-.672-.198a.86.86 0 0 1-.292-.415a1 1 0 0 1-.02-.556a.85.85 0 0 1 .297-.474a.9.9 0 0 1 .469-.202c.304-.034.612.024.884.165l.02.011v-.93l-.043-.013a2.4 2.4 0 0 0-.842-.11c-.26.007-.516.066-.753.172c-.239.11-.45.273-.617.476a1.85 1.85 0 0 0-.034 2.254c.246.316.592.538.98.63c.41.1.838.085 1.24-.043zm3.27-.769l-.004.798l.059.01q.274.05.553.07q.244.024.49.01q.234-.017.458-.086c.175-.05.338-.136.476-.254a1 1 0 0 0 .278-.398a1.1 1.1 0 0 0-.006-.8a.9.9 0 0 0-.248-.345a1.1 1.1 0 0 0-.365-.213l-.602-.223a.32.32 0 0 1-.164-.157a.2.2 0 0 1 .006-.183a.3.3 0 0 1 .129-.118a.7.7 0 0 1 .214-.062q.192-.028.383.005q.225.024.444.08l.032.006v-.735l-.057-.013a4 4 0 0 0-.453-.08a2.4 2.4 0 0 0-.595-.003a1.3 1.3 0 0 0-.684.275a.9.9 0 0 0-.293.403a1.1 1.1 0 0 0 0 .75q.069.181.21.317q.122.117.273.196q.197.105.414.163q.072.021.142.045l.07.026l.02.008c.07.025.136.065.189.117a.3.3 0 0 1 .084.126a.3.3 0 0 1 0 .134a.28.28 0 0 1-.137.165a.7.7 0 0 1-.23.071a1.7 1.7 0 0 1-.356.018a4 4 0 0 1-.464-.062l-.239-.056zm-2.063.83h.875v-3.473h-.875zm10.135-2.447a.912.912 0 0 1 1.485.8a.9.9 0 0 1-.332.616l-.014.011a.913.913 0 0 1-1.139-1.427m-1.27.712a1.83 1.83 0 0 0 2.221 1.755a1.783 1.783 0 0 0 .584-3.28a1.839 1.839 0 0 0-2.806 1.524m4.615-4.529a.433.433 0 0 0 .866 0v-.96a.434.434 0 0 0-.866 0zm-2.37 0a.435.435 0 0 0 .868 0V8.784a.435.435 0 0 0-.867 0v2.157m-2.406.87a.434.434 0 0 0 .866 0V7.142a.434.434 0 0 0-.866 0zm-2.365-.87a.434.434 0 0 0 .867 0V8.784a.433.433 0 0 0-.866 0zm-2.417 0a.435.435 0 0 0 .866 0V9.98a.434.434 0 0 0-.866 0zm-2.391 0a.433.433 0 0 0 .866 0V8.784a.434.434 0 0 0-.866 0zm-2.406.87a.433.433 0 0 0 .866 0V7.142a.433.433 0 0 0-.866 0zm-2.384-.87a.435.435 0 0 0 .866 0V8.784a.433.433 0 0 0-.865 0zm-2.398 0a.434.434 0 0 0 .866 0V9.98a.433.433 0 0 0-.866 0z"></svg:path>`,
})
export class LineiconsCiscoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsClaudeIcon],svg[lineicons-claude-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.929 16.218l3.931-2.206l.066-.192l-.066-.106h-.192l-.658-.04l-2.246-.061l-1.948-.082l-1.887-.1l-.476-.102l-.445-.587l.045-.293l.4-.268l.572.05l1.265.086l1.897.132l1.376.08l2.039.213h.324l.045-.131l-.11-.081l-.087-.081l-1.963-1.33l-2.125-1.407l-1.113-.81l-.602-.41l-.304-.384l-.131-.84l.546-.602l.734.05l.187.051l.744.572l1.588 1.23l2.075 1.527l.303.253l.122-.086l.015-.06l-.137-.228l-1.128-2.04l-1.204-2.074l-.536-.86l-.142-.516a2.5 2.5 0 0 1-.086-.607l.622-.845l.344-.111l.83.111l.35.304l.515 1.179l.835 1.856l1.295 2.525l.38.749l.202.693l.076.213h.131v-.122l.107-1.422l.197-1.745l.192-2.247l.066-.632l.314-.759l.622-.41l.486.233l.4.572l-.056.37l-.238 1.542l-.465 2.419l-.304 1.619h.177l.203-.203l.82-1.087l1.375-1.72l.608-.684l.708-.754l.455-.359h.86l.633.941l-.284.972l-.885 1.123l-.734.951l-1.052 1.417l-.658 1.133l.06.091l.158-.015l2.378-.506l1.285-.233l1.533-.263l.693.324l.076.329l-.273.673l-1.64.405l-1.922.384l-2.864.678l-.035.025l.04.05l1.29.122l.552.03h1.35l2.515.188l.658.435l.395.531l-.066.405l-1.012.516l-1.366-.324l-3.187-.759l-1.093-.273h-.152v.091l.91.89l1.67 1.508l2.09 1.943l.106.48l-.268.38l-.284-.04l-1.836-1.381l-.708-.623l-1.604-1.35h-.107v.141l.37.541l1.953 2.935l.101.9l-.142.294l-.506.177l-.556-.101l-1.144-1.604l-1.179-1.806l-.95-1.62l-.117.066l-.562 6.047l-.263.308l-.607.233l-.506-.385l-.268-.622l.268-1.23l.324-1.603l.263-1.275l.238-1.584l.142-.526l-.01-.035l-.117.015l-1.194 1.639l-1.816 2.454l-1.437 1.538l-.344.137l-.597-.31l.055-.55l.334-.491l1.989-2.53l1.199-1.569l.774-.905l-.005-.132h-.046l-5.282 3.43l-.94.122l-.406-.38l.051-.622l.192-.202l1.589-1.093z"></svg:path>`,
})
export class LineiconsClaudeIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsClickupIcon],svg[lineicons-clickup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m3.672 17.38l3.07-2.37c1.641 2.127 3.374 3.13 5.289 3.13s3.617-.973 5.167-3.1l3.13 2.31C18.08 20.39 15.283 22 12.031 22c-3.222 0-6.05-1.61-8.36-4.62m8.177-10.243l-5.471 4.711L3.854 8.9L11.848 2l7.964 6.9l-2.553 2.918z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsClickupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsClipboardIcon],svg[lineicons-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.186 3.75A2.25 2.25 0 0 0 13.992 2h-3.937A2.25 2.25 0 0 0 7.86 3.75H6.773A2.25 2.25 0 0 0 4.523 6v13.75A2.25 2.25 0 0 0 6.773 22h10.5a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25zm-6.881.5a.75.75 0 0 1 .75-.75h3.937a.75.75 0 0 1 .75.75v.469a.75.75 0 0 1-.75.75h-3.937a.75.75 0 0 1-.75-.75zm-1.437 1a2.25 2.25 0 0 0 2.187 1.719h3.937A2.25 2.25 0 0 0 16.18 5.25h1.094a.75.75 0 0 1 .75.75v13.75a.75.75 0 0 1-.75.75h-10.5a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75z"></svg:path>`,
})
export class LineiconsClipboardIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCloseIcon],svg[lineicons-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M35.2 32L59.6 7.6c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0L32 28.8L7.6 4.4c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2L28.8 32L4.4 56.4c-.9.9-.9 2.3 0 3.2c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7L32 35.2l24.4 24.4c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2z"></svg:path>`,
})
export class LineiconsCloseIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCloudIcon],svg[lineicons-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43.7 54.1H15.9c-7.8 0-14.1-6.3-14.1-14c0-7.1 5.5-13 12.5-13.9c.5-9.1 8.3-16.3 17.7-16.3c2.1 0 4.1.3 5.8 1c3.7 1.3 6.9 3.8 9.1 7.2c4 .7 7.7 2.6 10.3 5.5c3.2 3.4 4.9 7.8 4.9 12.4c.2 10-8.2 18.1-18.4 18.1M16 49.6h27.7c7.8 0 14.1-6.1 14.1-13.7c0-3.4-1.3-6.7-3.7-9.3c-2.2-2.4-5.4-3.9-8.7-4.3c-.7-.1-1.4-.5-1.7-1.1c-1.6-2.9-4.2-5.1-7.3-6.1c-1.3-.5-2.7-.7-4.3-.7c-7.3 0-13.3 5.8-13.3 13v1c0 1.2-1 2.3-2.3 2.3H16c-5.5 0-9.7 4.2-9.7 9.5s4.2 9.4 9.7 9.4"></svg:path>`,
})
export class LineiconsCloudIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCloud2Icon],svg[lineicons-cloud-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.387 9.984a5.615 5.615 0 0 1 10.918-1.715a5.658 5.658 0 0 1-.961 11.231H6.766a4.766 4.766 0 0 1-.38-9.516M12 6a4.115 4.115 0 0 0-4.116 4.115v.604a.75.75 0 0 1-.75.75h-.37a3.266 3.266 0 1 0 0 6.531h9.579a4.156 4.156 0 0 0 .324-8.3a.75.75 0 0 1-.67-.57A4.12 4.12 0 0 0 12 6" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsCloud2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCloudBolt1Icon],svg[lineicons-cloud-bolt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.41 9.233a5.615 5.615 0 0 1 11.228 0a4.766 4.766 0 0 1 1.121 9.276a7 7 0 0 0 .133-1.696a3.266 3.266 0 0 0-1.634-6.094h-.369a.75.75 0 0 1-.75-.75v-.604a4.115 4.115 0 0 0-8.23 0v.603a.75.75 0 0 1-.75.75h-.37a3.266 3.266 0 0 0-1.634 6.095a7 7 0 0 0 .133 1.696A4.768 4.768 0 0 1 6.41 9.233"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.786 12.425a.75.75 0 0 0-1.277-.455L7.54 16.94a.75.75 0 0 0 .53 1.28H9.9l.362 3.604a.75.75 0 0 0 1.276.455l4.972-4.971a.75.75 0 0 0-.53-1.28h-1.83zm-3.21 4.296H9.88l2.573-2.572l.272 2.705a.75.75 0 0 0 .746.675h.698L11.595 20.1l-.272-2.705a.75.75 0 0 0-.746-.675" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsCloudBolt1Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCloudBolt2Icon],svg[lineicons-cloud-bolt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.41 9.233a5.615 5.615 0 0 1 11.228 0a4.766 4.766 0 0 1 1.121 9.276a7 7 0 0 0 .133-1.696a3.266 3.266 0 0 0-1.634-6.094h-.369a.75.75 0 0 1-.75-.75v-.604a4.115 4.115 0 0 0-8.23 0v.603a.75.75 0 0 1-.75.75h-.37a3.266 3.266 0 0 0-1.634 6.095a7 7 0 0 0 .133 1.696A4.768 4.768 0 0 1 6.41 9.233"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.568 11.75a.75.75 0 0 0-.718.533l-1.5 4.972a.75.75 0 0 0 .718.966h1.439v3.529a.75.75 0 0 0 1.28.53l5.722-5.721a.75.75 0 0 0-.53-1.28h-2.19V12.5a.75.75 0 0 0-.75-.75zm-.49 4.971l1.048-3.471h2.164v2.779a.75.75 0 0 0 .75.75h1.128l-3.161 3.16v-2.468a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsCloudBolt2Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCloudCheckIcon],svg[lineicons-cloud-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m39.1 26.9l-8.8 8.3l-2.5-2.5c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l3.6 3.6c.5.5 1.2.8 2 .8c.6 0 1.3-.2 1.8-.6c.1 0 .1-.1.2-.1l10-9.4c.9-.9.9-2.3.1-3.2c-.9-1-2.3-1-3.2-.1"></svg:path><svg:path fill="currentColor" d="M57.3 23.6c-2.7-2.9-6.4-4.8-10.3-5.5c-2.2-3.4-5.4-5.9-9.1-7.2c-1.7-.7-3.7-1-5.8-1c-9.4 0-17.2 7.2-17.8 16.4c-7.1.8-12.5 6.7-12.5 13.8c0 7.7 6.3 13.9 14.1 14h27.8c10.2 0 18.6-8.1 18.6-18.1c0-4.6-1.8-9-5-12.4m-13.6 26H16c-5.5 0-9.7-4.2-9.7-9.5s4.3-9.5 9.7-9.5h.5c1.2 0 2.3-1 2.3-2.3v-1c0-7.2 6-13 13.3-13c1.6 0 3 .2 4.3.7c3.1 1 5.7 3.2 7.3 6.1c.4.6 1 1.1 1.7 1.1c3.3.3 6.5 1.9 8.7 4.3c2.4 2.6 3.7 5.9 3.7 9.3c0 7.7-6.4 13.8-14.1 13.8"></svg:path>`,
})
export class LineiconsCloudCheckIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCloudCheckCircleIcon],svg[lineicons-cloud-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.387 7.483a5.615 5.615 0 0 1 11.227 0A4.766 4.766 0 0 1 22 12.337a6.9 6.9 0 0 0-1.88-1.634a3.27 3.27 0 0 0-2.885-1.735h-.368a.75.75 0 0 1-.75-.75v-.603a4.115 4.115 0 0 0-8.23 0v.603a.75.75 0 0 1-.75.75h-.37a3.266 3.266 0 0 0 0 6.532h3.076A7 7 0 0 0 9.76 17H6.766a4.766 4.766 0 0 1-.38-9.517m12.269 7.657a.75.75 0 0 1 0 1.061l-1.907 1.908a.75.75 0 0 1-1.061 0l-1.092-1.092a.75.75 0 1 1 1.06-1.06l.562.561l1.378-1.377a.75.75 0 0 1 1.06 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 16.625a5.375 5.375 0 1 1 10.75 0a5.375 5.375 0 0 1-10.75 0m5.375-3.875a3.875 3.875 0 1 0 0 7.75a3.875 3.875 0 0 0 0-7.75" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsCloudCheckCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCloudDownloadIcon],svg[lineicons-cloud-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.387 7.483a5.615 5.615 0 0 1 11.227 0c1.563.124 2.913 1 3.688 2.267h-1.948a3.25 3.25 0 0 0-2.12-.782h-.368a.75.75 0 0 1-.75-.75v-.603a4.115 4.115 0 0 0-8.23 0v.603a.75.75 0 0 1-.75.75h-.37a3.266 3.266 0 0 0 0 6.532H9.75V17H6.766a4.766 4.766 0 0 1-.38-9.517"></svg:path><svg:path fill="currentColor" d="M17.152 18.785a.75.75 0 0 1-1.06 0l-2.218-2.217a.75.75 0 0 1 1.06-1.061l.938.937V12a.75.75 0 0 1 1.5 0v4.444l.938-.937a.75.75 0 0 1 1.06 1.06zm-4.557 2.465a.75.75 0 0 1 .75-.75h6.56a.75.75 0 0 1 0 1.5h-6.56a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class LineiconsCloudDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCloudIot2Icon],svg[lineicons-cloud-iot-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.613 2.158a5.07 5.07 0 0 1 4.965 1.46a3.96 3.96 0 0 1 5.666 4.127a4.42 4.42 0 0 1-2.464 8.088h-.282v2.416c0 .414.336.75.75.75h.49c.229-.303.592-.5 1-.5h.01a1.25 1.25 0 0 1 0 2.5h-.01c-.409 0-.772-.196-1-.5h-.49a2.25 2.25 0 0 1-2.25-2.25v-2.416h-2.25v3.909a1.25 1.25 0 0 1-.74 2.257h-.01a1.25 1.25 0 0 1-.75-2.25v-3.916h-2.25v2.416a2.25 2.25 0 0 1-2.25 2.25h-.49c-.227.304-.59.5-1 .5h-.01a1.25 1.25 0 1 1 0-2.5h.01c.41 0 .772.197 1 .5h.49a.75.75 0 0 0 .75-.75v-2.416h-.282a4.42 4.42 0 0 1-2.39-8.136a5.076 5.076 0 0 1 3.787-5.54m-.328 12.175h8.496a2.92 2.92 0 0 0 1.282-5.542a.75.75 0 0 1-.387-.895a2.46 2.46 0 0 0-3.82-2.697a.75.75 0 0 1-1.062-.172a3.576 3.576 0 0 0-6.406 2.888a.75.75 0 0 1-.41.855a2.92 2.92 0 0 0 1.238 5.563z"></svg:path>`,
})
export class LineiconsCloudIot2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCloudNetworkIcon],svg[lineicons-cloud-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54.9 41.6c-3.2 0-6 2.1-6.9 5h-1v-6.4c5.4-2 9.2-7.2 9.2-13.2c0-3.5-1.3-7-3.8-9.6c-2-2.2-4.8-3.7-7.7-4.3c-1.7-2.5-4.1-4.4-6.9-5.4c-1.3-.5-2.9-.8-4.5-.8c-7.1 0-13 5.4-13.7 12.3c-5.2.9-9.3 5.4-9.3 10.9c0 4.5 2.7 8.4 6.7 10.1v6.4h-1c-1-2.9-3.7-5-6.9-5c-4 0-7.3 3.2-7.3 7.2S5.1 56 9.1 56c3.2 0 6-2.1 6.9-5h2.7c1.6 0 2.8-1.3 2.8-2.8V41h8.2v2.1c-2.9.9-5.1 3.7-5.1 6.9c0 4 3.3 7.2 7.3 7.2s7.3-3.2 7.3-7.2c0-3.2-2.1-5.9-5.1-6.9V41h8.3v7.2c0 1.6 1.3 2.8 2.9 2.8H48c1 2.9 3.7 5 6.9 5c4 0 7.3-3.2 7.3-7.2c.1-4-3.2-7.2-7.3-7.2M9.1 51.5c-1.5 0-2.8-1.2-2.8-2.7s1.3-2.7 2.8-2.7s2.8 1.2 2.8 2.7c0 1.4-1.3 2.7-2.8 2.7M32 52.6c-1.5 0-2.8-1.2-2.8-2.7s1.3-2.7 2.8-2.7s2.8 1.2 2.8 2.7s-1.3 2.7-2.8 2.7M21.4 36.5c-3.7 0-6.6-2.9-6.6-6.5s2.9-6.5 6.6-6.5h.4c1.2 0 2.3-1 2.3-2.3v-.8c0-5 4.1-9.1 9.2-9.1c1.1 0 2.1.2 3 .5c2.1.7 3.9 2.3 5.1 4.3c.4.6 1 1.1 1.7 1.2c2.3.2 4.5 1.3 6 3c1.7 1.8 2.6 4.1 2.6 6.6c0 5.3-4.4 9.6-9.8 9.6zm33.5 15c-1.5 0-2.8-1.2-2.8-2.7s1.3-2.7 2.8-2.7s2.8 1.2 2.8 2.7c.1 1.4-1.2 2.7-2.8 2.7"></svg:path>`,
})
export class LineiconsCloudNetworkIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCloudRainIcon],svg[lineicons-cloud-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.41 9.233a5.615 5.615 0 0 1 11.228 0a4.766 4.766 0 0 1 1.121 9.276a7 7 0 0 0 .133-1.696a3.266 3.266 0 0 0-1.634-6.094h-.369a.75.75 0 0 1-.75-.75v-.604a4.115 4.115 0 0 0-8.23 0v.603a.75.75 0 0 1-.75.75h-.37a3.266 3.266 0 0 0-1.634 6.095a7 7 0 0 0 .133 1.696A4.768 4.768 0 0 1 6.41 9.233"></svg:path><svg:path fill="currentColor" d="M8.818 14.67a.75.75 0 0 0-1.5 0v6.41a.75.75 0 0 0 1.5 0zm7.161-1.5a.75.75 0 0 1 .75.75v6.41a.75.75 0 0 1-1.5 0v-6.41a.75.75 0 0 1 .75-.75m-3.205 0a.75.75 0 0 0-1.5 0v6.41a.75.75 0 1 0 1.5 0z"></svg:path>`,
})
export class LineiconsCloudRainIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCloudRefreshClockwiseIcon],svg[lineicons-cloud-refresh-clockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.387 7.483a5.615 5.615 0 0 1 11.227 0A4.766 4.766 0 0 1 22 12.337a6.9 6.9 0 0 0-1.88-1.634a3.27 3.27 0 0 0-2.885-1.735h-.368a.75.75 0 0 1-.75-.75v-.603a4.115 4.115 0 0 0-8.23 0v.603a.75.75 0 0 1-.75.75h-.37a3.266 3.266 0 0 0 0 6.532h3.076A7 7 0 0 0 9.76 17H6.766a4.766 4.766 0 0 1-.38-9.517"></svg:path><svg:path fill="currentColor" d="M12.022 15.745a.75.75 0 0 1-.447-.962a5.375 5.375 0 0 1 9.877-.525a.75.75 0 0 1-.718 1.116h-1.67a.75.75 0 1 1 0-1.5h.29a3.88 3.88 0 0 0-5.402-.056c-.434.414-.765.92-.968 1.48a.75.75 0 0 1-.962.447m2.759 4.289a3.9 3.9 0 0 1-.89-.662h.294a.75.75 0 0 0 0-1.5h-1.732a.75.75 0 0 0-.677 1.076a5.376 5.376 0 0 0 9.9-.484a.75.75 0 1 0-1.41-.513a3.876 3.876 0 0 1-5.485 2.083"></svg:path>`,
})
export class LineiconsCloudRefreshClockwiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCloudSunIcon],svg[lineicons-cloud-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.643 2.509a.75.75 0 0 1 .715.783v.01a.75.75 0 1 1-1.499-.068v-.01a.75.75 0 0 1 .784-.715m3.725 1.744a.75.75 0 0 1-.048 1.06l-.007.007a.75.75 0 0 1-1.011-1.108l.007-.007a.75.75 0 0 1 1.06.048m-6.823 6.232a.75.75 0 0 1-.048 1.059l-.008.007a.75.75 0 1 1-1.011-1.108l.007-.007a.75.75 0 0 1 1.06.049M2.755 8.418a.75.75 0 0 0 .068-1.498h-.01a.75.75 0 1 0-.068 1.498zm2.038-3.394a.75.75 0 0 1-1.06-.048l-.006-.007a.75.75 0 0 1 1.108-1.012l.006.008a.75.75 0 0 1-.048 1.06m1.043 2.782a1.565 1.565 0 0 1 2.94-.675q.57-.493 1.227-.872a3.065 3.065 0 1 0-3.763 4.456q.111-.038.222-.072q.21-.656.525-1.256a1.566 1.566 0 0 1-1.15-1.58"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.861 6.734c3.29 0 6 2.544 6.243 5.777a4.049 4.049 0 0 1-2.129 7.493H8.072a4.049 4.049 0 0 1-.38-8.08a6.26 6.26 0 0 1 6.17-5.19m4.76 6.234c-.008-2.613-2.14-4.734-4.76-4.734A4.76 4.76 0 0 0 9.11 12.7a.75.75 0 0 1-.749.706h-.289a2.549 2.549 0 0 0 0 5.098h9.903a2.549 2.549 0 0 0 1.078-4.86a.75.75 0 0 1-.432-.676" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsCloudSunIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCloudSyncIcon],svg[lineicons-cloud-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.7 46c-.9-.6-2.2-.4-2.8.6c-1.1 1.7-3 2.7-5.1 2.7c-1 0-2-.3-2.9-.7h1.9c1.1 0 2-.9 2-2s-.9-2-2-2h-6.3c-1.3 0-2.5 1.1-2.5 2.5V52c0 1.1.9 2 2 2s2-.9 2-2v-.6c1.7 1.1 3.6 1.8 5.7 1.8c3.4 0 6.5-1.7 8.4-4.5c.8-.8.5-2.1-.4-2.7m3-14.5c0-1.1-.9-2-2-2s-2 .9-2 2v1c-2-1.5-4.4-2.7-6.6-2.7c-3.8 0-7.2 2.1-9 5.5c-.5 1-.1 2.2.8 2.7c1 .5 2.2.1 2.7-.8c1.1-2.1 3.2-3.4 5.5-3.4c1.4 0 3.5 1.2 4.9 2.5h-1.8c-1.1 0-2 .9-2 2s.9 2 2 2h5c1.3 0 2.5-1.1 2.5-2.5z"></svg:path><svg:path fill="currentColor" d="M58 23.4c-2.7-3-6.6-5.1-10.7-5.8c-2.2-3.6-5.5-6.3-9.4-7.6c-1.8-.7-3.7-1-5.9-1c-9.7 0-17.7 7.7-18.1 17.3C6.7 27 1 33.2 1 40.6C1 48.5 7.5 55 15.4 55c1.1 0 2-.9 2-2s-.9-2-2-2C9.6 51 5 46.4 5 40.6s4.6-10.4 10.4-10.4h.5c1.1 0 2-.9 2-2v-1.1C17.9 19.3 24.2 13 32 13c1.7 0 3.2.3 4.5.8c3.3 1.1 6 3.5 7.8 6.7c.3.6.9 1 1.5 1c3.5.4 6.8 2.1 9.2 4.6c2.6 2.8 4 6.4 4 10.1C59 44.4 52.3 51 44.1 51c-1.1 0-2 .9-2 2s.9 2 2 2C54.5 55 63 46.6 63 36.2c0-4.8-1.8-9.3-5-12.8"></svg:path>`,
})
export class LineiconsCloudSyncIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCloudUploadIcon],svg[lineicons-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.387 7.483a5.615 5.615 0 0 1 11.227 0c1.563.124 2.913 1 3.688 2.267h-1.948a3.25 3.25 0 0 0-2.12-.782h-.368a.75.75 0 0 1-.75-.75v-.603a4.115 4.115 0 0 0-8.23 0v.603a.75.75 0 0 1-.75.75h-.37a3.266 3.266 0 0 0 0 6.532H9.75V17H6.766a4.766 4.766 0 0 1-.38-9.517"></svg:path><svg:path fill="currentColor" d="M20.655 12a.75.75 0 0 1-.75.75h-6.56a.75.75 0 0 1 0-1.5h6.56a.75.75 0 0 1 .75.75m-4.557 2.466a.75.75 0 0 1 1.06 0l2.218 2.217a.75.75 0 0 1-1.06 1.061l-.938-.937v4.444a.75.75 0 0 1-1.5 0v-4.444l-.938.937a.75.75 0 1 1-1.06-1.06z"></svg:path>`,
})
export class LineiconsCloudUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCloudflareIcon],svg[lineicons-cloudflare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.607 12.744c.059-.2.036-.384-.061-.52a.53.53 0 0 0-.42-.207l-3.426-.044a.07.07 0 0 1-.053-.028a.08.08 0 0 1-.008-.061a.1.1 0 0 1 .08-.062l3.457-.044c.408-.02.854-.35 1.01-.757l.197-.514a.1.1 0 0 0 .006-.067a2.245 2.245 0 0 0-2.195-1.758c-.99 0-1.831.64-2.132 1.527a1.012 1.012 0 0 0-1.588 1.06a1.438 1.438 0 0 0-1.383 1.647a.07.07 0 0 0 .067.058h6.322c.036 0 .07-.025.08-.061zm3.224 1.336a.17.17 0 0 1-.17-.17a.17.17 0 0 1 .17-.169a.17.17 0 0 1 .169.17c0 .092-.077.17-.17.17m0-.306a.137.137 0 0 0 0 .273a.137.137 0 0 0 0-.273m.085.226h-.039l-.034-.064H21.8V14h-.036v-.187h.089c.039 0 .063.026.063.062a.06.06 0 0 1-.039.056zm-.066-.098c.013 0 .027-.008.027-.027c0-.022-.011-.028-.027-.028h-.056v.056zm-17.704-.177h.434v1.182h.753v.379H4.146zm1.636.784v-.005c0-.448.362-.813.844-.813c.481 0 .837.358.837.806v.005c0 .448-.362.813-.844.813c-.481 0-.837-.358-.837-.806m1.24 0v-.005c0-.226-.16-.42-.4-.42c-.236 0-.395.191-.395.416v.006c0 .225.16.42.398.42s.398-.192.398-.417m.972.092v-.876h.44v.867c0 .226.114.332.287.332c.172 0 .287-.103.287-.32v-.88h.439v.866c0 .504-.287.724-.732.724c-.442 0-.72-.224-.72-.713m2.116-.876h.6c.557 0 .882.32.882.77v.005c0 .451-.328.785-.89.785h-.592zm.608 1.177c.258 0 .43-.142.43-.395v-.005c0-.251-.172-.395-.43-.395h-.176v.793h.176zm1.503-1.177h1.25v.379h-.819v.266h.74v.36h-.74v.556h-.43zm1.85 0h.431v1.182h.757v.379h-1.19zm2.319-.012h.417l.665 1.572h-.465l-.114-.279h-.602l-.11.279h-.455zm.38.957l-.172-.443l-.175.443zm1.26-.945h.737c.24 0 .404.06.51.169a.48.48 0 0 1 .138.364v.005c0 .24-.128.398-.32.479l.373.545h-.5l-.315-.473h-.19v.473h-.434zm.717.748c.147 0 .23-.072.23-.184v-.006c0-.122-.088-.184-.233-.184h-.284v.373zm1.291-.748h1.256v.367h-.827v.236h.749v.342h-.749v.248h.838v.367h-1.267zM3.2 14.692a.38.38 0 0 1-.356.234c-.236 0-.398-.198-.398-.42V14.5c0-.225.158-.417.394-.417a.39.39 0 0 1 .37.259h.457c-.072-.373-.401-.65-.823-.65c-.481.002-.843.366-.843.814v.005c0 .449.357.808.837.808a.82.82 0 0 0 .819-.624zm16.406-4.145q.046-.004.094-.003a1.875 1.875 0 0 1 1.803 2.378a.07.07 0 0 1-.067.05h-2.608c-.031 0-.051-.028-.04-.056l.057-.142c.155-.406.598-.737 1.01-.757l.76-.044a.1.1 0 0 0 .08-.061a.08.08 0 0 0-.008-.062a.07.07 0 0 0-.053-.027l-.73-.045a.53.53 0 0 1-.42-.206c-.097-.137-.12-.321-.061-.521l.133-.465c.008-.022.027-.039.05-.039" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsCloudflareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCloudySunIcon],svg[lineicons-cloudy-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.4 13.6c1.2 0 2.3-1 2.3-2.3v-4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v4.1c0 1.2 1.1 2.2 2.3 2.2m15.9-1.8c-.9-.9-2.3-.9-3.2 0l-2.6 2.6c-.9.9-.9 2.3 0 3.2c.4.4 1 .7 1.6.7s1.1-.2 1.6-.6l2.6-2.6c.9-1 .9-2.4 0-3.3M60 26.7h-4.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H60c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3m-34.7-8.8c.4.4 1 .6 1.6.6s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2l-2.9-2.9c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2zm24.1 10.3c0-6.1-5-11.1-11.1-11.1c-4.8 0-9 3.2-10.5 7.6c-.7-.1-1.4-.2-2.1-.2c-7.4 0-13.5 5.4-14.2 12.4c-5.5.9-9.7 5.5-9.7 11c0 6.1 5.1 11 11.4 11.1h21.5c8.2 0 14.9-6.4 14.9-14.2c0-3.2-1.2-6.3-3.3-8.9c1.9-2.1 3.1-4.8 3.1-7.7m-11.1-6.5c3.6 0 6.6 2.9 6.6 6.6c0 1.8-.7 3.4-1.9 4.6c-1.6-1-3.5-1.7-5.4-2.1c-1.4-2-3.3-3.6-5.4-4.7c.8-2.6 3.3-4.4 6.1-4.4m-3.6 32.7H13.3c-3.9 0-7-2.9-7-6.6s3.1-6.6 7-6.6h.4c1.2 0 2.3-1 2.3-2.3v-.8c0-5.1 4.4-9.2 9.8-9.2c1.2 0 2.2.2 3.2.5c2.3.7 4.2 2.3 5.4 4.4c.4.6 1 1 1.7 1.1c2.5.3 4.8 1.4 6.4 3.1q2.7 2.85 2.7 6.6c-.1 5.5-4.8 9.8-10.5 9.8"></svg:path>`,
})
export class LineiconsCloudySunIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCodeIcon],svg[lineicons-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.6 14.1c-.9-.8-2.4-.7-3.2.2L2.6 29.9c-1.1 1.2-1.1 3.1 0 4.3l13.9 15.6c.4.5 1.1.8 1.7.8c.5 0 1.1-.2 1.5-.6c.9-.8 1-2.3.2-3.2L6.7 32l13.1-14.7c.9-1 .8-2.4-.2-3.2m41.8 15.8L47.5 14.3c-.8-.9-2.2-1-3.2-.2s-1 2.2-.2 3.2L57.3 32L44.2 46.7c-.8.9-.7 2.3.2 3.2c.4.4 1 .6 1.5.6c.6 0 1.2-.3 1.7-.8l13.9-15.6c1-1.2 1-3-.1-4.2M37.9 14.4c-1.2-.4-2.5.2-2.8 1.4L24.7 46.7c-.4 1.2.2 2.5 1.4 2.8c.2.1.5.1.7.1c.9 0 1.8-.6 2.1-1.5l10.3-30.9c.5-1.1-.1-2.4-1.3-2.8"></svg:path>`,
})
export class LineiconsCodeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCode1Icon],svg[lineicons-code-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.058 4.163a.75.75 0 1 0-1.464-.326l-3.556 16a.75.75 0 1 0 1.465.326zM7.83 7.47a.75.75 0 0 1 0 1.06L4.36 12l3.47 3.47a.75.75 0 1 1-1.061 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0m9.44 0a.75.75 0 0 0 0 1.06l3.47 3.47l-3.47 3.47a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 0 0-1.06 0"></svg:path>`,
})
export class LineiconsCode1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCodeAltIcon],svg[lineicons-code-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 7.4H8c-3.4 0-6.3 2.8-6.3 6.3v22.6c0 3.4 2.8 6.3 6.3 6.3h21.8v9.5h-6.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H41c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-6.6v-9.5H56c3.4 0 6.3-2.8 6.3-6.3V13.7c0-3.5-2.9-6.3-6.3-6.3m1.8 28.9c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V13.7c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8z"></svg:path><svg:path fill="currentColor" d="M45.1 17.6c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l3.7 3.7l-3.6 3.7c-.9.9-.9 2.3 0 3.2c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7l5-5c1-1 1-2.6 0-3.6zm-26.8 7.3l3.6-3.6c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0l-5 5c-1 1-1 2.6 0 3.6l5.1 5.1c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2zm16.8-7.8c-1.2-.5-2.5.1-2.9 1.3L27.6 30c-.5 1.2.1 2.5 1.3 2.9c.3.1.5.2.8.2c.9 0 1.7-.5 2.1-1.4L36.4 20c.4-1.1-.1-2.5-1.3-2.9"></svg:path>`,
})
export class LineiconsCodeAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCodeSIcon],svg[lineicons-code-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.276 7.249a2.25 2.25 0 0 0-2.25 2.25v1a2.25 2.25 0 0 0 2.25 2.25h.545a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75h-2.045a.75.75 0 0 0 0 1.5h2.045a2.25 2.25 0 0 0 2.25-2.25v-1a2.25 2.25 0 0 0-2.25-2.25h-.545a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 .75-.75h2.045a.75.75 0 1 0 0-1.5zm-4.446.22a.75.75 0 0 1 0 1.06l-2.763 2.763a1 1 0 0 0 0 1.414l2.762 2.763a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0m9.44 0a.75.75 0 0 0 0 1.06l2.762 2.763a1 1 0 0 1 0 1.414L17.27 15.47a.75.75 0 1 0 1.06 1.06l4-4a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 0 0-1.06 0"></svg:path>`,
})
export class LineiconsCodeSIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCodepenIcon],svg[lineicons-codepen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.66 8.264l-9.18-6.12a.88.88 0 0 0-.966 0l-9.146 6.12c-.225.129-.354.451-.354.676v6.087c0 .258.129.548.354.741l9.147 6.087a.88.88 0 0 0 .966 0l9.146-6.087c.226-.129.355-.45.355-.74V8.94c.032-.257-.097-.547-.323-.676m-8.793-3.8l6.731 4.509l-3.06 1.996l-3.703-2.512c.032 0 .032-3.993.032-3.993m-1.707 0v3.993L7.424 10.97L4.43 8.973zM3.753 10.55L5.878 12l-2.125 1.45zm7.407 8.985l-6.73-4.509l2.994-1.996l3.736 2.512zm.87-5.475L8.97 12l3.06-2.061L15.09 12zm.837 5.475v-3.993l3.736-2.512l2.995 1.996zm7.407-6.087L18.15 12l2.125-1.45z"></svg:path>`,
})
export class LineiconsCodepenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCoffeeCupIcon],svg[lineicons-coffee-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54.2 25.7c-1.3 0-2.6.3-3.7.9c-.2-3.2-2.9-5.7-6.1-5.7H9.3c-3.4 0-6.1 2.7-6.1 6.1v9.5c0 9.2 5.9 17 14.1 19.9H4c-1.2 0-2.3 1-2.3 2.3S2.7 61 4 61h45.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H36.4c5.9-2.1 10.5-6.7 12.7-12.4c1.4 1.1 3.2 1.8 5.1 1.8c2.2 0 4.4-.9 5.9-2.5c1.5-1.5 2.2-3.5 2.1-5.5v-4.1c0-4.4-3.5-8-8-8M46 36.5c0 9.2-7.5 16.7-16.7 16.7h-4.9c-9.2 0-16.7-7.5-16.7-16.7V27c0-.9.7-1.6 1.6-1.6h35.1c.9 0 1.6.7 1.6 1.6zm10.9 3.8c-.7.7-1.6 1.1-2.6 1.1c-1.9 0-3.5-1.6-3.5-3.5v-4.1c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5V38c0 .8-.3 1.6-.9 2.3M13.8 16.5c1.2 0 2.3-1 2.3-2.3V5.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v8.9c0 1.3 1.1 2.3 2.3 2.3m13.1 0c1.2 0 2.3-1 2.3-2.3V5.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v8.9c0 1.3 1 2.3 2.3 2.3m13.1 0c1.2 0 2.3-1 2.3-2.3V5.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v8.9c0 1.3 1 2.3 2.3 2.3"></svg:path>`,
})
export class LineiconsCoffeeCupIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCoffeeCup2Icon],svg[lineicons-coffee-cup-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.969 4a.75.75 0 0 0-1.5 0v1.75a.75.75 0 1 0 1.5 0zM4 7.25a.75.75 0 0 0-.75.75v5.25a7.49 7.49 0 0 0 3 6H4a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5h-2.25a7.5 7.5 0 0 0 1.68-1.75H17a4.5 4.5 0 0 0 4.5-4.5v-1.25a2.25 2.25 0 0 0-2.25-2.25h-1V8a.75.75 0 0 0-.75-.75zm12.75 6a6 6 0 0 1-12 0v-4.5h12zm1.5-2.25h1a.75.75 0 0 1 .75.75V13a3 3 0 0 1-2.232 2.9a7.5 7.5 0 0 0 .482-2.65zm-7.5-7.75a.75.75 0 0 1 .75.75v1.75a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75M7.031 4a.75.75 0 0 0-1.5 0v1.75a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class LineiconsCoffeeCup2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCogIcon],svg[lineicons-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32.1 19.6c-6.8 0-12.4 5.6-12.4 12.4c0 6.9 5.6 12.4 12.4 12.4S44.5 38.9 44.5 32c0-6.8-5.6-12.4-12.4-12.4m0 20.4c-4.4 0-7.9-3.6-7.9-7.9c0-4.4 3.5-7.9 7.9-7.9S40 27.7 40 32c0 4.4-3.6 8-7.9 8"></svg:path><svg:path fill="currentColor" d="M60.7 38.1L55.1 35q.3-1.65.3-3.3c0-1.2-.1-2.3-.2-3.4l5.7-3.2c1.3-.7 1.8-2.3 1.2-3.7l-5.8-9.8c-.7-1.2-2.3-1.7-3.6-1.2l-6 3.3c-.3-.2-.6-.5-.8-.7c-1.1-.9-2.1-1.8-3.7-2.6c-.1 0-.2-.1-.2-.3V6.5c0-2.6-2.1-4.8-4.8-4.8H26.9c-2.6 0-4.8 2.2-4.8 4.8v3.9c0 .1-.1.2-.2.3c-1.5.7-2.6 1.7-3.8 2.6c-.2.2-.5.4-.7.6l-5.3-3c-2-1.1-3.7-.4-4.4.8l-5.5 9.5c-.3.8-.4 1.6-.2 2.4s.7 1.4 1.4 1.8l5.6 3c-.2 1-.2 2.1-.2 3.4c0 1.1.1 2.2.2 3.3l-5.8 3.2C1.9 39 1.4 40.6 2 42l5.8 9.8c.7 1.2 2.2 1.7 3.6 1.2l6-3.3c.3.2.5.4.8.7c1.1 1 2.2 1.9 3.8 2.6c.1 0 .2.1.2.3v4.3c0 2.6 2.1 4.8 4.8 4.8h10.2c2.6 0 4.8-2.2 4.8-4.8V53c0-.1.1-.2.2-.3c1.5-.7 2.5-1.6 3.7-2.6c.3-.2.5-.4.8-.7l5.3 3c2 1.1 3.6.4 4.4-.8l5.6-9.5c.4-.7.5-1.5.3-2.2s-.9-1.4-1.6-1.8M53.1 48l-4.8-2.7c-1.4-.8-3-.6-4.2.4c-.5.4-.9.7-1.3 1.1c-1 .9-1.7 1.5-2.7 1.9c-1.6.8-2.7 2.5-2.7 4.3v4.4q0 .3-.3.3H26.9q-.3 0-.3-.3v-4.3c0-1.8-1.1-3.5-2.7-4.3c-1-.5-1.8-1.1-2.8-2c-.4-.3-.8-.7-1.3-1c-.7-.5-1.5-.8-2.4-.8c-.6 0-1.3.2-1.9.5l-4.8 2.7l-4-6.8l4.7-2.6c1.4-.8 2.2-2.3 2-4c-.1-1-.2-2-.2-3c0-1.1.1-2.1.2-2.9c.3-1.7-.5-3.4-2-4.2L7 22.2l3.9-6.7l4.8 2.7c1.4.8 3 .6 4.2-.4c.4-.3.8-.7 1.2-1c1-.9 1.8-1.5 2.8-2c1.7-.8 2.7-2.5 2.7-4.3V6.6q0-.3.3-.3h10.2q.3 0 .3.3v3.8c0 1.8 1.1 3.5 2.7 4.3c1 .5 1.7 1.1 2.7 1.9c.4.4.8.7 1.3 1.1c1.2 1 2.9 1.1 4.2.3l4.8-2.7l4 6.8l-4.6 2.6c-1.4.8-2.2 2.5-1.9 4.2c.1.9.2 1.9.2 2.9q0 1.5-.3 3c-.3 1.7.5 3.3 2 4.1l4.5 2.5z"></svg:path>`,
})
export class LineiconsCogIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCogsIcon],svg[lineicons-cogs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 34.1c-4.8 0-8.8 4-8.8 8.8s3.9 8.8 8.8 8.8s8.8-4 8.8-8.8s-4-8.8-8.8-8.8m0 13.2c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3s4.3 1.9 4.3 4.3c0 2.3-1.9 4.3-4.3 4.3"></svg:path><svg:path fill="currentColor" d="m61.8 46.2l-3.1-1.7c.1-.6.1-1.2.1-1.7c0-.6 0-1.2-.1-1.7l3.2-1.8c1.2-.7 1.6-2.1 1.1-3.4l-3.8-6.5c-.7-1.1-2.1-1.6-3.3-1.1l-3.5 1.9l-.1-.1c-.6-.5-1.3-1.1-2.2-1.6v-2.1c0-2.1-1.7-3.9-3.9-3.9h-6.5c-2.1 0-3.9 1.7-3.9 3.9v2.1c-.9.5-1.6 1.1-2.3 1.6l-2.9-1.6c-1.8-1-3.3-.3-3.9.8l-3.6 6.1c-.4.6-.5 1.4-.3 2.1s.7 1.3 1.3 1.6l3.2 1.7c-.1.5-.1 1.1-.1 1.7s0 1.1.1 1.7L24 46.3c-1.2.7-1.6 2.1-1.1 3.4l3.8 6.5c.7 1.1 2.1 1.6 3.3 1.1l3.5-1.9s.1 0 .1.1c.7.6 1.3 1.1 2.3 1.6v2.4c0 2.1 1.7 3.9 3.9 3.9h6.5c2.1 0 3.9-1.7 3.9-3.9V57c.9-.5 1.5-1 2.2-1.6c0 0 .1 0 .1-.1l2.9 1.6c1.8 1 3.3.3 3.9-.8l3.6-6.1c.4-.6.5-1.4.3-2.1c-.3-.8-.7-1.4-1.4-1.7M54.2 41c.1.5.1 1.1.1 1.8c0 .6 0 1.2-.2 1.8c-.2 1.4.4 2.8 1.7 3.5l2.2 1.2l-1.8 3l-2.4-1.4c-1.2-.7-2.6-.5-3.6.3c-.3.2-.6.5-.8.7c-.6.5-1 .9-1.6 1.1c-1.3.6-2.2 2-2.2 3.5v2.3h-5.3v-2.2c0-1.5-.9-2.9-2.2-3.5c-.6-.3-1-.6-1.6-1.2c-.3-.2-.5-.4-.8-.7c-1-.8-2.5-.9-3.6-.3l-2.4 1.4l-1.8-3l2.3-1.3c1.2-.7 1.9-2 1.7-3.4c-.1-.6-.1-1.2-.1-1.8c0-.7 0-1.2.1-1.8c.2-1.4-.4-2.8-1.7-3.5L28 36.3l1.7-3l2.4 1.3c1.2.7 2.6.5 3.6-.3c.3-.2.5-.4.8-.7c.6-.6 1.1-.9 1.6-1.2c1.3-.6 2.2-2 2.2-3.5V27h5.3v1.8c0 1.5.9 2.9 2.2 3.5c.5.3.9.6 1.6 1.1c.3.2.6.5.9.7c1 .8 2.4.9 3.6.3l2.4-1.4l1.8 3l-2.3 1.3c-1.2.9-1.9 2.3-1.6 3.7M15.3 11.6c-2 0-3.7 1.7-3.7 3.7s1.7 3.7 3.7 3.7s3.7-1.7 3.7-3.7s-1.6-3.7-3.7-3.7"></svg:path><svg:path fill="currentColor" d="m27 24.6l2.5-4.2c.3-.6.4-1.3.3-2s-.6-1.2-1.2-1.5l-1.8-.9v-1.6l1.8-1c1.1-.6 1.6-2 1.1-3.2L27 5.7c-.6-1-2-1.5-3.1-1l-2 1.1c-.3-.2-.6-.5-.9-.7v-1C21 2.2 19.5.7 17.6.7h-4.5c-1.9 0-3.4 1.5-3.4 3.4v1c-.3.3-.6.5-.9.8L7.2 5c-1.6-.9-3-.2-3.6.8L1.1 10c-.3.6-.4 1.3-.3 2q.3 1.05 1.2 1.5l1.7 1V16L2 17c-1.1.6-1.6 2-1.1 3.2l2.6 4.5c.6 1.1 2 1.5 3.1 1l2-1.1c.3.2.6.5 1 .7v1.2c0 1.9 1.5 3.4 3.4 3.4h4.5c1.9 0 3.4-1.5 3.4-3.4v-1.3c.3-.2.6-.5.9-.7l1.6.9c1.5.9 3 .3 3.6-.8m-7.2-4.2c-.2.2-.4.3-.6.5c-.4.4-.6.5-.9.7c-1.2.6-1.9 1.7-1.9 3v.8h-2.2v-.8c0-1.3-.8-2.5-1.9-3c-.3-.1-.5-.3-1-.7c-.2-.2-.4-.3-.6-.5c-.9-.8-2.2-.9-3.3-.3l-1 .6l-.4-.8l.9-.5c1.1-.6 1.7-1.8 1.5-3c0-.4-.1-.8-.1-1.2s0-.8.1-1.1c.2-1.2-.4-2.5-1.5-3.1l-.9-.5l.5-.8l1 .6c1.1.6 2.3.5 3.3-.3c.2-.2.4-.3.5-.5c.4-.4.7-.6 1-.7c1.2-.6 1.9-1.7 1.9-3v-.5h2.2v.5c0 1.3.7 2.5 1.9 3c.3.1.5.3.9.7c.2.2.4.3.6.5c.9.8 2.2.9 3.3.3l1-.6l.5.8l-.9.5c-1.1.6-1.7 1.9-1.5 3.1c.1.3.1.7.1 1.1s0 .7-.1 1.1c-.2 1.3.4 2.5 1.5 3.1l.8.5l-.5.8l-1-.6c-1-.6-2.3-.5-3.2.3"></svg:path>`,
})
export class LineiconsCogsIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCoinIcon],svg[lineicons-coin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M35.8 29.8h-7.1c-2.1 0-3.8-1.6-3.8-3.6s1.7-3.6 3.8-3.6H39c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-4.8v-2.4c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v2.4h-1.1c-4.6 0-8.3 3.6-8.3 8.1s3.7 8.1 8.3 8.1h7.1c2.1 0 3.8 1.6 3.8 3.6s-1.7 3.6-3.8 3.6H25c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h4.8v2.4c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V46h1.6c4.6 0 8.3-3.6 8.3-8.1c.1-4.5-3.7-8.1-8.3-8.1"></svg:path><svg:path fill="currentColor" d="M32 1.8C15.3 1.8 1.8 15.3 1.8 32S15.3 62.2 32 62.2S62.2 48.7 62.2 32S48.7 1.8 32 1.8m0 56C17.8 57.8 6.2 46.2 6.2 32S17.8 6.2 32 6.2S57.8 17.8 57.8 32S46.2 57.8 32 57.8"></svg:path>`,
})
export class LineiconsCoinIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCoinbaseIcon],svg[lineicons-coinbase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.293 14.205C2.64 14.205 2 13.728 2 12.65c0-1.081.64-1.552 1.293-1.552c.322 0 .574.084.754.204l-.197.439a.85.85 0 0 0-.48-.144c-.395 0-.754.316-.754 1.046s.37 1.054.753 1.054c.18 0 .36-.056.481-.144l.197.45c-.186.126-.432.203-.754.203m2.251-.001c-.834 0-1.294-.67-1.294-1.556c0-.885.457-1.552 1.294-1.552c.833 0 1.293.664 1.293 1.552c0 .885-.46 1.556-1.293 1.556m0-2.627c-.464 0-.692.422-.692 1.064s.228 1.068.692 1.068s.691-.425.691-1.068s-.228-1.064-.691-1.064m2.096-.962a.35.35 0 0 1-.357-.345c0-.19.16-.344.356-.344a.35.35 0 0 1 .356.344c0 .19-.162.345-.356.345m-.302.54h.602v2.986h-.602zm2.962 2.986V12.15c0-.347-.208-.565-.616-.565a1.6 1.6 0 0 0-.54.088v2.473H8.55v-2.838a2.9 2.9 0 0 1 1.13-.211c.824 0 1.221.365 1.221.997v2.052H10.3m2.181.059a2.4 2.4 0 0 1-.989-.21V9.794h.595v1.44c.142-.067.37-.123.574-.123c.757 0 1.273.555 1.273 1.468c0 1.128-.574 1.626-1.453 1.626m.076-2.62a1.1 1.1 0 0 0-.47.099v1.96c.086.038.256.077.425.077c.474 0 .823-.334.823-1.096c.004-.653-.3-1.04-.778-1.04m2.995 2.62c-.844 0-1.272-.348-1.272-.937c0-.833.871-.98 1.76-1.03v-.19c0-.375-.246-.509-.623-.509c-.276 0-.615.088-.812.183l-.152-.414a2.7 2.7 0 0 1 1.027-.211c.702 0 1.13.277 1.13 1.015v1.883c-.21.115-.643.21-1.058.21m.491-1.563c-.601.032-1.2.085-1.2.615c0 .316.239.51.692.51c.19 0 .415-.032.508-.078zm1.909 1.563a2.1 2.1 0 0 1-.917-.21l.201-.464a1.6 1.6 0 0 0 .699.193c.321 0 .536-.162.536-.41c0-.271-.225-.377-.523-.49c-.394-.15-.833-.333-.833-.891c0-.492.377-.836 1.03-.836c.357 0 .65.088.858.21l-.187.422a1.3 1.3 0 0 0-.605-.175c-.311 0-.484.165-.484.382c0 .27.218.366.508.478c.409.155.861.327.861.91c-.003.53-.407.881-1.144.881m4.043-1.57l-1.954.278c.059.537.404.808.899.808c.294 0 .612-.074.813-.183l.173.453c-.229.123-.623.21-1.027.21c-.927 0-1.446-.603-1.446-1.555c0-.913.501-1.553 1.325-1.553c.764 0 1.217.51 1.217 1.314q.01.112 0 .228m-1.221-1.095c-.457 0-.757.354-.768.976l1.425-.2c-.007-.52-.266-.777-.657-.777"></svg:path>`,
})
export class LineiconsCoinbaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsColourPalette3Icon],svg[lineicons-colour-palette-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.028 7.227a1.25 1.25 0 1 1 1.768 1.767a1.25 1.25 0 0 1-1.768-1.767m-6.01 7.778a1.25 1.25 0 1 0-1.767 1.768a1.25 1.25 0 0 0 1.767-1.768M7.034 9.369a1.25 1.25 0 1 1-.647 2.415a1.25 1.25 0 0 1 .647-2.415m3.889-1.474a1.25 1.25 0 1 0-.647-2.415a1.25 1.25 0 0 0 .647 2.415"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.023 12c0-5.523 4.478-10 10-10s10 4.477 10 10c0 .735-.607 1.273-1.288 1.273h-3.698a3.004 3.004 0 0 0-2.127 5.125c.54.541.739 1.286.59 1.956a1.87 1.87 0 0 1-1.484 1.447c-.644.13-1.31.199-1.993.199c-5.522 0-10-4.477-10-10m10-8.5a8.5 8.5 0 1 0 1.696 16.831c.189-.038.283-.151.317-.301a.63.63 0 0 0-.188-.573a4.504 4.504 0 0 1 3.19-7.684h3.482A8.5 8.5 0 0 0 12.023 3.5" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsColourPalette3Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsComment1Icon],svg[lineicons-comment-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 12.096a9.5 9.5 0 1 1 9.5 9.5H3.25a.75.75 0 0 1-.53-1.28l2.053-2.054A9.47 9.47 0 0 1 2.5 12.096m9.5-8a8 8 0 0 0-5.657 13.657a.75.75 0 0 1 0 1.06l-1.282 1.283H12a8 8 0 1 0 0-16" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsComment1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsComment1ShareIcon],svg[lineicons-comment-1-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.368 8.124a.75.75 0 0 0-1.28.53v1.008a5.03 5.03 0 0 0-4.167 6.033a.75.75 0 0 0 1.466 0a3.53 3.53 0 0 1 2.7-2.703v.872a.75.75 0 0 0 1.281.53l2.605-2.605a.75.75 0 0 0 0-1.06z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 12.096a9.5 9.5 0 1 1 9.5 9.5H3.25a.75.75 0 0 1-.53-1.28l2.053-2.054A9.47 9.47 0 0 1 2.5 12.096m9.5-8a8 8 0 0 0-5.657 13.657a.75.75 0 0 1 0 1.06l-1.282 1.283H12a8 8 0 1 0 0-16" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsComment1ShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsComment1TextIcon],svg[lineicons-comment-1-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 10.597a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 12.096a9.5 9.5 0 1 1 9.5 9.5H3.25a.75.75 0 0 1-.53-1.28l2.053-2.054A9.47 9.47 0 0 1 2.5 12.096m9.5-8a8 8 0 0 0-5.657 13.657a.75.75 0 0 1 0 1.06l-1.282 1.283H12a8 8 0 1 0 0-16" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsComment1TextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCommentsIcon],svg[lineicons-comments-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 7.9H8c-3.4 0-6.3 2.8-6.3 6.3v37.7c0 1.6.9 3.1 2.4 3.8c.6.3 1.2.4 1.8.4c1 0 1.9-.3 2.7-1l8.5-7H56c3.4 0 6.3-2.8 6.3-6.3V14.2c0-3.5-2.9-6.3-6.3-6.3m1.8 33.9c0 1-.8 1.8-1.8 1.8H16.3c-.5 0-1 .2-1.4.5l-8.6 7.1v-37c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8v27.6z"></svg:path><svg:path fill="currentColor" d="M15.8 20.7c-3.4 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1s-2.8-6.1-6.1-6.1m0 7.8c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6s1.6.7 1.6 1.6c0 .8-.7 1.6-1.6 1.6M32 20.7c-3.4 0-6.1 2.7-6.1 6.1S28.6 33 32 33s6.1-2.7 6.1-6.1s-2.7-6.2-6.1-6.2m0 7.8c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6s1.6.7 1.6 1.6c0 .8-.7 1.6-1.6 1.6m16.2-7.8c-3.4 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1s-2.7-6.1-6.1-6.1m0 7.8c-.9 0-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6s1.6.7 1.6 1.6c.1.8-.7 1.6-1.6 1.6"></svg:path>`,
})
export class LineiconsCommentsIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCommentsAlt2Icon],svg[lineicons-comments-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44.4 19.5H18.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h25.9c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.4-2.3m-5.2 12.2H18.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h20.6c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3"></svg:path><svg:path fill="currentColor" d="M56 7.9H8c-3.4 0-6.3 2.8-6.3 6.3v37.7c0 1.6.9 3.1 2.4 3.8c.6.3 1.2.4 1.8.4c1 0 1.9-.3 2.7-1l8.5-7H56c3.4 0 6.3-2.8 6.3-6.3V14.2c0-3.5-2.9-6.3-6.3-6.3m1.8 33.9c0 1-.8 1.8-1.8 1.8H16.3c-.5 0-1 .2-1.4.5l-8.6 7.1v-37c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8v27.6z"></svg:path>`,
})
export class LineiconsCommentsAlt2Icon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCommentsReplyIcon],svg[lineicons-comments-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 7.8H8c-3.4 0-6.2 2.8-6.2 6.2v37.7c0 1.6.9 3.1 2.4 3.8c.6.3 1.2.4 1.8.4c1 0 1.9-.3 2.7-1l8.5-7h5.1c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-5.9c-.5 0-1 .2-1.4.5l-8.6 7.1V14c-.1-1 .6-1.7 1.6-1.7h48c.9 0 1.7.8 1.7 1.7v31.7c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V14c0-3.4-2.8-6.2-6.3-6.2"></svg:path><svg:path fill="currentColor" d="M53 43.6c-2.3-2.3-5.3-3.9-8.7-4.6v-2.2c0-1.3-.7-2.5-1.9-3c-1.2-.6-2.5-.4-3.6.4l-10.1 8.1c-.8.6-1.3 1.6-1.3 2.6s.5 2 1.3 2.6l10.1 8.1c.6.5 1.4.7 2.1.7q.75 0 1.5-.3c1.2-.6 1.9-1.7 1.9-3v-1.2c2.1.5 4.5 1.6 7.1 3.2c1.1.7 2.4.7 3.5 0c1.1-.6 1.7-1.8 1.7-3.1c0-.8-.1-1.4-.2-1.8c-.6-2.7-1.5-4.6-3.4-6.5M43.9 47c-1-.2-2 .1-2.8.8q-1.2 1.05-1.2 2.7v.1l-7.1-5.7l7.1-5.7v.7c0 1.7 1.2 3.1 2.9 3.4c2.8.5 5.2 1.7 7.1 3.5c1 1 1.5 1.8 1.9 3c-2.4-1.2-5.1-2.3-7.9-2.8M9.6 24.9c0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1s-2.7-6.1-6.1-6.1s-6.1 2.7-6.1 6.1m7.8 0c0 .9-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6s.7-1.6 1.6-1.6c.9-.1 1.6.7 1.6 1.6M32 31c3.4 0 6.1-2.7 6.1-6.1s-2.7-6.1-6.1-6.1s-6.1 2.7-6.1 6.1S28.6 31 32 31m0-7.8c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6c0-.8.7-1.6 1.6-1.6M48.2 31c3.4 0 6.1-2.7 6.1-6.1s-2.7-6.1-6.1-6.1s-6.1 2.7-6.1 6.1s2.8 6.1 6.1 6.1m0-7.8c.9 0 1.6.7 1.6 1.6s-.7 1.6-1.6 1.6s-1.6-.7-1.6-1.6c0-.8.7-1.6 1.6-1.6"></svg:path>`,
})
export class LineiconsCommentsReplyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCompassIcon],svg[lineicons-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.2 59L45.5 37c3.1-2.4 5.6-5.6 7.1-9.3c.5-1.2-.1-2.5-1.3-2.9c-1.2-.5-2.5.1-2.9 1.3c-1 2.7-2.8 5-4.9 6.8l-4.2-8.7C41 22.4 42 20 42 17.3c0-4.7-3.3-8.7-7.8-9.7V4c0-1.2-1-2.3-2.3-2.3c-1.2 0-2.3 1-2.3 2.3v3.6c-4.4 1-7.8 5-7.8 9.7c0 2.7 1.1 5.1 2.8 6.9l-4.2 8.7c-2.1-1.8-3.9-4.1-4.9-6.8c-.5-1.2-1.8-1.7-2.9-1.3c-1.2.5-1.7 1.8-1.3 2.9c1.5 3.8 4 7 7.1 9.3L7.8 59c-.5 1.1-.1 2.5 1 3c.3.2.7.2 1 .2c.8 0 1.6-.5 2-1.3l10.5-21.6c3 1.4 6.2 2.2 9.6 2.2s6.7-.8 9.6-2.2L52.1 61c.4.8 1.2 1.3 2 1.3c.3 0 .7-.1 1-.2c1.2-.6 1.6-2 1.1-3.1M32 11.8c3 0 5.5 2.4 5.5 5.4S35 22.7 32 22.7s-5.5-2.4-5.5-5.4s2.5-5.5 5.5-5.5m0 25.3c-2.7 0-5.3-.6-7.7-1.8l4.2-8.7c1.1.4 2.2.6 3.4.6s2.4-.2 3.4-.6l4.2 8.7c-2.2 1.2-4.8 1.8-7.5 1.8"></svg:path>`,
})
export class LineiconsCompassIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCompassDrafting2Icon],svg[lineicons-compass-drafting-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 2.75a.75.75 0 0 0-1.5 0v1.281A2.25 2.25 0 0 0 9.373 6.25V8.5c0 .463.14.894.38 1.252l-1.282 3.232a6.65 6.65 0 0 1-2.653-3.218a.75.75 0 0 0-1.399.542a8.15 8.15 0 0 0 3.491 4.09l-2.609 6.576a.75.75 0 1 0 1.395.553l2.576-6.496c.852.304 1.77.469 2.726.469c.957 0 1.874-.165 2.726-.469l2.577 6.496a.75.75 0 0 0 1.395-.553l-2.61-6.576a8.15 8.15 0 0 0 3.491-4.09a.75.75 0 0 0-1.398-.542a6.65 6.65 0 0 1-2.653 3.218L14.245 9.75c.24-.358.38-.788.38-1.251V6.25a2.25 2.25 0 0 0-1.876-2.219zm1.422 10.886a6.6 6.6 0 0 1-2.173.364c-.76 0-1.491-.128-2.172-.364l1.179-2.972q.296.085.618.086h.75q.323-.001.619-.086zM11.624 5.5h.75a.75.75 0 0 1 .75.75V8.5a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class LineiconsCompassDrafting2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsConnectdevelopIcon],svg[lineicons-connectdevelop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.581 11.5l-1.803-3.188c.032-.032.032-.129.032-.257c0-.258-.258-.548-.547-.548L17.2 3.964c.032-.032.032-.128.032-.193a.543.543 0 0 0-.547-.547c-.193 0-.322.096-.45.225H12.37c-.064-.097-.193-.16-.354-.16a.5.5 0 0 0-.419.224H7.733a.56.56 0 0 0-.451-.225a.543.543 0 0 0-.548.548c0 .032.033.128.033.193L4.705 7.57c-.193.097-.354.258-.354.516v.032l-1.9 3.35c-.258.032-.451.257-.451.547c0 .258.193.515.45.547l1.998 3.446c-.033.033-.033.097-.033.194c0 .257.194.515.451.547l1.868 3.285c-.032.032-.032.13-.032.194c0 .322.258.547.548.547a.57.57 0 0 0 .418-.193h3.897c.129.096.258.193.451.193c.129 0 .322-.097.419-.193h3.897a.64.64 0 0 0 .418.193a.543.543 0 0 0 .548-.547c0-.033 0-.097-.032-.13l1.868-3.284c.257-.033.45-.258.45-.548c0-.032 0-.129-.032-.193l1.997-3.446c.258-.032.451-.258.451-.548s-.161-.515-.419-.58M7.09 19.135l-1.579-2.77H7.09zm0-3.028H5.51c0-.032-.032-.032-.032-.129l1.643-1.739v1.868zm0-2.287l-1.87 1.964c-.033-.032-.097-.097-.13-.097l-1.996-3.542c.032-.032.032-.097.032-.13v-.128l1.9-3.285a.37.37 0 0 0 .258-.097l1.804 1.9zm0-3.768l-1.644-1.74c.032-.096.097-.193.097-.257v-.033l1.61-.547zm0-2.898L5.51 7.7l1.58-2.77zm11.916 1.385l.032.032l-1.288 6.087l-2.319-2.448zm-6.86 7.15l.419.45h-.87zm0-.452l-3.06-3.123l2.899-3.06l3.06 3.188zm.161.226l2.866-2.995l2.448 2.576l-.161 1.063h-4.51zM16.462 4.32c.032.064.032.064.128.064l2.094 3.672v.032c0 .096.032.225.096.257l-3.542 3.672l-3.06-3.188zm-.322-.097l-4.123 4.412l-2.093-2.19l6.087-2.19h.128zm-4.51 0a.48.48 0 0 0 .355.129a.5.5 0 0 0 .354-.129h2.738l-5.38 1.964L7.83 4.222zm-4.218.225l.032-.032c.032 0 .032-.032.096-.032l1.868 1.965l-1.996.74zm0 2.931l2.222-.805l2.19 2.319l-2.963 3.06l-1.482-1.579c.033 0 .033-2.995.033-2.995m0 3.35l1.32 1.352l-1.32 1.417zm0 3.188l1.546-1.642l3.06 3.124l-.645.644H7.411zm.225 5.926a.7.7 0 0 0-.225-.129l-.033-.032v-3.317h3.672zm4.734 0a.48.48 0 0 0-.354-.129a.5.5 0 0 0-.354.129H8.119l3.35-3.446h1.417l3.35 3.446zm4.413-.419l-.13.258c-.031 0-.096.032-.128.032l-3.285-3.35h4.187zm.45-.837l.451-2.222h.805zm1.256-2.48h-.772l.128-.773l.645.644c.064.032 0 .065 0 .13m2.416-3.93l-2.061 3.511c-.032.033-.097.033-.129.033l-.773-.806l1.288-5.958l1.643 2.867c0 .032-.032.096-.032.128c.032.162.064.194.064.226"></svg:path>`,
})
export class LineiconsConnectdevelopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsConstructionIcon],svg[lineicons-construction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M57.5 24.1c2.6 0 4.8-2.2 4.8-4.8v-3.2c0-2.1-1.4-4-3.4-4.6L27.9 2c-.5-.1-.9-.2-1.4-.2H14.2c-2.6 0-4.8 2.2-4.8 4.8v12.7c0 2.6 2.2 4.8 4.8 4.8H17v18.4H8c-3.4 0-6.2 2.8-6.2 6.2V56c0 3.4 2.8 6.2 6.2 6.2h22.5c3.4 0 6.3-2.8 6.3-6.2v-7.3c0-3.4-2.8-6.2-6.3-6.2h-9V24.1h28.6V35c0 2.1 1.5 4 3.6 4.5c2.7.7 4.4 3.4 3.9 6.2c-.4 2.1-2.2 3.9-4.3 4.3c-1.6.3-3.2-.1-4.5-1.2c-1.2-1-1.9-2.5-1.9-4.1q0-.9.3-1.8c.4-1.2-.2-2.5-1.4-2.9s-2.5.2-2.9 1.4a9.6 9.6 0 0 0-.6 3.3c0 2.9 1.3 5.7 3.5 7.6c1.8 1.5 4 2.3 6.4 2.3c.6 0 1.2-.1 1.8-.2c4-.7 7.3-4 8-8c.9-5.2-2.2-10-7.2-11.3c-.2 0-.2-.1-.2-.2V24.1zM32.3 48.7V56c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8v-7.3c0-.9.8-1.7 1.8-1.7h22.5c1 0 1.8.8 1.8 1.7m25.5-32.6v3.2q0 .3-.3.3H29.2V7l28.4 8.7c.1.1.2.2.2.4m-43.9 3.2V6.5q0-.3.3-.3h10.5v13.3H14.2c-.2.1-.3-.1-.3-.2"></svg:path>`,
})
export class LineiconsConstructionIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsConstructionHammerIcon],svg[lineicons-construction-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.9 1.8H16.6c-2.9 0-5.5 1.6-6.8 4.2L3.1 19.5c-.8 1.5-.7 3.3.2 4.8s2.5 2.3 4.2 2.3h15.6V56c0 3.4 2.8 6.2 6.2 6.2h5.3c3.4 0 6.2-2.8 6.2-6.2V26.6h13c4.2 0 7.6-3.4 7.6-7.6V9.3c0-4.2-3.4-7.5-7.5-7.5M36.4 56c0 1-.8 1.8-1.8 1.8h-5.3c-1 0-1.8-.8-1.8-1.8V26.6h8.8V56zm20.5-36.9c0 1.7-1.4 3.1-3.1 3.1H7.5c-.1 0-.3-.1-.3-.2c-.1-.1-.1-.3 0-.4L14 8c.5-1 1.6-1.7 2.7-1.7h37.2c1.7 0 3.1 1.4 3.1 3.1v9.7z"></svg:path>`,
})
export class LineiconsConstructionHammerIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsConsultingIcon],svg[lineicons-consulting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.1 23.6c0 4 3.2 7.2 7.2 7.2s7.2-3.2 7.2-7.2s-3.2-7.2-7.2-7.2c-3.9-.1-7.2 3.2-7.2 7.2m10.5 0c0 1.8-1.5 3.2-3.2 3.2s-3.2-1.5-3.2-3.2s1.5-3.2 3.2-3.2s3.2 1.4 3.2 3.2"></svg:path><svg:path fill="currentColor" d="M8.1 31.7c.5 0 .9-.2 1.2-.4l7.1-5.6c.9-.7 1-1.9.3-2.8s-1.9-1-2.8-.3l-3.6 2.9C12.9 15.3 21.9 8.2 32.4 8.2S52 15.3 54.6 25.5c.3 1.1 1.4 1.7 2.4 1.4c1.1-.3 1.7-1.4 1.4-2.4c-3-12-13.8-20.4-26.1-20.4c-12.2 0-22.8 8.2-25.9 20L4.1 21c-.7-.9-1.9-1.1-2.8-.4S.2 22.5.9 23.4l5.6 7.5c.3.4.8.7 1.3.8zm54.7 13.1l-3.9-8.5c-.2-.5-.6-.9-1.2-1.1c-.5-.2-1.1-.1-1.6.1l-8.1 4c-1 .5-1.4 1.7-.9 2.7s1.7 1.4 2.7.9l3.9-1.9a22.9 22.9 0 0 1-9.2 11.3v-9.4c0-5.1-3.8-9.3-8.5-9.3h-7.7c-4.7 0-8.5 4.2-8.5 9.4v9c-4.2-2.8-7.4-6.9-9-11.9c-.3-1-1.5-1.6-2.5-1.3S6.7 40.3 7 41.3c3.6 11 13.8 18.4 25.4 18.4c11.1 0 21-6.8 25-17.1l1.7 3.8c.3.7 1.1 1.2 1.8 1.2c.3 0 .6-.1.8-.2c1.1-.4 1.5-1.6 1.1-2.6m-39 9.3V42.9c0-3 2-5.4 4.5-5.4h1.8v6.9c0 1.1.9 2 2 2s2-.9 2-2v-6.9H36c2.5 0 4.5 2.4 4.5 5.3v11.4c-2.6 1-5.3 1.5-8.2 1.5c-3 .1-5.9-.5-8.5-1.6"></svg:path>`,
})
export class LineiconsConsultingIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsControlPanelIcon],svg[lineicons-control-panel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48.4 1.8H15.6c-3.4 0-6.3 2.8-6.3 6.3v48c0 3.4 2.8 6.3 6.3 6.3h32.7c3.4 0 6.3-2.8 6.3-6.3V8c0-3.4-2.8-6.2-6.2-6.2M50.1 56c0 1-.8 1.8-1.8 1.8H15.6c-1 0-1.8-.8-1.8-1.8V8c0-1 .8-1.8 1.8-1.8h32.7c1 0 1.8.8 1.8 1.8z"></svg:path><svg:path fill="currentColor" d="M42.2 14.4H26.6v-.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v.3h-.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h.3v.3c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V19h15.6c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3m0 15.4h-.3v-.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v.3H21.8c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3h15.6v.3c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-.3h.3c1.2 0 2.3-1 2.3-2.3c-.2-1.3-1.2-2.3-2.4-2.3m0 15.3H26.6v-.3c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v.3h-.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h.3v.3c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-.3h15.6c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsControlPanelIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCoolIcon],svg[lineicons-cool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 .8C14.8.8.8 14.8.8 32s14 31.3 31.3 31.3s31.3-14 31.3-31.3S49.2.8 32 .8m0 4.5c10.3 0 19.2 5.8 23.7 14.3H8.3C12.8 11.1 21.7 5.3 32 5.3m0 53.5c-14.8 0-26.8-12-26.8-26.8c0-2.8.4-5.4 1.2-8h12.9v5c0 1.1.9 2 2 2h6.2c1.1 0 2-.9 2-2v-5h4.8v5c0 1.1.9 2 2 2h6.2c1.1 0 2-.9 2-2v-5h12.9c.8 2.5 1.2 5.2 1.2 8c.2 14.8-11.8 26.8-26.6 26.8"></svg:path><svg:path fill="currentColor" d="M43.6 40.6c-3.2 2.9-7.3 4.6-11.6 4.6s-8.5-1.6-11.6-4.6c-.9-.8-2.3-.8-3.2.1c-.8.9-.8 2.3.1 3.2c4 3.7 9.2 5.8 14.7 5.8s10.7-2 14.7-5.8c.9-.8 1-2.3.1-3.2s-2.3-.9-3.2-.1"></svg:path>`,
})
export class LineiconsCoolIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCopilotIcon],svg[lineicons-copilot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.612 4.42a2.1 2.1 0 0 0-2.018-1.512h-.614a2.106 2.106 0 0 0-2.072 1.725l-1.053 5.736l.262-.894a2.105 2.105 0 0 1 2.018-1.516h3.57l1.499.582l1.445-.582h-.423a2.1 2.1 0 0 1-2.018-1.512zM7.605 19.576a2.105 2.105 0 0 0 2.023 1.52h1.307a2.1 2.1 0 0 0 2.103-2.05l.142-5.53l-.298 1.013a2.1 2.1 0 0 1-2.018 1.512H7.262l-1.284-.698l-1.392.698h.413c.939 0 1.761.618 2.023 1.52z"></svg:path><svg:path fill="currentColor" d="M14.505 2.903H7.214c-2.086 0-3.335 2.752-4.166 5.509c-.992 3.263-2.286 7.63 1.453 7.63H7.65a2.11 2.11 0 0 0 2.028-1.526a884 884 0 0 1 2.263-7.802c.382-1.294.702-2.401 1.191-3.095a1.63 1.63 0 0 1 1.374-.716"></svg:path><svg:path fill="currentColor" d="M14.505 2.903H7.214c-2.086 0-3.335 2.752-4.166 5.509c-.992 3.263-2.286 7.63 1.453 7.63H7.65a2.11 2.11 0 0 0 2.028-1.526a884 884 0 0 1 2.263-7.802c.382-1.294.702-2.401 1.191-3.095a1.63 1.63 0 0 1 1.374-.716M9.499 21.097h7.292c2.085 0 3.334-2.757 4.165-5.509c.988-3.263 2.281-7.629-1.458-7.629H16.35c-.942 0-1.77.622-2.027 1.53a843 843 0 0 1-2.263 7.802c-.382 1.294-.703 2.406-1.192 3.095a1.62 1.62 0 0 1-1.369.711"></svg:path><svg:path fill="currentColor" d="M9.499 21.097h7.292c2.085 0 3.334-2.757 4.165-5.509c.988-3.263 2.281-7.629-1.458-7.629H16.35c-.942 0-1.77.622-2.027 1.53a843 843 0 0 1-2.263 7.802c-.382 1.294-.703 2.406-1.192 3.095a1.62 1.62 0 0 1-1.369.711"></svg:path>`,
})
export class LineiconsCopilotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCoralIcon],svg[lineicons-coral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.378 12.943a.93.93 0 0 1-.526-.158a.968.968 0 0 1-.147-1.472a.935.935 0 0 1 1.028-.205a.94.94 0 0 1 .422.355a.964.964 0 0 1-.12 1.2a.93.93 0 0 1-.657.28m-9.094-4.408a.93.93 0 0 1 .524.157a.968.968 0 0 1 .15 1.47a.94.94 0 0 1-1.024.21a.94.94 0 0 1-.423-.351a.965.965 0 0 1 .114-1.204a.93.93 0 0 1 .66-.282m-5.7-2.507a.9.9 0 0 1 .515.163a.96.96 0 0 1 .133 1.456a.93.93 0 0 1-1.014.202A.94.94 0 0 1 3.8 7.5a.957.957 0 0 1 .425-1.402a.9.9 0 0 1 .359-.07M15.22 3.53a.93.93 0 0 1 .524.157a.968.968 0 0 1 .15 1.47a.94.94 0 0 1-1.025.21a.94.94 0 0 1-.423-.351a.965.965 0 0 1 .114-1.204a.93.93 0 0 1 .66-.282m6.61 8.467a2.5 2.5 0 0 0-.36-1.305a2.47 2.47 0 0 0-.979-.922a2.42 2.42 0 0 0-2.56.207a2.5 2.5 0 0 0-.824 1.067a2.53 2.53 0 0 0 .414 2.575a2.45 2.45 0 0 0 1.114.745v1.273a1.76 1.76 0 0 1-.501 1.23a1.7 1.7 0 0 1-1.21.509h-.91a3.98 3.98 0 0 0-2.651 1.008a5.3 5.3 0 0 0-1.238-2.328a3.96 3.96 0 0 0 2.747-1.227A4.08 4.08 0 0 0 16 12.004V6.859a2.46 2.46 0 0 0 1.33-1.07a2.524 2.524 0 0 0-.502-3.193A2.43 2.43 0 0 0 15.236 2a2.43 2.43 0 0 0-1.592.596a2.524 2.524 0 0 0-.502 3.193a2.46 2.46 0 0 0 1.33 1.07v5.122c0 .667-.261 1.306-.725 1.778a2.46 2.46 0 0 1-1.751.736h-1.444a3.24 3.24 0 0 0 .489-1.73v-.909a2.46 2.46 0 0 0 1.33-1.07c.303-.505.42-1.105.328-1.69a2.5 2.5 0 0 0-.83-1.502a2.43 2.43 0 0 0-1.592-.596a2.43 2.43 0 0 0-1.592.596a2.52 2.52 0 0 0-.502 3.193a2.46 2.46 0 0 0 1.33 1.07v.908c0 .448-.171.88-.478 1.202a1.7 1.7 0 0 1-1.165.528a2.48 2.48 0 0 1-1.758-.748a2.56 2.56 0 0 1-.726-1.79V9.342a2.46 2.46 0 0 0 1.33-1.07a2.524 2.524 0 0 0-.502-3.193a2.43 2.43 0 0 0-1.592-.596a2.43 2.43 0 0 0-1.592.596a2.524 2.524 0 0 0-.502 3.193a2.46 2.46 0 0 0 1.33 1.07v2.608a4.12 4.12 0 0 0 1.168 2.873a4 4 0 0 0 2.82 1.209h.91a3.1 3.1 0 0 1 2.292 1.071c.622.668.974 1.549.986 2.468V22h1.528v-.551c0-.675.264-1.323.735-1.8a2.5 2.5 0 0 1 1.772-.746h.91a3.2 3.2 0 0 0 2.28-.959a3.3 3.3 0 0 0 .944-2.316v-1.273a2.46 2.46 0 0 0 1.206-.891c.302-.417.414-.95.422-1.468"></svg:path>`,
})
export class LineiconsCoralIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCpanelIcon],svg[lineicons-cpanel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.527 11.081a1.64 1.64 0 0 0-1.58-1.257H5.82c-.226 0-.42.13-.452.355l-1.095 3.996h.773c.226 0 .355-.128.451-.354l.806-2.998h.645c.258 0 .483.194.548.452c.096.354-.194.741-.548.741h-.323c-.225 0-.419.129-.45.354l-.194.774h.999c1.128-.032 1.773-1.16 1.547-2.063m-4.867.87h.58c.226 0 .355-.128.452-.354l.193-.774H3.628c-.741 0-1.354.452-1.58 1.258c-.257 1.03.548 2.03 1.548 2.03h.354l.226-.806c.032-.129-.032-.258-.194-.258h-.354c-.741.065-.741-1.096.032-1.096m7.736-1.095h-2.45l-.097.419c-.032.322.13.58.452.58h1.805c.129 0 .032.129.032.129l-.258.999c0 .032-.032.129-.193.129H9.59c-.13 0-.13-.258 0-.258h.677c.225 0 .354-.129.45-.354l.13-.42h-1.45c-1.225 0-1.354 1.999-.033 1.999h1.805a.764.764 0 0 0 .742-.548l.45-1.644c.065-.483-.386-1.031-.966-1.031M21.742 9.76h-.58c-.129 0-.258.096-.322.258l-1.128 4.125c.644 0 1.257-.451 1.418-1.096l.87-3.03c0-.096-.097-.257-.258-.257m-7.349 1.096h-1.482l-.806 3.03c-.032.128.032.257.193.257h.58c.13 0 .258-.096.323-.258l.548-1.998h.644c.42 0 .645.355.548.741l-.354 1.257c-.032.13.032.258.193.258h.58c.13 0 .258-.096.323-.258l.257-1.031c.29-1-.515-1.998-1.547-1.998m3.03 2.353c-.129 0-.193-.097-.129-.226l.258-.967c.032-.129.129-.193.258-.193h1.031c.097 0 .13.032.13.128l-.033.097c-.032.033-.032.097-.129.097h-.677c-.225 0-.419.129-.451.354l-.129.42h1.644a.764.764 0 0 0 .741-.549l.097-.354c.129-.58-.258-1.128-.87-1.128h-1.45c-.549 0-1.032.354-1.226.967l-.354 1.257c-.13.548.258 1.128.87 1.128h2.063c.226 0 .355-.129.451-.355l.194-.644c-.033-.032-2.289-.032-2.289-.032"></svg:path>`,
})
export class LineiconsCpanelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCrane4Icon],svg[lineicons-crane-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5.5h-8.25A2.25 2.25 0 0 0 8.5 3.25h-1A2.25 2.25 0 0 0 5.25 5.5h-.5a2.25 2.25 0 0 0 0 4.5h.5v8.75c0 .414.336.75.75.75h4a.75.75 0 0 0 .75-.75V10h7v2.874c0 .509.226.918.473 1.215c.245.294.548.524.8.694s.415.456.415.78a.938.938 0 1 1-1.876 0a.75.75 0 0 0-1.5 0a2.438 2.438 0 1 0 3.8-2.023a2.4 2.4 0 0 1-.486-.41c-.11-.132-.126-.212-.126-.256V9.986A2.25 2.25 0 0 0 19 5.5m-12.25 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 .75.75zm11.784 3H4.75a.75.75 0 1 1 0-1.5H19a.75.75 0 0 1 0 1.5zM6.75 18v-8h2.5v8z"></svg:path>`,
})
export class LineiconsCrane4Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCreativeCommonsIcon],svg[lineicons-creative-commons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 4.26a7.74 7.74 0 1 0 0 15.48a7.74 7.74 0 0 0 0-15.48M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.756 14.827a2.82 2.82 0 0 0 2.745-2.19h-1.347a1.54 1.54 0 0 1-1.398.905A1.54 1.54 0 0 1 7.214 12a1.54 1.54 0 0 1 2.94-.648h1.347A2.822 2.822 0 0 0 5.929 12a2.825 2.825 0 0 0 2.827 2.827m6.118 0a2.82 2.82 0 0 0 2.745-2.19h-1.347a1.54 1.54 0 0 1-1.398.905A1.54 1.54 0 0 1 13.332 12a1.54 1.54 0 0 1 2.94-.648h1.347a2.822 2.822 0 0 0-5.571.648a2.825 2.825 0 0 0 2.826 2.827"></svg:path>`,
})
export class LineiconsCreativeCommonsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCreditCardMultipleIcon],svg[lineicons-credit-card-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.91 6.279a2.25 2.25 0 0 0-1.59 2.755l2.432 9.068v.398a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25V9.824a2.25 2.25 0 0 0-2.206-2.25l-.823-3.069a2.25 2.25 0 0 0-2.756-1.59zm16.842 4.538h-14.5v-.993a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 .75.75zm-16 1.502l-.984-3.673a.75.75 0 0 1 .53-.918l12.558-3.365a.75.75 0 0 1 .918.53l.718 2.681H7.002a2.25 2.25 0 0 0-2.25 2.25zm1.5 1.295h14.5V18.5a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class LineiconsCreditCardMultipleIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCreditCardsIcon],svg[lineicons-credit-cards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M59.2 18.1v-5.7c0-1.8-.8-3.4-2.2-4.5s-3.2-1.5-4.9-1.1L8.6 17.2H8c-3.4 0-6.2 2.8-6.2 6.2V51c0 3.4 2.8 6.2 6.2 6.2h48c3.4 0 6.2-2.8 6.2-6.2V23.5c0-2.3-1.2-4.3-3-5.4m-6.1-6.9c.5-.1.9.1 1.1.3s.5.5.5 1v4.8H27.9zM8 21.7h48c1 0 1.8.8 1.8 1.8v3.9H6.2v-3.9c0-1 .8-1.8 1.8-1.8m49.8 10.2v4.5H6.2v-4.5zm-1.8 21H8c-1 0-1.8-.8-1.8-1.8V40.9h51.5v10.2c.1 1-.7 1.8-1.7 1.8"></svg:path>`,
})
export class LineiconsCreditCardsIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCropIcon],svg[lineicons-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M57.7 50.4h-5.1V12.2l4.4-5c.8-.9.7-2.4-.2-3.2s-2.4-.7-3.2.2l-4.3 4.9H15.9V4c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v5.1H6.3C5 9.1 4 10.1 4 11.4s1 2.2 2.2 2.2h5.1v36.8h-5c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h5.1V60c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-5.1H48V60c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-5.1h5.1c1.2 0 2.2-1 2.2-2.2s-.7-2.3-2-2.3M15.9 13.6h29.4L15.9 46.7zm2.8 36.8l29.4-33.1v33.1z"></svg:path>`,
})
export class LineiconsCropIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCrop2Icon],svg[lineicons-crop-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.023 2.75a.75.75 0 0 0-1.5 0V4.5h-1.75a.75.75 0 1 0 0 1.5h1.75v11.25a2.25 2.25 0 0 0 2.25 2.25h11.25v1.75a.75.75 0 0 0 1.5 0V19.5h1.75a.75.75 0 1 0 0-1.5h-1.75V5.56l1.78-1.78a.75.75 0 1 0-1.06-1.06l-1.78 1.78H6.023zM16.963 6L6.023 16.94V6zM7.084 18l10.94-10.94V18z"></svg:path>`,
})
export class LineiconsCrop2Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCrossCircleIcon],svg[lineicons-cross-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 1.8C15.3 1.8 1.8 15.3 1.8 32S15.3 62.3 32 62.3S62.3 48.7 62.3 32S48.7 1.8 32 1.8m0 56C17.8 57.8 6.3 46.2 6.3 32S17.8 6.3 32 6.3s25.8 11.6 25.8 25.8c0 14.1-11.6 25.7-25.8 25.7"></svg:path><svg:path fill="currentColor" d="M41.2 22.7c-.9-.9-2.3-.9-3.2 0l-6 6.1l-6.1-6.1c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l6.1 6.1l-6.1 6.1c-.9.9-.9 2.3 0 3.2c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7l6.1-6.1l6.1 6.1c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2L35.2 32l6.1-6.1c.8-.9.8-2.3-.1-3.2"></svg:path>`,
})
export class LineiconsCrossCircleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCrownIcon],svg[lineicons-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M59.4 9.1c-2-1.2-4.4-1.2-6.4 0l-6.8 4.1c-.6.4-1.3.3-1.9-.1l-8.4-6.7c-2.2-1.8-5.5-1.8-7.7 0l-8.5 6.9c-.5.4-1.3.5-1.9.1l-6.8-4c-2-1.1-4.4-1.1-6.4.2c-2 1.2-3.1 3.4-2.9 5.7l3.2 36.6c.4 4 3.7 7.1 7.7 7.1h38.6c4 0 7.4-3 7.7-7.1l3.3-37c.2-2.3-.9-4.5-2.8-5.8m-8.2 45.4H12.7c-1.7 0-3.1-1.3-3.2-3l-1-10.2h46.8l-.9 10.2c-.1 1.7-1.5 3-3.2 3m6.5-40l-2 22.3H8.2L6.3 14.9c-.1-.9.5-1.4.7-1.5s.5-.3.9-.3c.3 0 .5.1.8.2l6.8 4c2.2 1.3 5 1.1 7-.5L31 9.9c.6-.5 1.5-.5 2.1 0l8.4 6.7c2 1.6 4.8 1.8 7 .5l6.8-4.1c.8-.5 1.5-.1 1.7 0s.8.6.7 1.5"></svg:path><svg:path fill="currentColor" d="M23.9 47.1c0-.1-.1-.3-.2-.4l-.3-.3c-.8-.8-2.4-.8-3.2 0l-.3.3c-.1.1-.2.3-.2.4c-.1.1-.1.3-.1.4v.8c0 .1.1.3.1.4s.1.3.2.4l.3.3c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7l.3-.3c.1-.1.1-.3.2-.4c0-.1.1-.3.1-.4v-.8c0-.2 0-.3-.1-.4m9.4-1c-.1-.1-.3-.2-.4-.2c-.1-.1-.3-.1-.4-.1c-.7-.2-1.5.1-2 .6c-.4.4-.7 1-.7 1.6s.2 1.2.7 1.6c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.4-.4.7-1 .7-1.6s-.2-1.2-.7-1.6c-.2-.2-.3-.3-.4-.3m8.4-.4c-.1 0-.3.1-.4.1s-.3.1-.4.2l-.3.3c-.4.4-.7 1-.7 1.6s.2 1.2.7 1.6c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.4-.4.7-1 .7-1.6s-.3-1.2-.7-1.6c-.6-.5-1.4-.7-2.1-.6"></svg:path>`,
})
export class LineiconsCrownIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCrown3Icon],svg[lineicons-crown-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .565.256l4.147 4.741l4.063-3.326a.75.75 0 0 1 1.22.668L20.65 17.513a2.25 2.25 0 0 1-2.235 1.987H5.584a2.25 2.25 0 0 1-2.235-1.987L2.005 6.089a.75.75 0 0 1 1.22-.668l4.063 3.326l4.147-4.74A.75.75 0 0 1 12 3.75m0 1.89l-4.06 4.64a.75.75 0 0 1-1.04.087l-3.188-2.61l.75 6.374h15.076l.75-6.374l-3.188 2.61a.75.75 0 0 1-1.04-.087zm7.362 9.992H4.638l.201 1.706a.75.75 0 0 0 .745.662h12.832c.38 0 .7-.285.745-.662z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsCrown3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCss3Icon],svg[lineicons-css3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.232 2.24c0 .134.339 4.05.757 8.705c.41 4.647.765 8.59.774 8.759l.027.302l3.605.997L11.99 22l.72-.196l3.588-.988c2.456-.676 2.875-.819 2.91-.97c.045-.214 1.558-17.365 1.558-17.65V2H3.232zm14.304 3.783c-.036.214-.267 2.742-.516 5.634c-.258 2.884-.472 5.27-.49 5.287c-.036.045-4.406 1.255-4.53 1.255c-.09 0-2.475-.65-4.104-1.112l-.454-.134l-.106-1.175a76 76 0 0 0-.16-1.744l-.054-.552h1.113c1.255 0 1.22-.018 1.228.757c0 .195.027.498.053.676l.054.32l1.22.32l1.21.321l1.201-.32c.659-.178 1.21-.33 1.21-.33c.01-.008.063-.534.117-1.166c.053-.64.115-1.263.142-1.406l.044-.24H7.078l-.045-.205c-.027-.107-.08-.623-.116-1.157l-.062-.952h8.02l.053-.606c.036-.329.089-.836.116-1.121c.035-.365.026-.507-.045-.463c-.053.027-1.949.027-4.228-.009l-4.138-.053l-.054-.632c-.035-.347-.08-.846-.107-1.104L6.42 5.65h11.16z"></svg:path>`,
})
export class LineiconsCss3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCupIcon],svg[lineicons-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.6 9.4H47V4.8c0-1.7-1.4-3.1-3.1-3.1H20.1c-1.7 0-3.1 1.4-3.1 3.1v4.6H7.4c-1.8 0-3.1 1.3-3.1 3.1v.8c0 7.4 5.5 13.5 12.7 14.6v.3c0 7.4 5.5 13.6 12.7 14.7v14.9h-7.9c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h20.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-7.9v-15c3.2-.5 6.2-1.9 8.5-4.3c2.8-2.8 4.3-6.5 4.2-10.4v-.3c7.2-1.1 12.7-7.2 12.7-14.6v-.8c0-1.7-1.3-3-3.1-3M8.8 13.9H17v9.4c-4.5-.9-7.9-4.8-8.2-9.4m33.7 14.3c0 2.7-1 5.3-2.9 7.2c-2 2-4.7 3.1-7.6 3.1c-5.8 0-10.5-4.6-10.5-10.3V6.3h21zm4.5-4.9v-9.4h8.2c-.3 4.6-3.7 8.5-8.2 9.4"></svg:path>`,
})
export class LineiconsCupIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCustomerIcon],svg[lineicons-customer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60.21 47v-.06A7.49 7.49 0 0 0 51 41.7c-3.41 1-8.09 2.4-11.62 3.42a4.68 4.68 0 0 0-.09-3.12c-.9-2.25-3.41-3.26-5.51-3.26H24a3.94 3.94 0 0 1-2.58-1.2a5.65 5.65 0 0 0-3.84-1.5H9.67a6.34 6.34 0 0 0-6.21 6.46v12.59a6.46 6.46 0 0 0 6.32 6.58h9.51a6.13 6.13 0 0 0 3.42-1.06h.1A18.75 18.75 0 0 0 31.87 63a18.5 18.5 0 0 0 5.56-.84l17.66-5.39h.13A7.74 7.74 0 0 0 60.21 47M9.78 57.67a2.46 2.46 0 0 1-2.32-2.58V42.54a2.34 2.34 0 0 1 2.21-2.46h7.9a1.63 1.63 0 0 1 1.14.45a11 11 0 0 0 .94.75v16.35a2 2 0 0 1-.36 0ZM53.86 53l-17.62 5.34a14.3 14.3 0 0 1-4.37.66a14.8 14.8 0 0 1-7.16-1.85l-1.06-.57V42.76h10.13a2.08 2.08 0 0 1 1.8.75c.14.36-.12 1.55-2.15 3.48l-1.15 1.11l.79 1.37c.81 1.4 1.6 1.17 4.94.22c1.58-.45 3.69-1.06 5.79-1.68c4.18-1.22 8.36-2.47 8.36-2.47a3.53 3.53 0 0 1 4.21 2.53A3.76 3.76 0 0 1 53.86 53m-3.31-37.39a7.31 7.31 0 1 0-7.31-7.3a7.32 7.32 0 0 0 7.31 7.3m0-10.61a3.31 3.31 0 1 1-3.31 3.31A3.31 3.31 0 0 1 50.55 5m-2.37 32.38h3.3a7.26 7.26 0 0 0 7.25-7.25v-5.69a7.26 7.26 0 0 0-7.25-7.25h-3a7.26 7.26 0 0 0-7.25 7.25v5.66a7.22 7.22 0 0 0 6.95 7.28m-2.94-12.94a3.25 3.25 0 0 1 3.25-3.25h3a3.26 3.26 0 0 1 3.25 3.25v5.69a3.26 3.26 0 0 1-3.25 3.25h-3.3a3.2 3.2 0 0 1-2.94-3.32Z"></svg:path>`,
})
export class LineiconsCustomerIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsCutIcon],svg[lineicons-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46.6 42.1c-1.3 0-2.5.3-3.7.7l-8.1-11.9L52.2 5.3c.7-1 .4-2.4-.6-3.1s-2.4-.4-3.1.6L32 26.9L15.5 2.7c-.7-1-2.1-1.3-3.1-.6s-1.3 2.1-.6 3.1l17.5 25.6l-8.1 11.9c-1.1-.5-2.4-.7-3.7-.7c-5.6 0-10.1 4.5-10.1 10.1s4.5 10.1 10.1 10.1s10.1-4.5 10.1-10.1c0-2.6-1-5-2.7-6.8L32 34.9l7.2 10.5c-1.7 1.8-2.7 4.2-2.7 6.8c0 5.6 4.5 10.1 10.1 10.1s10.1-4.5 10.1-10.1s-4.6-10.1-10.1-10.1M17.4 57.8c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6s5.6 2.5 5.6 5.6s-2.5 5.6-5.6 5.6m29.2 0c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6s5.6 2.5 5.6 5.6s-2.6 5.6-5.6 5.6"></svg:path>`,
})
export class LineiconsCutIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDashboardIcon],svg[lineicons-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 14.5c-16.7 0-30.3 14.7-30.3 32.8c0 1.2 1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3c0-18.1-13.6-32.8-30.3-32.8M31 45l1-3.1l1 3.1zm6.7 0L35 36.6c-.4-1.3-1.6-2.2-3-2.2s-2.6.9-3 2.2L26.3 45h-20C7.4 30.5 18.5 19 32 19s24.6 11.5 25.7 26z"></svg:path><svg:path fill="currentColor" d="M32 24.9c-1.2 0-2.3 1-2.3 2.3v2.5c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3v-2.5c0-1.3-1.1-2.3-2.3-2.3m14.4 7.4l-1.6 1.6c-.9.9-.9 2.3 0 3.2c.4.4 1 .6 1.6.6s1.2-.2 1.6-.7l1.6-1.6c.9-.9.9-2.3 0-3.2s-2.3-.8-3.2.1m-28.7 0c-.8-.9-2.3-1-3.2-.2s-1 2.3-.2 3.2l1.5 1.6c.4.5 1.1.7 1.7.7c.5 0 1.1-.2 1.5-.6c.9-.8 1-2.3.2-3.2z"></svg:path>`,
})
export class LineiconsDashboardIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDashboardSquare1Icon],svg[lineicons-dashboard-square-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.604 3.25a2.25 2.25 0 0 0-2.25 2.25V9a2.25 2.25 0 0 0 2.25 2.25h3.5A2.25 2.25 0 0 0 11.354 9V5.5a2.25 2.25 0 0 0-2.25-2.25zm-.75 2.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75V9a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75zm.75 7.25A2.25 2.25 0 0 0 3.354 15v3.5a2.25 2.25 0 0 0 2.25 2.25h3.5a2.25 2.25 0 0 0 2.25-2.25V15a2.25 2.25 0 0 0-2.25-2.25zM4.854 15a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75zm8-9.5a2.25 2.25 0 0 1 2.25-2.25h3.5a2.25 2.25 0 0 1 2.25 2.25V9a2.25 2.25 0 0 1-2.25 2.25h-3.5A2.25 2.25 0 0 1 12.854 9zm2.25-.75a.75.75 0 0 0-.75.75V9c0 .414.335.75.75.75h3.5a.75.75 0 0 0 .75-.75V5.5a.75.75 0 0 0-.75-.75zm0 8a2.25 2.25 0 0 0-2.25 2.25v3.5a2.25 2.25 0 0 0 2.25 2.25h3.5a2.25 2.25 0 0 0 2.25-2.25V15a2.25 2.25 0 0 0-2.25-2.25zm-.75 2.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsDashboardSquare1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDatabaseIcon],svg[lineicons-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 1.8c-11.7 0-20.9 5.5-20.9 12.4v35.6c0 6.9 9.4 12.4 20.8 12.4c11.5 0 20.9-5.6 20.9-12.4V14.2c.1-7-9.1-12.4-20.8-12.4m0 4.5c9.6 0 16.4 4.2 16.4 7.9c0 3.8-6.7 7.9-16.4 7.9s-16.4-4.2-16.4-7.9c0-3.8 6.8-7.9 16.4-7.9m0 51.5c-9.4 0-16.3-4.2-16.3-7.9V46c3.8 2.8 9.6 4.5 16.3 4.5s12.6-1.8 16.4-4.5v3.9c0 3.7-7 7.9-16.4 7.9M32 46c-9.6 0-16.3-4-16.3-7.6v-4.6c3.9 2.8 10 4.5 16.3 4.5c6.6 0 12.5-1.7 16.4-4.5v4.6C48.4 42 41.6 46 32 46m13.8-15.9c-3.1 2.3-8.2 3.7-13.8 3.7c-5.5 0-10.7-1.4-13.8-3.7c-1.2-.8-2.5-2.2-2.5-3.9V22c3.8 2.8 9.7 4.6 16.4 4.6s12.6-1.8 16.4-4.6v4.2c-.1 1.6-1.5 3-2.7 3.9"></svg:path>`,
})
export class LineiconsDatabaseIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDatabase2Icon],svg[lineicons-database-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.286 3.713c-.433.38-.786.897-.786 1.537v13.5c0 .64.353 1.158.786 1.537c.435.381 1.021.69 1.68.934c1.325.49 3.105.779 5.034.779c1.93 0 3.709-.288 5.034-.779c.659-.244 1.245-.553 1.68-.934c.433-.38.786-.897.786-1.537V5.25c0-.64-.353-1.158-.786-1.537c-.435-.381-1.021-.69-1.68-.934C15.709 2.289 13.929 2 12 2c-1.93 0-3.709.288-5.033.779c-.66.244-1.246.553-1.68.934m.989 1.128c.248-.217.65-.447 1.213-.655C8.606 3.77 10.2 3.5 12 3.5s3.394.271 4.512.686c.563.208.965.438 1.213.655c.25.219.275.36.275.409c0 .05-.025.19-.274.409c-.249.217-.651.447-1.213.655C15.394 6.73 13.798 7 12 7s-3.394-.271-4.512-.686c-.563-.208-.965-.438-1.213-.655C6.025 5.44 6 5.299 6 5.25c0-.05.025-.19.275-.409M18 9.75c0 .05-.025.19-.274.409c-.249.217-.651.447-1.213.656c-1.119.414-2.714.685-4.513.685s-3.394-.271-4.512-.685c-.563-.209-.965-.439-1.213-.656C6.025 9.94 6 9.799 6 9.75V7.282c.294.165.62.31.967.44C8.29 8.211 10.07 8.5 12 8.5s3.709-.288 5.034-.779c.346-.128.672-.274.966-.439zM6 11.782c.294.165.62.31.967.44C8.29 12.711 10.07 13 12 13s3.709-.288 5.034-.779c.346-.128.672-.274.966-.439v2.468c0 .05-.025.19-.274.409c-.249.217-.651.447-1.213.656c-1.119.414-2.714.685-4.513.685s-3.394-.271-4.512-.685c-.563-.209-.965-.439-1.213-.656c-.25-.219-.275-.36-.275-.409zm0 6.968v-2.468c.294.165.62.31.967.44c1.324.49 3.104.778 5.033.778s3.709-.288 5.034-.779c.346-.128.672-.274.966-.439v2.468c0 .05-.025.19-.274.409c-.249.217-.651.447-1.213.656c-1.119.414-2.714.685-4.513.685s-3.394-.271-4.512-.686c-.563-.208-.965-.438-1.213-.655c-.25-.219-.275-.36-.275-.409"></svg:path>`,
})
export class LineiconsDatabase2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDeliveryIcon],svg[lineicons-delivery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M58.17 11H26.92a4.83 4.83 0 0 0-4.83 4.83v.44H8.59a2.65 2.65 0 0 0-2.36 1.47l-4.95 10.1A2.65 2.65 0 0 0 1 29v15.65a2 2 0 0 0 2 2h2.71a7.64 7.64 0 0 0 15.06 0h21a7.64 7.64 0 0 0 15.06 0h3.47A2.7 2.7 0 0 0 63 44V15.85A4.83 4.83 0 0 0 58.17 11M9.45 20.29h12.64v6.55H6.23ZM13.24 49a3.66 3.66 0 1 1 3.65-3.65A3.66 3.66 0 0 1 13.24 49m0-11.31a7.65 7.65 0 0 0-7.16 5H5V30.84h17.09v11.81H20.4a7.65 7.65 0 0 0-7.16-4.98ZM49.29 49a3.66 3.66 0 1 1 3.65-3.65A3.66 3.66 0 0 1 49.29 49M59 42.65h-2.55a7.64 7.64 0 0 0-14.33 0h-16v-26.8a.84.84 0 0 1 .83-.83h31.22a.84.84 0 0 1 .83.83Z"></svg:path>`,
})
export class LineiconsDeliveryIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDenoIcon],svg[lineicons-deno-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10M7.063 5.382c.256.069.41.33.347.587l-.003.011l-.664 2.461l-.003.012a.488.488 0 0 1-.943-.254l.003-.012l.664-2.461l.004-.012a.49.49 0 0 1 .595-.332m8.532.465c.257.07.41.33.348.587l-.003.012l-.522 1.933l-.043-.032a5.5 5.5 0 0 0-.825-.502l.447-1.654L15 6.18a.49.49 0 0 1 .595-.332m-4.343-2.775a.5.5 0 0 1-.002.22l-.003.012l-.665 2.461l-.003.012a.488.488 0 0 1-.942-.254l.003-.012l.619-2.295l.065-.013a9 9 0 0 1 .928-.13m6.11 1.7l.058.043q.402.3.77.643l-.015.052l-.003.012a.488.488 0 0 1-.943-.254l.003-.012zM13.5 3.152l.07.012q.447.075.885.197l-.248.919l-.003.011a.488.488 0 0 1-.942-.254l.003-.012zm-1.668 13.763a.5.5 0 0 1 .306.246l.014.072l.023.114l.016.08l-.002.019l-.01.055l-.003.012l-.664 2.461l-.003.012a.488.488 0 0 1-.943-.254l.003-.012l.664-2.461l.003-.012a.49.49 0 0 1 .596-.332M7.203 14.38q.372.326.846.576l-.602 2.232l-.003.012a.488.488 0 0 1-.943-.255l.003-.012l.664-2.46l.005-.017zM5.62 11.55c.256.07.41.33.347.587l-.003.012l-.664 2.46l-.003.012a.488.488 0 0 1-.943-.254l.003-.012l.664-2.46l.003-.012a.49.49 0 0 1 .596-.333m14.89-.559c.256.07.41.33.347.587l-.003.012l-.664 2.46l-.004.013a.488.488 0 0 1-.942-.255l.003-.011l.664-2.462l.003-.011a.49.49 0 0 1 .596-.333M4.174 7.705a.488.488 0 0 1 .463.604l-.004.012l-.664 2.46l-.003.012a.488.488 0 0 1-.835.184a8.9 8.9 0 0 1 1.043-3.272m14.654.017c.256.07.41.33.347.587l-.003.012l-.664 2.46l-.003.012a.488.488 0 0 1-.943-.254l.003-.012l.664-2.46l.003-.013a.49.49 0 0 1 .596-.332M9.11 18.106c.257.069.41.33.347.587l-.003.011l-.475 1.762l-.066-.025a9 9 0 0 1-.84-.364l.438-1.627l.004-.012a.49.49 0 0 1 .595-.332m2.554-10.424c1.399 0 2.599.387 3.543 1.125c1.174.918 1.617 2.182 1.997 3.553l1.522 5.679a9.05 9.05 0 0 1-5.482 2.888a61 61 0 0 0-.454-2.569l-.024-.13l-.095-.495v-.003c-.17-.894-.35-1.851-.426-2.06c-.09-.248-.168-.433-.443-.427c-3.226.069-5.308-1.304-5.308-3.454c0-2.277 2.262-4.107 5.17-4.107"></svg:path><svg:path fill="currentColor" d="M12.29 9.326a.625.625 0 1 1 0 1.25a.625.625 0 0 1 0-1.25"></svg:path>`,
})
export class LineiconsDenoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDevIcon],svg[lineicons-dev-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.848 10.084c-.174-.116-.319-.174-.493-.174h-.697v4.152h.697a.7.7 0 0 0 .493-.175c.175-.116.204-.29.204-.522v-2.816a.58.58 0 0 0-.204-.465M19.2 3.03H4.8c-.987 0-1.8.813-1.8 1.8v14.43c0 .9.813 1.712 1.8 1.712h14.458c.987 0 1.742-.784 1.742-1.742V4.83c-.029-.987-.813-1.8-1.8-1.8M9.213 13.394c0 .784-.494 1.916-1.916 1.916H5.439V8.662h1.916c1.422 0 1.916 1.132 1.916 1.916zM13.19 9.88h-2.119v1.539h1.306v1.19h-1.306v1.539h2.12v1.19h-2.498a.88.88 0 0 1-.87-.784V9.503c0-.435.319-.812.784-.87h2.583zm4.181 4.558c-.523 1.22-1.48.987-1.916 0l-1.539-5.806h1.336l1.19 4.558l1.19-4.53h1.307z"></svg:path>`,
})
export class LineiconsDevIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDialogflowIcon],svg[lineicons-dialogflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12.053L3.935 8.02v6.815c-.001.154.07.3.191.394L8.804 18a.32.32 0 0 1 .172.293v3.539a.172.172 0 0 0 .262.141l10.596-6.745a.5.5 0 0 0 .232-.424V8.02z"></svg:path><svg:path fill="currentColor" d="m12 10.036l8.066-4.033l-7.945-3.972a.25.25 0 0 0-.242 0L3.935 6.003z"></svg:path>`,
})
export class LineiconsDialogflowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDiamondAltIcon],svg[lineicons-diamond-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61.9 24.2L53.2 4.3c-.4-1-1.2-1.7-2.1-2.1c-.2-.1-.3-.2-.5-.3c-.3-.1-.6-.1-1-.1H14.7c-1.6 0-3.1 1-3.8 2.5L2.1 24.2c-.6 1.4-.4 3 .5 4.2l26.1 32.2c.7.9 1.7 1.5 2.8 1.6c.2 0 .3.1.5.1c1.3 0 2.5-.6 3.3-1.6l26.1-32.1l.1-.1c.8-1.3 1-2.9.4-4.3m-4.7.5H45.3l5.1-15.4zm-15.4-3.8L35 6.2h11.7zM32 10.5l6.6 14.2H25.4zM22 21.2l-5.6-15H29zm17.2 8L32 52.4l-7.1-23.2zM27 51.4L9 29.2h11.2zm16.9-22.2H55L37 51.3zM13.1 10.3l5.5 14.3H6.8z"></svg:path>`,
})
export class LineiconsDiamondAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDiamondShapeIcon],svg[lineicons-diamond-shape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 62.2c-1.3 0-2.5-.6-3.3-1.7L5.1 28.4c-.9-1.2-1.1-2.8-.5-4.2l8.7-19.9c.7-1.5 2.2-2.5 3.8-2.5h29.6c1.6 0 3.1 1 3.8 2.5l8.7 19.9c.6 1.4.4 3-.5 4.2L35.3 60.5c-.8 1.1-2 1.7-3.3 1.7M8.8 25.9L32 57.5l23.2-31.6l-8.6-19.7H17.4z"></svg:path>`,
})
export class LineiconsDiamondShapeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDiamonds1Icon],svg[lineicons-diamonds-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.165 4.46A2.25 2.25 0 0 1 7.16 3.25h9.681a2.25 2.25 0 0 1 1.995 1.21l2.111 4.045a2.25 2.25 0 0 1-.283 2.502l-8.093 9.48a.75.75 0 0 1-1.14 0l-8.093-9.48a2.25 2.25 0 0 1-.284-2.502zm1.78.321l2.088 3.477L11.14 4.75H7.16a.8.8 0 0 0-.215.031m3.414 4.182h3.283L12 6.23zm5.17 1.5l-1.937 6.518l5.564-6.518zm-5.12 6.518l-1.936-6.518H4.845zm-.372-6.518l1.964 6.607l1.963-6.607zm7.97-4.35l-1.712 2.85h3.199zM16.84 4.75h-3.98l2.107 3.508l2.089-3.477a.8.8 0 0 0-.216-.031M7.706 8.963l-1.712-2.85l-1.487 2.85z"></svg:path>`,
})
export class LineiconsDiamonds1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDiamonds2Icon],svg[lineicons-diamonds-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.165 4.46A2.25 2.25 0 0 1 7.16 3.25h9.681a2.25 2.25 0 0 1 1.995 1.21l2.111 4.045a2.25 2.25 0 0 1-.283 2.502l-8.093 9.48a.75.75 0 0 1-1.14 0l-8.093-9.48a2.25 2.25 0 0 1-.284-2.502zm1.995.29a.75.75 0 0 0-.665.403L4.384 9.2a.75.75 0 0 0 .094.834l7.523 8.812l7.522-8.812a.75.75 0 0 0 .094-.834l-2.11-4.046a.75.75 0 0 0-.666-.403z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsDiamonds2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDigitaloceanIcon],svg[lineicons-digitalocean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.002 18.145V22c6.442 0 11.466-6.327 9.356-13.188c-.915-2.993-3.271-5.375-6.219-6.316C8.384.353 2.154 5.456 2.154 12h3.808c0-4.105 4.008-7.28 8.262-5.716a5.76 5.76 0 0 1 3.405 3.448c1.55 4.316-1.58 8.383-5.616 8.39v-3.843H8.206v3.867zm-3.796 2.96H5.292v-2.96h2.914zm-5.36-2.96h2.446V15.66H2.847z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsDigitaloceanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDinersClubIcon],svg[lineicons-diners-club-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.832 9.41h-1.22c-1.386 0-2.538 1.002-2.609 2.467Q2 11.949 2 12.022q0 .066.003.132c.071 1.352 1.223 2.442 2.61 2.436h1.22c1.415.006 2.709-1.155 2.709-2.568c0-1.545-1.294-2.613-2.71-2.613M4.62 14.366a2.373 2.373 0 0 1 0-4.745a2.37 2.37 0 0 1 2.371 2.374a2.37 2.37 0 0 1-2.37 2.371" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.339 11.37a.6.6 0 0 0 0 .158c.016.258.184.471.4.471c.152 0 .268-.08.368-.184l.039.04c-.126.167-.281.306-.504.306c-.432 0-.52-.42-.52-.594c0-.536.362-.694.553-.694c.219 0 .458.14.46.43v.048l-.025.016h-.764zm.484-.087c.068 0 .077-.035.077-.068c0-.138-.084-.251-.238-.251c-.165 0-.281.122-.313.32zm.445.768c.078 0 .13 0 .13-.09v-.764c0-.084-.1-.1-.143-.123v-.042c.2-.084.31-.155.333-.155q.023-.002.022.036v.245h.007c.067-.107.184-.28.348-.28c.068 0 .155.044.155.144c0 .075-.052.14-.129.14c-.084 0-.084-.065-.18-.065c-.046 0-.2.06-.2.225v.64c0 .09.054.09.132.09h.151v.07c-.148 0-.264-.006-.38-.006q-.176-.001-.326.006v-.07zm.974-.306c.035.18.145.332.342.332c.16 0 .219-.097.219-.193c0-.323-.594-.22-.594-.658c0-.152.123-.349.423-.349c.087 0 .203.026.31.08l.019.278H15.9c-.026-.17-.123-.27-.297-.27c-.11 0-.213.06-.213.18c0 .32.632.22.632.648c0 .181-.145.371-.467.371a.7.7 0 0 1-.333-.093l-.029-.313zm3.342.306h.052c.077 0 .132 0 .132-.09v-1.516c0-.178-.042-.184-.145-.213v-.045a2 2 0 0 0 .28-.116c.03-.016.052-.03.062-.03c.016 0 .022.017.022.04v1.88c0 .09.062.09.136.09h.045v.071c-.093 0-.187-.006-.287-.006q-.148-.002-.297.006zm1.749-.077c0 .048.029.051.077.051h.11v.058c-.116.01-.342.068-.394.084l-.013-.01v-.219c-.164.132-.29.229-.483.229c-.149 0-.3-.097-.3-.323v-.696c0-.071-.01-.14-.165-.152v-.052c.097 0 .316-.019.352-.019c.029 0 .029.02.029.077v.704c0 .08 0 .316.235.316c.094 0 .216-.071.33-.165v-.732c0-.055-.133-.084-.23-.113v-.048c.245-.016.397-.039.426-.039c.023 0 .023.02.023.048v1.007zm.542-.9c.11-.094.255-.197.406-.197c.316 0 .507.274.507.571c0 .358-.262.713-.652.713c-.2 0-.306-.064-.377-.097l-.081.062l-.058-.03c.022-.16.038-.319.038-.483v-1.168c0-.178-.041-.184-.145-.213v-.045a2 2 0 0 0 .281-.116c.029-.016.052-.03.061-.03c.016 0 .023.017.023.04v.993zm0 .742c0 .103.096.277.28.277c.29 0 .413-.287.413-.529c0-.293-.222-.538-.435-.538c-.1 0-.184.064-.258.129zm-3.82.854v.007l-.02.12q-.004.06-.003.122l-.051.02v-.007c-.004-.058-.01-.139-.104-.139h-.238v.784c.003.113.048.12.116.123h.035v.054h-.006c-.058 0-.161-.003-.242-.003c-.087 0-.19.003-.248.003h-.007V13.7h.033c.083-.004.116-.004.116-.12v-.787H16.2c-.11.003-.106.023-.132.132l-.058.004v-.007c.006-.042.016-.084.02-.126a1 1 0 0 0 .009-.125v-.007h.045v.007c.013.035.039.035.077.035h.007l.768.003c.038-.003.07-.003.07-.042v-.006h.01l.042.006zm1.09.02a.546.546 0 0 0-.555.552c0 .31.245.538.561.538s.568-.229.568-.574c0-.32-.255-.516-.574-.516m.022 1.013c-.235 0-.355-.249-.355-.513c0-.197.075-.423.33-.423c.254 0 .358.258.358.471c-.004.216-.052.465-.333.465m3.678-1.026c.09 0 .155.068.155.158s-.068.155-.155.155a.153.153 0 0 1-.155-.155c0-.087.068-.158.155-.158m0 .284a.124.124 0 0 0 .123-.126c0-.067-.052-.129-.123-.129c-.07 0-.122.062-.122.13c0 .067.054.125.122.125m-.077-.045v-.007c.02 0 .022 0 .022-.012v-.117c0-.016 0-.022-.022-.022v-.006h.08c.03 0 .052.012.052.041a.05.05 0 0 1-.035.049l.025.035a.1.1 0 0 0 .036.036v.006h-.03l-.054-.07h-.016v.05s.003.01.022.014v.006h-.074zm.051-.084h.02c.02 0 .029-.016.029-.039c0-.022-.016-.032-.03-.032h-.015v.074zm-8.687-.781v.071l-.29-.003q-.147 0-.294.003v-.07h.049c.077 0 .132 0 .132-.09v-.704c0-.158-.097-.232-.252-.232c-.087 0-.225.07-.316.129v.806c0 .09.058.09.136.09h.048v.071l-.287-.003q-.147 0-.293.003v-.07h.048c.074 0 .129 0 .129-.09v-.72c0-.104-.03-.13-.158-.18v-.053c.12-.038.229-.074.361-.132c.007 0 .016.007.016.03v.177c.155-.113.287-.207.471-.207c.232 0 .313.171.313.38v.704c0 .09.062.09.136.09zm-3.216-1.829c-.204 0-.358.003-.475.003q-.159 0-.319-.003v.07c.123 0 .248-.015.248.23v1.322c-.006.188-.087.19-.248.207v.071l.365-.003c.129 0 .254.003.393.003c.968 0 1.126-.678 1.126-.948c0-.481-.387-.952-1.09-.952m.006 1.813c-.132 0-.284-.023-.284-.232v-1.484c.052-.004.1-.01.213-.01c.526 0 .855.368.855.878c0 .406-.194.848-.784.848m1.714.016h.048v.071l-.287-.003l-.297.003v-.07h.052c.078 0 .132 0 .132-.088v-.738c0-.123-.042-.14-.142-.194v-.042c.126-.039.281-.09.29-.097a.1.1 0 0 1 .05-.016c.015 0 .018.016.018.039v1.048c0 .087.062.087.136.087m-.378-1.729a.14.14 0 0 1 .132-.132c.068 0 .136.058.136.132a.136.136 0 0 1-.136.136a.136.136 0 0 1-.132-.136"></svg:path><svg:path fill="currentColor" d="M13.339 11.37a.6.6 0 0 0 0 .158c.016.258.184.471.4.471c.152 0 .268-.08.368-.184l.039.04c-.126.167-.281.306-.504.306c-.432 0-.52-.42-.52-.594c0-.536.362-.694.553-.694c.219 0 .458.14.46.43v.048l-.025.016h-.764zm.484-.087c.068 0 .077-.035.077-.068c0-.138-.084-.251-.238-.251c-.165 0-.281.122-.313.32zm.445.768c.078 0 .13 0 .13-.09v-.764c0-.084-.1-.1-.143-.123v-.042c.2-.084.31-.155.333-.155q.023-.002.022.036v.245h.007c.067-.107.184-.28.348-.28c.068 0 .155.044.155.144c0 .075-.052.14-.129.14c-.084 0-.084-.065-.18-.065c-.046 0-.2.06-.2.225v.64c0 .09.054.09.132.09h.151v.07c-.148 0-.264-.006-.38-.006q-.176-.001-.326.006v-.07zm.974-.306c.035.18.145.332.342.332c.16 0 .219-.097.219-.193c0-.323-.594-.22-.594-.658c0-.152.123-.349.423-.349c.087 0 .203.026.31.08l.019.278H15.9c-.026-.17-.123-.27-.297-.27c-.11 0-.213.06-.213.18c0 .32.632.22.632.648c0 .181-.145.371-.467.371a.7.7 0 0 1-.333-.093l-.029-.313zm3.245-.123l-.06.397c-.117.071-.423.145-.604.145c-.639 0-1.042-.413-1.042-1.026c0-.558.5-.958 1.036-.958c.219 0 .432.071.641.146l.026.387h-.068c-.051-.316-.277-.445-.583-.445c-.307 0-.768.21-.768.864c0 .548.393.945.813.945a.556.556 0 0 0 .548-.47zm.097.429h.052c.077 0 .132 0 .132-.09v-1.516c0-.178-.042-.184-.145-.213v-.045a2 2 0 0 0 .28-.116c.03-.016.052-.03.062-.03c.016 0 .022.017.022.04v1.88c0 .09.062.09.136.09h.045v.071c-.093 0-.187-.006-.287-.006q-.148-.002-.297.006zm1.749-.077c0 .048.029.051.077.051h.11v.058c-.116.01-.342.068-.394.084l-.013-.01v-.219c-.164.132-.29.229-.483.229c-.149 0-.3-.097-.3-.323v-.696c0-.071-.01-.14-.165-.152v-.052c.097 0 .316-.019.352-.019c.029 0 .029.02.029.077v.704c0 .08 0 .316.235.316c.094 0 .216-.071.33-.165v-.732c0-.055-.133-.084-.23-.113v-.048c.245-.016.397-.039.426-.039c.023 0 .023.02.023.048v1.007zm.542-.9c.11-.094.255-.197.406-.197c.316 0 .507.274.507.571c0 .358-.262.713-.652.713c-.2 0-.306-.064-.377-.097l-.081.062l-.058-.03c.022-.16.038-.319.038-.483v-1.168c0-.178-.041-.184-.145-.213v-.045a2 2 0 0 0 .281-.116c.029-.016.052-.03.061-.03c.016 0 .023.017.023.04v.993zm0 .742c0 .103.096.277.28.277c.29 0 .413-.287.413-.529c0-.293-.222-.538-.435-.538c-.1 0-.184.064-.258.129zm-9.017.848l.042.007v.006q-.011.062-.016.12q-.005.06-.004.122h-.003l-.055.02v-.007c-.003-.058-.01-.139-.103-.139h-.235v.784c0 .113.045.12.116.123h.032v.054h-.003l-.242-.003c-.09 0-.194.003-.252.003h-.006V13.7h.035c.081-.004.113-.004.117-.12v-.787h-.24c-.109.003-.106.023-.128.132h-.004l-.054.004v-.007q.01-.063.016-.126a1 1 0 0 0 .01-.125v-.007h.048v.007c.01.035.039.035.074.035h.774c.042 0 .071 0 .075-.039v-.006h.006zm-2.287.049h.007v.054h-.03c-.031.004-.064.004-.083.023c-.013.013-.02.029-.02.058v.774c0 .074.052.078.104.08h.029v.056H9.57l-.235-.003c-.074 0-.158.003-.216.003h-.007v-.055h.026c.055-.003.103-.007.103-.08v-.775c0-.029-.006-.045-.02-.058c-.018-.02-.047-.02-.083-.023h-.026v-.054h.007c.058 0 .145.003.22.003zm3.222.8v.006a2 2 0 0 0-.051.236h-.004v.003c-.096 0-.267-.007-.4-.007c-.132 0-.31.007-.393.007h-.007v-.055h.026c.055-.003.103-.007.103-.08v-.775c0-.029-.006-.045-.019-.058c-.02-.02-.048-.02-.084-.023h-.026v-.054h.007c.09 0 .245.003.368.003l.38-.003h.007v.08c0 .052 0 .11.006.152l-.006.006l-.052.013v-.006c-.01-.097-.022-.168-.174-.168h-.2v.374h.17c.085 0 .1-.045.11-.122v-.007h.059v.007a3 3 0 0 0-.007.174q0 .082.007.168v.006h-.007l-.051.01v-.007c-.01-.09-.01-.142-.11-.142h-.171v.339c0 .09.077.09.174.09c.178 0 .252-.01.294-.174V13.5h.01l.048.012zm-1.97-.8h.006v.054H10.8c-.06.004-.125.007-.125.184v.674q-.002.08.006.149v.006h-.064l-.755-.838v.593c.003.13.022.165.135.168h.03v.055h-.007l-.19-.003l-.2.003h-.01v-.055h.029c.097-.003.126-.065.126-.184v-.623a.126.126 0 0 0-.126-.129h-.03v-.054h.01l.168.003c.045 0 .087-.003.139-.003l.652.735v-.545c0-.12-.081-.132-.123-.136h-.039v-.054h.007l.206.003zm3.042.99c-.07-.01-.097-.026-.139-.087l-.248-.374c.113-.046.203-.13.203-.265s-.068-.203-.164-.235h-.004a.5.5 0 0 0-.193-.03c-.078 0-.149.004-.239.004s-.18-.003-.229-.003h-.006v.054h.032c.048.004.1.004.1.107v.755c0 .048-.045.074-.1.074h-.032v.055h.006l.216-.003l.255.003h.007v-.055h-.033c-.07-.003-.116-.003-.116-.113v-.31h.087c.097.168.194.326.307.478l.145-.003l.145.003h.006v-.055zm-.62-.49h-.064v-.43c.02 0 .039-.006.078-.006c.129 0 .21.08.21.21c0 .174-.075.226-.223.226m1.864-.5v.054h-.03c-.061.004-.122.01-.126.184v.674q0 .08.01.149v.006h-.068l-.751-.838v.593c0 .13.02.165.132.168h.032v.055h-.006l-.194-.003l-.2.003h-.006v-.055h.026c.1 0 .126-.065.129-.184v-.623a.127.127 0 0 0-.13-.129h-.025v-.054h.006l.171.003l.136-.003l.651.735v-.545c0-.12-.08-.132-.122-.136h-.039v-.054h.007l.206.003l.184-.003zm1.012.99c-.048 0-.074-.017-.093-.059s-.036-.096-.052-.148l-.274-.777l-.013-.036c-.006-.01-.013-.01-.016-.01l-.016.004a.7.7 0 0 1-.136.064c-.01.058-.039.133-.058.187l-.235.681c-.023.061-.068.094-.123.094h-.016v.058h.006q.08-.006.158-.007l.181.003h.006v-.054h-.022c-.049 0-.103-.01-.107-.046c0-.025.02-.064.036-.116l.045-.148h.326l.058.168a.5.5 0 0 1 .029.103c0 .029-.052.039-.087.039h-.023v.058h.007q.116-.006.222-.007l.207.003h.006v-.054zm-.697-.407l.13-.397l.129.397zm2.004-.448v.774c0 .074.048.078.103.08h.026v.056h-.003c-.074 0-.162-.007-.236-.007s-.161.007-.22.007h-.006v-.055h.03c.051-.003.103-.007.103-.08v-.775c0-.029-.007-.045-.02-.058c-.019-.02-.051-.02-.084-.023h-.029v-.054h.007l.22.003l.235-.003h.003v.054h-.026c-.035.004-.064.004-.084.023c-.013.013-.019.029-.019.058m2.523-.135v.054h-.03c-.06.004-.125.01-.125.184v.674q-.002.08.006.149v.006h-.064l-.755-.838v.593c0 .13.023.165.136.168h.029v.055h-.007l-.19-.003l-.2.003h-.006v-.055h.025c.097-.003.126-.065.126-.184v-.623a.126.126 0 0 0-.126-.129h-.026v-.054h.007l.168.003c.045 0 .087-.003.138-.003l.652.735v-.545c0-.12-.08-.132-.123-.136h-.038v-.054h.006l.207.003l.183-.003zm1.013.99c-.049-.004-.075-.017-.094-.059s-.035-.096-.055-.148l-.27-.777s-.01-.026-.017-.036c-.003-.01-.01-.01-.016-.01l-.013.004a.7.7 0 0 1-.135.064a2 2 0 0 1-.058.187l-.24.681a.126.126 0 0 1-.122.094h-.012v.054h.006l.158-.003l.18.003h.007v-.054h-.022c-.052 0-.107-.01-.107-.049c0-.022.02-.061.032-.113l.046-.148h.328l.055.168c.02.045.033.087.033.103c0 .029-.052.039-.088.039h-.022v.054h.006l.223-.003l.203.003h.007v-.054zm-.697-.407l.129-.397l.129.397zm1.6.197v.01a7 7 0 0 1-.055.252l-.006.003l-.39-.003l-.394.003h-.007v-.055h.03c.05-.003.102-.007.102-.094v-.764c0-.071-.051-.074-.103-.078h-.029v-.054h.007l.235.003c.078 0 .149-.003.226-.003h.006v.054h-.045c-.058.004-.093 0-.093.075v.764c0 .055.035.071.084.078q.037.004.08.003q.054 0 .113-.007a.2.2 0 0 0 .139-.077a.4.4 0 0 0 .045-.103v-.007zm-.023-.816c.09 0 .155.068.155.158s-.068.155-.155.155a.153.153 0 0 1-.155-.155c0-.087.068-.158.155-.158m0 .284a.124.124 0 0 0 .123-.126c0-.067-.052-.129-.123-.129c-.07 0-.122.062-.122.13c0 .067.054.125.122.125m-.077-.045v-.007c.02 0 .022 0 .022-.012v-.117c0-.016 0-.022-.022-.022v-.006h.08c.03 0 .052.012.052.041a.05.05 0 0 1-.035.049l.025.035a.1.1 0 0 0 .036.036v.006h-.03l-.054-.07h-.016v.05s.003.01.022.014v.006h-.074zm.051-.084h.02c.02 0 .029-.016.029-.039c0-.022-.016-.032-.03-.032h-.015v.074z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.122 11.996c0 .639-.4 1.184-.964 1.403v-2.806a1.5 1.5 0 0 1 .964 1.403" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.833 9.41h-1.22c-1.387 0-2.538 1.002-2.61 2.467v.277c.072 1.352 1.223 2.442 2.61 2.436h1.22c1.416.006 2.71-1.155 2.71-2.568c0-1.545-1.294-2.613-2.71-2.613M4.62 14.366a2.373 2.373 0 0 1 0-4.745a2.37 2.37 0 0 1 2.37 2.374a2.37 2.37 0 0 1-2.37 2.371" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.081 10.593v2.803a1.5 1.5 0 0 1 0-2.803" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsDinersClubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDinnerIcon],svg[lineicons-dinner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M45.7 1.8h-3.2c-2 0-3.6 1.6-3.6 3.6v51.9c0 2.8 2.2 5 5 5h2.8c2.8 0 5-2.2 5-5v-20h1.5c2 0 3.6-1.6 3.6-3.6V12.8c-.1-6.1-5.1-11-11.1-11m1 56h-2.8c-.3 0-.5-.2-.5-.5v-20h3.8v19.9c0 .3-.3.6-.5.6m5.6-25h-8.9V6.3h2.3c3.6 0 6.6 3 6.6 6.6zM27.1 2c-1.2 0-2.3 1-2.3 2.3v14.1h-4.3V4.2c0-1.2-1-2.3-2.3-2.3S16 3 16 4.2v14.1h-4.3V4.2c0-1.2-1-2.3-2.3-2.3S7.2 3 7.2 4.2v21.6c0 2.9 2 5.3 4.8 6v25.5c0 2.8 2.2 5 5 5h2.7c2.8 0 5-2.2 5-5V31.8c2.7-.6 4.7-3.1 4.7-5.9V4.2C29.3 3 28.3 2 27.1 2m-7.5 55.8h-2.7c-.3 0-.5-.2-.5-.5V31.9h3.7v25.3c0 .3-.2.6-.5.6m3.6-30.4h-9.9c-.9 0-1.6-.7-1.6-1.6v-3h13.1v3c0 .9-.7 1.6-1.6 1.6"></svg:path>`,
})
export class LineiconsDinnerIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDirectionIcon],svg[lineicons-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m58.4 17.5l-4.8-6.2c-.9-1.2-2.4-1.9-3.9-1.9H26.9V4c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v5.4h-13c-2.7 0-4.9 2.2-4.9 4.9v12.4c0 2.7 2.2 4.9 4.9 4.9h12.9V60c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V31.7h22.7c1.5 0 3-.7 3.9-1.9l4.8-6.2c1.6-1.8 1.6-4.3.2-6.1m-3.6 3.3L50 27c-.1.1-.2.2-.4.2H9.5c-.2 0-.4-.2-.4-.4V14.3c0-.2.2-.4.4-.4h40.1c.1 0 .3.1.4.2l4.8 6.2c.1.1.1.4 0 .5"></svg:path>`,
})
export class LineiconsDirectionIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDirectionAltIcon],svg[lineicons-direction-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M45.8 29.9h-9.1v-5.8H41c1 0 2-.4 2.7-1.2l3.4-3.7c1.2-1.4 1.2-3.5 0-4.8l-3.4-3.7C43 9.9 42 9.5 41 9.5h-4.3V4c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v5.4H18.2c-2 0-3.6 1.6-3.6 3.6v7.5c0 2 1.6 3.6 3.6 3.6h14.1v5.8H23c-1 0-2 .4-2.7 1.2l-3.4 3.7c-1.2 1.4-1.2 3.5 0 4.8l3.4 3.7c.7.8 1.7 1.2 2.7 1.2h9.3V60c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V44.6h9.1c2 0 3.6-1.6 3.6-3.6v-7.5c0-2-1.6-3.6-3.6-3.6m-26.7-16h21.6l2.6 2.8l-2.6 2.8H19.1zm25.8 26.2H23.3l-2.6-2.8l2.6-2.8h21.6z"></svg:path>`,
})
export class LineiconsDirectionAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDirectionLtrIcon],svg[lineicons-direction-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.571 20.063a.75.75 0 0 0 0-1.13l-2.965-2.967a.75.75 0 0 0-1.06 1.06l1.72 1.722H5.578a.75.75 0 0 0 0 1.5h11.688l-1.72 1.722a.75.75 0 1 0 1.06 1.06zm-5.743-6.567V4h-3v9.496a.75.75 0 0 1-1.5 0V9.25H8.203a3.375 3.375 0 0 1 0-6.75h10.875a.75.75 0 0 1 0 1.5h-3.75v9.496a.75.75 0 0 1-1.5 0m-4.5-5.746V4H8.203a1.875 1.875 0 0 0 0 3.75z"></svg:path>`,
})
export class LineiconsDirectionLtrIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDirectionRtlIcon],svg[lineicons-direction-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.085 20.063a.748.748 0 0 1 0-1.13l2.965-2.967a.75.75 0 1 1 1.061 1.06l-1.72 1.722h11.687a.75.75 0 0 1 0 1.5H7.39l1.721 1.722a.75.75 0 1 1-1.061 1.06zm8.743-6.567V4h-3v9.496a.75.75 0 0 1-1.5 0V9.25H8.203a3.375 3.375 0 0 1 0-6.75h10.875a.75.75 0 0 1 0 1.5h-3.75v9.496a.75.75 0 0 1-1.5 0m-4.5-5.746V4H8.203a1.875 1.875 0 0 0 0 3.75z"></svg:path>`,
})
export class LineiconsDirectionRtlIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDiscordIcon],svg[lineicons-discord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.942 5.555a16.3 16.3 0 0 0-4.126-1.296a12 12 0 0 0-.529 1.097a15.2 15.2 0 0 0-4.573 0A12 12 0 0 0 9.18 4.26c-1.448.25-2.834.692-4.129 1.3c-2.611 3.946-3.319 7.794-2.965 11.587a16.5 16.5 0 0 0 5.06 2.593q.613-.841 1.084-1.785a10.7 10.7 0 0 1-1.706-.83q.215-.16.418-.331c3.29 1.539 6.866 1.539 10.118 0q.206.171.418.33a10.6 10.6 0 0 1-1.71.833a13 13 0 0 0 1.084 1.785a16.5 16.5 0 0 0 5.064-2.595c.415-4.398-.71-8.21-2.973-11.59M8.678 14.813c-.988 0-1.798-.922-1.798-2.045s.792-2.047 1.798-2.047c1.005 0 1.815.922 1.798 2.047c.001 1.123-.793 2.045-1.798 2.045m6.644 0c-.988 0-1.798-.922-1.798-2.045s.793-2.047 1.798-2.047c1.006 0 1.816.922 1.798 2.047c0 1.123-.793 2.045-1.798 2.045"></svg:path>`,
})
export class LineiconsDiscordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDiscordAltIcon],svg[lineicons-discord-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54.214 11.274A52 52 0 0 0 41.01 7.125a39 39 0 0 0-1.691 3.512q-7.384-1.11-14.633 0a38 38 0 0 0-1.712-3.512a52 52 0 0 0-13.213 4.16C1.404 23.911-.861 36.224.27 48.363c5.543 4.139 10.914 6.653 16.195 8.298a40 40 0 0 0 3.468-5.712a34 34 0 0 1-5.462-2.658q.688-.51 1.34-1.06c10.53 4.926 21.972 4.926 32.377 0q.658.55 1.339 1.06a34 34 0 0 1-5.472 2.663a40 40 0 0 0 3.468 5.712c5.286-1.645 10.662-4.16 16.204-8.303c1.329-14.072-2.27-26.272-9.514-37.09M21.37 40.9c-3.162 0-5.754-2.952-5.754-6.545s2.537-6.55 5.754-6.55s5.808 2.95 5.753 6.55c.005 3.593-2.537 6.545-5.753 6.545m21.262 0c-3.16 0-5.753-2.952-5.753-6.545s2.537-6.55 5.753-6.55s5.81 2.95 5.754 6.55c0 3.593-2.537 6.545-5.754 6.545"></svg:path>`,
})
export class LineiconsDiscordAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDiscordChatIcon],svg[lineicons-discord-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.222 10.42c-.58 0-1 .515-1 1.096c0 .58.452 1.097 1 1.097c.58 0 1-.484 1-1.097c.032-.613-.42-1.097-1-1.097m3.614 2.161c.552 0 1-.49 1-1.096s-.448-1.097-1-1.097s-1 .491-1 1.097s.448 1.097 1 1.097"></svg:path><svg:path fill="currentColor" d="M18.706 2H5.352c-1.13 0-2.065.903-2.065 2.032v13.516c0 1.13.903 2.033 2.032 2.033h11.323l-.549-1.807l1.259 1.194l1.225 1.129L20.707 22V4.032c.096-1.129-.872-2.032-2-2.032m-3.87 13.032s-.355-.42-.678-.806c1.323-.355 1.806-1.194 1.806-1.194a7.4 7.4 0 0 1-1.129.58a5.2 5.2 0 0 1-1.451.42c-.968.194-1.807.13-2.58 0a7 7 0 0 1-1.452-.42c-.226-.096-.517-.193-.742-.322c-.033 0-.033-.032-.097-.032c0 0-.032 0-.032-.032c-.194-.097-.258-.194-.258-.194s.516.807 1.774 1.194c-.323.355-.678.806-.678.806c-2.225-.097-3.032-1.484-3.032-1.484c0-3.225 1.452-5.806 1.452-5.806c1.45-1.097 2.805-1.032 2.805-1.032l.097.129c-1.839.484-2.645 1.29-2.645 1.29s.226-.129.58-.258c1.097-.452 1.904-.58 2.258-.645h.194c.58-.097 1.323-.097 2 0q1.452.146 3 .968s-.774-.742-2.516-1.259l.129-.193s1.355-.032 2.806 1.032c0 0 1.452 2.58 1.452 5.807c.032-.033-.839 1.419-3.064 1.451"></svg:path>`,
})
export class LineiconsDiscordChatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDiscoverIcon],svg[lineicons-discover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 10.37h.87c.162 0 .324.015.471.037c.767.11 1.37.516 1.37 1.592c0 1.068-.603 1.48-1.37 1.584c-.147.022-.31.03-.471.03H2zm19.72.494c.118 0 .206-.089.206-.221c0-.133-.088-.229-.206-.229s-.206.096-.206.229c0 .132.088.22.206.22m0-.501a.28.28 0 1 1 0 .56a.28.28 0 0 1 0-.56m0 .324l-.015-.022h-.037v.133h-.059v-.317h.126c.073 0 .118.03.118.095c0 .052-.037.082-.089.089l.089.133h-.067zm0-.162h.007c.03 0 .06.007.06.044c0 .044-.03.052-.06.052h-.058v-.096zm-2.049 1.223c.244-.03.442-.133.442-.442c0-.295-.198-.376-.442-.413h-.442v.87h.206c.082 0 .163-.008.236-.015m0-1.37c.575.022 1.106.14 1.106.876c0 .384-.244.7-.649.752c.17.022.273.192.332.34l.508 1.266h-.707l-.383-1.016c-.06-.148-.11-.236-.206-.288a.5.5 0 0 0-.236-.044h-.207v1.348h-.633V10.37h.685c.125 0 .265 0 .39.008m-5.902.965q.11.285.11.648c0 .229-.037.45-.11.649c-.229.626-.782 1.031-1.54 1.031c-1.017 0-1.666-.692-1.666-1.68c0-.995.663-1.672 1.666-1.672c.758 0 1.311.397 1.54 1.024m0-.685l1.12 2.954h.236l1.245-3.242h-.663l-.664 1.71l-.707-1.71h-.678zm2.763-.288h1.887v.523h-1.246v.796h1.135v.501h-1.135v.914h1.253v.508h-1.894zm-13.19.575a1.1 1.1 0 0 0-.347-.052h-.361v2.211h.36q.18-.002.347-.059c.39-.14.708-.501.708-1.046c0-.546-.317-.921-.708-1.054m1.62-.575h.642v3.242h-.642zm2.698.862c-.221-.14-.457-.28-.708-.31c-.228-.029-.471.038-.471.362c0 .56 1.4.324 1.4 1.407c0 .708-.56 1.054-1.201.98c-.347-.037-.546-.14-.818-.324v-.663c.213.118.53.346.78.39c.273.045.568-.037.568-.331c0-.626-1.393-.369-1.393-1.437c0-.722.546-.988 1.106-.988c.28 0 .523.104.737.295zm2.74 2.056c-.161.207-.544.324-.802.347c-.995.066-1.658-.487-1.658-1.585c0-1.105.582-1.754 1.658-1.695c.213.008.56.082.788.273v.62c-.273-.17-.553-.288-.788-.296c-.656-.022-.995.39-.995 1.054c0 .663.317 1.032.995 1.002c.265-.007.663-.22.803-.339z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsDiscoverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDisplayIcon],svg[lineicons-display-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.1 9.4H7.9c-3.4 0-6.1 2.7-6.1 6.1v22.8c0 3.4 2.7 6.1 6.1 6.1h21.9v5.7h-7.9c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h20.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-7.9v-5.7h21.9c3.4 0 6.1-2.7 6.1-6.1V15.5c-.1-3.4-2.9-6.1-6.3-6.1m1.7 28.9c0 .9-.7 1.6-1.6 1.6H7.9c-.9 0-1.6-.7-1.6-1.6V15.5c0-.9.7-1.6 1.6-1.6h48.3c.9 0 1.6.7 1.6 1.6z"></svg:path>`,
})
export class LineiconsDisplayIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDisplayAltIcon],svg[lineicons-display-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 3.8H8c-3.4 0-6.3 2.8-6.3 6.3v30.2c0 3.4 2.8 6.3 6.3 6.3h15.7l-2.5 9.2h-4.5c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h30.5c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-4.5l-2.5-9.2H56c3.4 0 6.3-2.8 6.3-6.3V10.1c0-3.5-2.9-6.3-6.3-6.3M38.2 55.7H25.8l2.5-9.2h7.3zm19.6-15.5c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V10.1c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8z"></svg:path>`,
})
export class LineiconsDisplayAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDockerIcon],svg[lineicons-docker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.988 11.321h-2.035V9.448h2.035zm0-6.363h-2.035v1.906h2.035zm2.455 4.554h-2.035v1.842h2.035zM10.566 7.22H8.53v1.873h2.034zm2.422 0h-2.035v1.873h2.035zm8.689 3.133c-.452-.323-1.486-.42-2.261-.258c-.097-.775-.55-1.421-1.26-2.003l-.452-.258l-.258.452c-.55.872-.743 2.326-.13 3.262a3.4 3.4 0 0 1-1.485.356H2.07c-.259 1.582.193 3.682 1.356 5.103c1.13 1.357 2.907 2.035 5.168 2.035c4.91 0 8.592-2.26 10.272-6.395c.646 0 2.132 0 2.875-1.422c.032-.032.226-.42.258-.549zm-15.989-.84H3.621v1.842h2.035V9.512zm2.423 0H6.076v1.842H8.11zm2.454 0H8.532v1.842h2.034zM8.111 7.22H6.076v1.873H8.11z"></svg:path>`,
})
export class LineiconsDockerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDollarIcon],svg[lineicons-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.999 3a.75.75 0 0 0-1.5 0v1.573H9.703a2.25 2.25 0 0 0-2.25 2.25v3.016c0 .976.628 1.84 1.556 2.14l6.02 1.952a.75.75 0 0 1 .518.714v3.016a.75.75 0 0 1-.75.75H9.703a.75.75 0 0 1-.75-.75v-1.124a.75.75 0 1 0-1.5 0v1.124a2.25 2.25 0 0 0 2.25 2.25h1.796V21.5a.75.75 0 0 0 1.5 0v-1.588h1.798a2.25 2.25 0 0 0 2.25-2.25v-3.016a2.25 2.25 0 0 0-1.556-2.14l-6.02-1.952a.75.75 0 0 1-.518-.714V6.823a.75.75 0 0 1 .75-.75h5.094a.75.75 0 0 1 .75.75v1.124a.75.75 0 0 0 1.5 0V6.823a2.25 2.25 0 0 0-2.25-2.25h-1.798z"></svg:path>`,
})
export class LineiconsDollarIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDollarCircleIcon],svg[lineicons-dollar-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.25 6.625a.75.75 0 0 1 .75.75v.438c.99.15 1.75 1.006 1.75 2.039a.75.75 0 1 1-1.5 0a.563.563 0 0 0-.563-.563H12a.75.75 0 0 0-.75.75v.265a.75.75 0 0 0 .487.703l1.553.582a2.25 2.25 0 0 1 1.46 2.107v.265A2.25 2.25 0 0 1 13 16.155v.47a.75.75 0 0 1-1.5 0v-.438a2.06 2.06 0 0 1-1.75-2.039a.75.75 0 0 1 1.5 0c0 .311.252.563.563.563h.687a.75.75 0 0 0 .75-.75v-.265a.75.75 0 0 0-.487-.702l-1.553-.583a2.25 2.25 0 0 1-1.46-2.107v-.265a2.25 2.25 0 0 1 1.75-2.194v-.47a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.25 2c-5.523 0-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10s-4.477-10-10-10m-8.5 10a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsDollarCircleIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDomainIcon],svg[lineicons-domain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.7 36.8c-.9 0-1.7-.4-2.2-1.1l-3.4-4.9c-.7-1-.4-2.4.6-3.1s2.4-.4 3.1.6L7.6 31l1.5-2.2c.5-.7 1.3-1.1 2.2-1.1s1.7.4 2.2 1.1L15 31l1.8-2.7c.7-1 2.1-1.3 3.1-.6s1.3 2.1.6 3.1l-3.4 4.9c-.5.7-1.3 1.1-2.2 1.1s-1.7-.4-2.2-1.1l-1.5-2.2l-1.5 2.2c-.3.7-1.1 1.1-2 1.1m20.6 0c-.9 0-1.7-.4-2.2-1.1l-3.4-4.9c-.7-1-.4-2.4.6-3.1s2.4-.4 3.1.6l1.8 2.7l1.5-2.2c.5-.7 1.3-1.1 2.2-1.1s1.7.4 2.2 1.1l1.5 2.2l1.8-2.7c.7-1 2.1-1.3 3.1-.6s1.3 2.1.6 3.1l-3.4 4.9c-.5.7-1.3 1.1-2.2 1.1s-1.7-.4-2.2-1.1L32 33.4l-1.5 2.2c-.5.8-1.3 1.2-2.2 1.2m28 0c-.9 0-1.7-.4-2.2-1.1l-1.5-2.2l-1.5 2.2c-.5.7-1.3 1.1-2.2 1.1s-1.7-.4-2.2-1.1l-3.4-4.9c-.7-1-.4-2.4.6-3.1s2.4-.4 3.1.6l1.8 2.7l1.5-2.2c.5-.7 1.3-1.1 2.2-1.1s1.7.4 2.2 1.1l1.5 2.2l1.8-2.7c.7-1 2.1-1.3 3.1-.6s1.3 2.1.6 3.1l-3.4 4.9c-.3.7-1.1 1.1-2 1.1m-5.2-5.6"></svg:path>`,
})
export class LineiconsDomainIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDoubleQuotesEnd1Icon],svg[lineicons-double-quotes-end-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.449 18.177l-.322-.677za.75.75 0 0 1-1.072-.677v-2.557a4.628 4.628 0 0 1 .75-9.193a4.627 4.627 0 0 1 4.626 4.627c0 2.845-1.049 4.796-2.12 6.034a8 8 0 0 1-1.47 1.333a6 6 0 0 1-.647.4l-.045.023l-.014.006l-.006.003zM4 10.377c0 1.726 1.4 3.126 3.127 3.126a.75.75 0 0 1 .75.75v1.807c.198-.176.41-.386.62-.63c.867-1.001 1.756-2.612 1.756-5.053a3.127 3.127 0 0 0-6.253 0m14.199 7.8l-.322-.677za.75.75 0 0 1-1.072-.677v-2.557a4.628 4.628 0 0 1 .75-9.193a4.627 4.627 0 0 1 4.626 4.627c0 2.845-1.049 4.796-2.12 6.034a8 8 0 0 1-1.47 1.333a6 6 0 0 1-.692.422l-.014.008l-.006.002zm-3.449-7.8c0 1.726 1.4 3.126 3.127 3.126a.75.75 0 0 1 .75.75v1.807c.198-.176.41-.386.62-.63c.867-1.001 1.756-2.612 1.756-5.053a3.127 3.127 0 0 0-6.253 0"></svg:path>`,
})
export class LineiconsDoubleQuotesEnd1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDownloadIcon],svg[lineicons-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 44c-1.2 0-2.3 1-2.3 2.3v8.9c0 .9-.7 1.6-1.6 1.6H7.9c-.9 0-1.6-.7-1.6-1.6v-8.9C6.3 45 5.2 44 4 44s-2.3 1-2.3 2.3v8.9c0 3.4 2.7 6.1 6.1 6.1h48.3c3.4 0 6.1-2.7 6.1-6.1v-8.9c.1-1.3-1-2.3-2.2-2.3"></svg:path><svg:path fill="currentColor" d="M30.4 46.5c.4.4 1 .6 1.6.6s1.1-.2 1.6-.6l14.5-14.1c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0L34.3 39.6V5c0-1.2-1-2.3-2.3-2.3c-1.2 0-2.3 1-2.3 2.3v34.6L19.1 29.2c-.9-.9-2.3-.8-3.2 0c-.9.9-.8 2.3 0 3.2z"></svg:path>`,
})
export class LineiconsDownloadIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDownload1Icon],svg[lineicons-download-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.424 16.75a.75.75 0 0 1-.548-.237l-4.61-4.607a.75.75 0 0 1 1.061-1.061l3.347 3.345V4a.75.75 0 1 1 1.5 0v10.185l3.343-3.34a.75.75 0 1 1 1.06 1.06l-4.575 4.573a.75.75 0 0 1-.578.272"></svg:path><svg:path fill="currentColor" d="M5.172 16a.75.75 0 0 0-1.5 0v2.5a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25V16a.75.75 0 1 0-1.5 0v2.5a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class LineiconsDownload1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDownloadCircle1Icon],svg[lineicons-download-circle-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.672 13.63l-1.373-1.372a.75.75 0 0 0-1.06 1.061l2.64 2.638a.75.75 0 0 0 1.11-.026l2.613-2.612a.75.75 0 0 0-1.06-1.06l-1.37 1.369V8.56a.75.75 0 0 0-1.5 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.422 12c0-5.522 4.477-9.999 10-9.999S22.42 6.478 22.42 12s-4.477 10-10 10s-10-4.478-10-10m10-8.499a8.5 8.5 0 1 0 0 16.999a8.5 8.5 0 0 0 0-16.999" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsDownloadCircle1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDribbbleIcon],svg[lineicons-dribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.11 11.523a.415.415 0 1 0 0-.829a.415.415 0 0 0 0 .83m13.68 1.416c-.063-.045-.112-.052-.152.034c-.696 1.508-1.87.755-1.753.822c.26-.12.945-.668.841-1.426c-.063-.463-.46-.668-.882-.595c-.736.128-1.008.923-.87 1.626c.025.12.068.22.11.318c-.831.677-1.162-.606-1.2-.76c0-.007.643-.544.822-1.823c.188-1.341-.24-1.585-.677-1.578c-.81.014-1.028 1.705-.734 3.115c-.025.006-.14.07-.323.077c-.133-.417-.699-.782-.847-.642c-.37.352.09 1.04.414 1.095c-.195 1.199-1.412.902-1.185-.6c.396-.736.698-1.83.644-2.492c-.02-.234-.192-.547-.583-.532c-.753.03-.835 1.722-.746 2.922c-.005-.03-.047.146-.355.233c-.073-.404-.725-.81-.878-.615c-.287.365.21 1.017.446 1.063c-.194 1.198-1.412.902-1.185-.6c.396-.737.698-1.831.644-2.492c-.019-.234-.192-.547-.583-.532c-.753.03-.834 1.722-.746 2.922c-.005-.03-.047.151-.368.237c-.011-.525-.665-.766-.822-.598c-.28.298.064.911.382 1.063c-.194 1.198-1.412.902-1.185-.6c.396-.737.698-1.831.644-2.492c-.02-.234-.192-.547-.583-.532c-.753.03-.813 1.806-.725 3.007c-.248 1.062-1.079 2.388-.97-.268c.01-.187.021-.258-.071-.327c-.07-.054-.228-.028-.315-.026c-.105.004-.131.065-.155.158c-.054.24-.063.473-.071.791a1.4 1.4 0 0 1-.074.42c-.058.203-.384.574-.562.512c-.248-.085-.167-.785-.12-1.265c.039-.38-.085-.55-.403-.612c-.185-.039-.298-.033-.492-.094c-.183-.057-.224-.403-.614-.288c-.213.063-.076.515-.128.85c-.252 1.649-.776 1.694-1.02.893c1.096-2.685.317-3.743-.139-3.743c-.475 0-1.018.327-.788 2.42c-.112-.032-.146-.05-.268-.05c-.692 0-1.164.56-1.164 1.25s.472 1.25 1.164 1.25c.408 0 .695-.186.912-.473c.142.203.315.476.63.464c.941-.037 1.215-1.967 1.247-2.075c.1.016.196.045.289.06c.155.024.166.085.162.24c-.04 1.314.202 1.773.751 1.773c.306 0 .58-.3.767-.516c.14.29.364.507.664.516c.728.018 1.006-1.14.98-.988c-.02.12.237.982.985.985c.928.004 1.1-1.016 1.12-1.187c.004-.03.003-.034 0 0v.01a.87.87 0 0 0 .446-.212s.236 1.405 1.112 1.389c.91-.017 1.081-.939 1.104-1.118c.004-.038.003-.043 0 0v.005c.349-.127.441-.255.441-.255s.188 1.377 1.112 1.389c.824.01 1.129-.833 1.13-1.186c.14.002.397-.082.39-.087c0 0 .302 1.204 1.145 1.266c.395.029.692-.223.861-.337c.398.322 1.721.733 2.557-.684c.118-.204-.136-.444-.18-.475M3.13 13.969c-.403 0-.662-.374-.662-.776c0-.403.237-.777.641-.777c.182 0 .283.02.424.144c.026.1.099.334.134.44c.048.142.104.262.16.394c-.08.336-.347.575-.697.575m.984-1.398c-.016-.026-.013-.01-.032-.035a3.9 3.9 0 0 1-.233-1.162c-.019-.577.078-1.254.361-1.254c.193 0 .397 1.372-.096 2.451M9.8 11.97c-.045-.343-.048-1.87.32-1.829c.202.082-.13 1.524-.32 1.829m2.678 0c-.045-.343-.047-1.87.32-1.829c.202.082-.13 1.524-.32 1.829m2.657.021c-.045-.343-.048-1.87.32-1.828c.202.082-.13 1.523-.32 1.828m2.933-1.939c.336-.035.322 1.43-.351 2.354c-.087-.334-.22-2.24.351-2.354m1.41 3.15c-.108-.543.17-.9.457-.94c.1-.016.246.05.275.17c.047.23-.007.57-.65 1a1 1 0 0 1-.082-.23"></svg:path>`,
})
export class LineiconsDribbbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDribbbleSymbolIcon],svg[lineicons-dribbble-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.984 2A9.975 9.975 0 0 0 2 11.984C2 17.504 6.463 22 11.984 22C17.504 22 22 17.504 22 11.984C22 6.462 17.504 2 11.984 2m8.495 10.281c-1.95-.132-4 .066-6.016.562a48 48 0 0 0-.926-2.314a21.3 21.3 0 0 0 5.72-2.942c.793 1.289 1.222 2.81 1.222 4.43c.033.066 0 .165 0 .264m-2.115-5.917c-1.587 1.19-3.471 2.148-5.488 2.776c-1.058-2.115-2.248-3.9-3.504-5.289a8.5 8.5 0 0 1 2.611-.396a8.66 8.66 0 0 1 6.38 2.909M7.917 4.512c1.257 1.257 2.447 2.976 3.505 5.058c-2.612.628-5.29.727-7.703.298a8.68 8.68 0 0 1 4.198-5.356m-4.43 6.81c1.092.232 2.215.33 3.34.33c1.718 0 3.504-.23 5.256-.693c.33.727.66 1.487.925 2.28c-2.909.926-5.487 2.38-7.537 4.265c-1.223-1.52-1.983-3.438-1.983-5.52zM6.53 18.53c1.884-1.72 4.297-3.075 6.975-3.9c.1.33.199.66.298.958c.43 1.487.76 2.975.991 4.397c-.892.297-1.818.495-2.81.495c-2.082.033-3.966-.727-5.454-1.95m9.686.826a42 42 0 0 0-.959-4.198c-.099-.33-.198-.628-.297-.959a18.6 18.6 0 0 1 5.355-.495c-.496 2.446-2.05 4.462-4.1 5.652"></svg:path>`,
})
export class LineiconsDribbbleSymbolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDrizzleIcon],svg[lineicons-drizzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.46 11.852a.863.863 0 0 0-.328-1.185a.886.886 0 0 0-1.198.333l-2.819 4.918a.863.863 0 0 0 .329 1.185a.886.886 0 0 0 1.198-.332zm6.076-3.771a.863.863 0 0 0-.328-1.185a.886.886 0 0 0-1.199.332l-2.818 4.919a.863.863 0 0 0 .328 1.185A.886.886 0 0 0 9.718 13zm9.349 0a.863.863 0 0 0-.329-1.185a.886.886 0 0 0-1.198.332l-2.819 4.919a.863.863 0 0 0 .329 1.185a.886.886 0 0 0 1.198-.332zm-6.078 3.771a.863.863 0 0 0-.328-1.185a.886.886 0 0 0-1.199.333l-2.818 4.918a.863.863 0 0 0 .328 1.185a.886.886 0 0 0 1.199-.332z"></svg:path>`,
})
export class LineiconsDrizzleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDropIcon],svg[lineicons-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 62.3c-13.7 0-24.8-11.1-24.8-24.8c0-18.2 22.5-34.6 23.4-35.3c.8-.6 1.9-.6 2.7 0c1 .7 23.4 18 23.4 35.3c.1 13.6-11 24.8-24.7 24.8m0-55.4C27.3 10.6 11.8 24 11.8 37.5c0 11.2 9.1 20.3 20.3 20.3s20.3-9.1 20.3-20.3C52.3 24.6 36.7 10.8 32 6.9"></svg:path>`,
})
export class LineiconsDropIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDropboxIcon],svg[lineicons-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 13.032l5 3.193l5-3.193L7 9.87zm4.967 4.29L12 20.516l5-3.194l-5-3.193zM12 13.032l5 3.193l5-3.193l-5-3.162zM7 3.483L2 6.677L7 9.87l5-3.193zm15 3.194l-5-3.194l-5 3.194l5 3.193z"></svg:path>`,
})
export class LineiconsDropboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDropboxOriginalIcon],svg[lineicons-dropbox-original-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 35.2l15.5 9.9L32 35.2l-15.5-9.8zm15.4 13.3L32 58.4l15.5-9.9L32 38.6zM32 35.2l15.5 9.9L63 35.2l-15.5-9.8zM16.5 5.6L1 15.5l15.5 9.9L32 15.5zM63 15.5L47.5 5.6L32 15.5l15.5 9.9z"></svg:path>`,
})
export class LineiconsDropboxOriginalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDrupalIcon],svg[lineicons-drupal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.516 5.8c-.065 0-.065-.033 0 0c-.909-.585-1.753-.878-2.63-1.332c-.13-.033-.227-.13-.357-.227c-.585-.455-1.461-1.43-2.176-2.241a5 5 0 0 1-.194 1.072c-.13.52-.455.909-.715 1.136c-.065.033-.065.033-.097.033C9.34 5.02 8.723 5.247 7.879 5.7c-.033.033-.195.098-.325.196a10.1 10.1 0 0 0-2.24 1.915c-2.208 2.566-2.76 6.397-1.202 9.385c.585 1.104 1.396 2.143 2.403 2.922c1.04.812 2.435 1.299 3.702 1.591c1.818.422 3.572.422 5.293-.26a8.4 8.4 0 0 0 3.41-2.5c1.233-1.526 1.85-3.474 1.85-5.423c.162-4.968-3.67-7.306-4.254-7.728M5.184 9.078c-.033-.033-.357-.228-.033-.65c.974-1.46 2.76-2.468 3.312-2.727c.195-.098 1.072-.52 1.916-1.137c.552-.422.91-.812 1.072-2.078c.13.455.13.812.13 1.299c-.033.52-.52.812-.552.877c-.098.097-.52.26-.585.357c-.097.032-.097.097 0 .097c.13.033.227.098.227.228c0 .097-.032.357-.52.811c-.81.812-1.428 1.364-2.857 2.208c-1.363.812-2.045.715-2.11.715m11.43 11.332c-.098.098-1.007.747-2.078.812c-1.072.065-2.468.13-3.313-.65c-.13-.13-.097-.357 0-.422c.098-.097.13-.13.26-.13c.098 0 .098 0 .13.033c.357.325.974.552 2.208.552s2.176-.357 2.533-.65c.13-.13.227-.032.26.033c.065.195.13.357 0 .422m-3.475-1.72c.228-.196.552-.52.877-.65c.357-.13.52-.098.812-.098c.325 0 .65.033.877.13c.227.13.357.52.454.682c.098.195 0 .325-.13.357c-.13.098-.13.033-.26-.227c-.13-.227-.227-.52-.974-.52c-.682 0-.876.228-1.234.52c-.357.26-.454.357-.552.227c-.097-.097-.032-.26.13-.422m5.196.13c-.682-.033-2.111-2.241-2.988-2.241c-1.136-.033-3.572 2.338-5.52 2.338c-1.136 0-1.526-.13-1.916-.455c-.552-.422-.876-1.072-.876-1.883c.032-1.526 1.46-2.955 3.28-2.988c2.24-.032 3.863 2.24 5 2.24c.974-.032 2.857-1.915 3.766-1.915c.975 0 1.234 1.007 1.234 1.624c0 .584-.194 1.688-.649 2.402c-.487.682-.78.91-1.331.877"></svg:path>`,
})
export class LineiconsDrupalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDrupalOriginalIcon],svg[lineicons-drupal-original-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M45.9 12.9c-.2 0-.2-.1 0 0c-2.8-1.8-5.4-2.7-8.1-4.1c-.4-.1-.7-.4-1.1-.7c-1.8-1.4-4.5-4.4-6.7-6.9c-.1 1.3-.3 2.3-.6 3.3C29 6.1 28 7.3 27.2 8c-.2.1-.2.1-.3.1c-3.1 2.4-5 3.1-7.6 4.5c-.1.1-.6.3-1 .6c-1.6 1-4.4 3-6.9 5.9C4.6 27 2.9 38.8 7.7 48c1.8 3.4 4.3 6.6 7.4 9c3.2 2.5 7.5 4 11.4 4.9c5.6 1.3 11 1.3 16.3-.8c4.1-1.6 7.7-4.3 10.5-7.7c3.8-4.7 5.7-10.7 5.7-16.7c.5-15.3-11.3-22.5-13.1-23.8M11 23c-.1-.1-1.1-.7-.1-2c3-4.5 8.5-7.6 10.2-8.4c.6-.3 3.3-1.6 5.9-3.5c1.7-1.3 2.8-2.5 3.3-6.4c.4 1.4.4 2.5.4 4c-.1 1.6-1.6 2.5-1.7 2.7c-.3.3-1.6.8-1.8 1.1c-.3.1-.3.3 0 .3c.4.1.7.3.7.7c0 .3-.1 1.1-1.6 2.5c-2.5 2.5-4.4 4.2-8.8 6.8c-4.2 2.5-6.3 2.2-6.5 2.2m35.2 34.9c-.3.3-3.1 2.3-6.4 2.5s-7.6.4-10.2-2c-.4-.4-.3-1.1 0-1.3c.3-.3.4-.4.8-.4c.3 0 .3 0 .4.1c1.1 1 3 1.7 6.8 1.7s6.7-1.1 7.8-2c.4-.4.7-.1.8.1c.2.6.4 1.1 0 1.3m-10.7-5.3c.7-.6 1.7-1.6 2.7-2c1.1-.4 1.6-.3 2.5-.3c1 0 2 .1 2.7.4c.7.4 1.1 1.6 1.4 2.1c.3.6 0 1-.4 1.1c-.4.3-.4.1-.8-.7c-.4-.7-.7-1.6-3-1.6c-2.1 0-2.7.7-3.8 1.6c-1.1.8-1.4 1.1-1.7.7c-.3-.3-.1-.8.4-1.3m16 .4c-2.1-.1-6.5-6.9-9.2-6.9c-3.5-.1-11 7.2-17 7.2c-3.5 0-4.7-.4-5.9-1.4c-1.7-1.3-2.7-3.3-2.7-5.8c.1-4.7 4.5-9.1 10.1-9.2c6.9-.1 11.9 6.9 15.4 6.9c3-.1 8.8-5.9 11.6-5.9c3 0 3.8 3.1 3.8 5c0 1.8-.6 5.2-2 7.4c-1.5 2.1-2.4 2.8-4.1 2.7"></svg:path>`,
})
export class LineiconsDrupalOriginalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDumbbellIcon],svg[lineicons-dumbbell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61 29.8h-2.2v-.2c0-3.9-3.2-7.2-7.2-7.2s-7.2 3.2-7.2 7.2v.2H19.6v-.2c0-3.9-3.2-7.2-7.2-7.2s-7.2 3.2-7.2 7.2v.2H3c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h2.3v.2c0 3.9 3.2 7.2 7.2 7.2s7.2-3.2 7.2-7.2v-.2h24.9v.2c0 3.9 3.2 7.2 7.2 7.2s7.2-3.2 7.2-7.2v-.2h2c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2m-45.9 4.7c0 1.5-1.2 2.7-2.7 2.7S9.7 36 9.7 34.5v-4.9c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7zm39.2 0c0 1.5-1.2 2.7-2.7 2.7S49 35.9 49 34.5v-4.9c0-1.5 1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7v4.9z"></svg:path>`,
})
export class LineiconsDumbbellIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsDumbbell1Icon],svg[lineicons-dumbbell-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.75 16.5a.75.75 0 0 1-.75.75H5.5A2.25 2.25 0 0 1 3.25 15v-2.25h-.5a.75.75 0 0 1 0-1.5h.5V9A2.25 2.25 0 0 1 5.5 6.75H7a.75.75 0 0 1 .75.75v3.75h8.5V7.5a.75.75 0 0 1 .75-.75h1.5A2.25 2.25 0 0 1 20.75 9v2.25h.5a.75.75 0 0 1 0 1.5h-.5V15a2.25 2.25 0 0 1-2.25 2.25H17a.75.75 0 0 1-.75-.75v-3.75h-8.5zM19.25 9a.75.75 0 0 0-.75-.75h-.75v7.5h.75a.75.75 0 0 0 .75-.75zm-14.5 6c0 .414.336.75.75.75h.75v-7.5H5.5a.75.75 0 0 0-.75.75z"></svg:path>`,
})
export class LineiconsDumbbell1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsEdgeIcon],svg[lineicons-edge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.256 11.482c0-1.774-.323-3.386-1.129-4.934C18.482 3.58 15.547 2 12.13 2c-5.612 0-8.773 4.225-9.386 8.837c1.71-2.483 4.709-4.902 8.837-5.031c0 0 4.451 0 4 4.225H8.549c.225-1.484.71-2.355 1.354-3.16c-3.032 1.45-4.902 3.902-4.838 7.61c.033 2.871 2.032 5.838 4.838 6.935c3.354 1.258 7.74.258 9.644-.871V16.32c-3.226 2.258-10.934 2.451-10.934-2.71h12.61v-2.128z"></svg:path>`,
})
export class LineiconsEdgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsEmojiExpressionlessIcon],svg[lineicons-emoji-expressionless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.669 9.233a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0m-1.576 5.005a.75.75 0 0 0 0 1.5h7.814a.75.75 0 0 0 0-1.5zm7.488-6.255a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsEmojiExpressionlessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsEmojiExpressionlessFlatEyesIcon],svg[lineicons-emoji-expressionless-flat-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.093 14.238a.75.75 0 0 0 0 1.5h7.814a.75.75 0 0 0 0-1.5zM6.692 9.167a.75.75 0 0 1 .75-.75h2.285a.75.75 0 1 1 0 1.5H7.442a.75.75 0 0 1-.75-.75m7.594-.75a.75.75 0 0 0 0 1.5h2.272a.75.75 0 1 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsEmojiExpressionlessFlatEyesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsEmojiGrinIcon],svg[lineicons-emoji-grin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9.233a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0m5.25-1.25a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.817 13.061a.75.75 0 0 0-.747.824c.24 2.418 2.46 4.888 5.93 4.888s5.69-2.47 5.93-4.888a.75.75 0 0 0-.747-.824zM12 17.273c-2.258 0-3.725-1.318-4.243-2.712h8.486c-.518 1.394-1.985 2.712-4.243 2.712" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsEmojiGrinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsEmojiSadIcon],svg[lineicons-emoji-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9.233a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0m5.25-1.25a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m-6.02 8.282a.75.75 0 1 1-1.173-.934A5.03 5.03 0 0 1 12 13.429a5.03 5.03 0 0 1 3.943 1.902a.75.75 0 1 1-1.173.934A3.53 3.53 0 0 0 12 14.93a3.53 3.53 0 0 0-2.77 1.336"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsEmojiSadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsEmojiSmileIcon],svg[lineicons-emoji-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9.233a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0m5.25-1.25a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m-6.02 5.729a.75.75 0 0 0-1.173.934A5.03 5.03 0 0 0 12 16.548a5.03 5.03 0 0 0 3.943-1.902a.75.75 0 1 0-1.173-.934A3.53 3.53 0 0 1 12 15.048a3.53 3.53 0 0 1-2.77-1.336"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsEmojiSmileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsEmojiSmileSideIcon],svg[lineicons-emoji-smile-side-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.014 15.224a.75.75 0 1 0-1.235-.853a5.5 5.5 0 0 1-4.529 2.379a.75.75 0 0 0 0 1.5c2.391 0 4.502-1.2 5.764-3.026M8.75 7.983a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m7.75 1.25a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsEmojiSmileSideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsEmojiSmileSunglassIcon],svg[lineicons-emoji-smile-sunglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.176 14.569a.75.75 0 0 1 1.054.12A3.53 3.53 0 0 0 12 16.024a3.53 3.53 0 0 0 2.77-1.337a.75.75 0 0 1 1.173.935A5.03 5.03 0 0 1 12 17.525a5.03 5.03 0 0 1-3.943-1.902a.75.75 0 0 1 .12-1.054M6.953 8.157a.75.75 0 0 0-.75.75v1.954c0 .773.628 1.4 1.402 1.4h1.784a1.4 1.4 0 0 0 1.401-1.4V9.657h2.42v1.204a1.4 1.4 0 0 0 1.401 1.4h1.784c.774 0 1.402-.627 1.402-1.4V8.907a.75.75 0 0 0-.75-.75z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsEmojiSmileSunglassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsEmojiSmileTongueIcon],svg[lineicons-emoji-smile-tongue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10s-4.49 10-10 10m0-18.5c-4.69 0-8.5 3.81-8.5 8.5s3.81 8.5 8.5 8.5s8.5-3.81 8.5-8.5s-3.81-8.5-8.5-8.5m2.81 14.98a2.26 2.26 0 0 1-1.95-1.13l-.47-.82c-1.67.12-3.29-.58-4.33-1.89a.74.74 0 0 1 .12-1.05c.33-.26.8-.2 1.05.12a3.6 3.6 0 0 0 3.42 1.28c.83-.16 1.59-.61 2.12-1.28a.77.77 0 0 1 .64-.28c.25.02.47.16.59.37l.75 1.3c.62 1.07.25 2.45-.82 3.07c-.35.2-.73.3-1.12.3zm-.9-2.31l.25.43c.1.17.26.3.46.35c.19.05.39.03.57-.08c.36-.21.48-.67.28-1.02l-.26-.45c-.39.32-.82.58-1.29.77zm3.41-5.2c-.31 0-.6-.2-.71-.51c-.03-.09-.31-.8-1.03-.8c-.75 0-1.03.78-1.03.79c-.13.39-.55.61-.95.47a.753.753 0 0 1-.47-.95c.23-.67 1-1.82 2.45-1.82s2.22 1.14 2.45 1.82a.753.753 0 0 1-.71.99zm-7.16 0c-.31 0-.6-.2-.71-.51c-.03-.09-.31-.8-1.03-.8c-.75 0-1.03.78-1.03.79c-.13.39-.55.61-.95.47a.753.753 0 0 1-.47-.95c.23-.67 1-1.82 2.45-1.82s2.22 1.14 2.45 1.82a.753.753 0 0 1-.71.99z"></svg:path>`,
})
export class LineiconsEmojiSmileTongueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsEmptyFileIcon],svg[lineicons-empty-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M49.5 1.8h-35c-3.4 0-6.1 2.7-6.1 6.1V40c0 1.5.6 2.9 1.7 3.9l18 17c1 1 2.3 1.5 3.7 1.5h17.6c3.4 0 6.1-2.7 6.1-6.1V7.9c.1-3.4-2.7-6.1-6-6.1M16.2 43.4h11.7c.5 0 .9.4.9.8v11zm34.9 12.7c0 .9-.7 1.6-1.6 1.6H33.3V44.2c0-2.9-2.4-5.3-5.4-5.3h-15v-31c0-.9.7-1.6 1.6-1.6h34.9c.9 0 1.6.7 1.6 1.6v48.2z"></svg:path>`,
})
export class LineiconsEmptyFileIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsEnterIcon],svg[lineicons-enter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.578 2.5a2.25 2.25 0 0 0-2.25 2.25v1.878q.18.122.342.282l1.158 1.159V4.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75v-3.319l-1.158 1.16q-.16.16-.342.28v1.879a2.25 2.25 0 0 0 2.25 2.25h6a2.25 2.25 0 0 0 2.25-2.25V4.75a2.25 2.25 0 0 0-2.25-2.25z"></svg:path><svg:path fill="currentColor" d="m7.548 15.97l2.718-2.72H4.328a.75.75 0 0 1 0-1.5h5.938L7.548 9.03a.75.75 0 0 1 1.06-1.06l3.964 3.966a.748.748 0 0 1-.002 1.13L8.61 17.03a.75.75 0 1 1-1.061-1.06"></svg:path>`,
})
export class LineiconsEnterIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsEnterDownIcon],svg[lineicons-enter-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.078 13.25a.75.75 0 0 0 .56-.252l3.97-3.967a.75.75 0 0 0-1.06-1.06l-2.72 2.717V4.75a.75.75 0 0 0-1.5 0v5.938L8.608 7.97a.75.75 0 0 0-1.06 1.061l3.968 3.965a.75.75 0 0 0 .562.254"></svg:path><svg:path fill="currentColor" d="M22.078 12a2.25 2.25 0 0 0-2.25-2.25H17.95q-.121.181-.281.342L16.51 11.25h3.318a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-15.5a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75h3.318l-1.158-1.158a2.3 2.3 0 0 1-.282-.342H4.328A2.25 2.25 0 0 0 2.078 12v6a2.25 2.25 0 0 0 2.25 2.25h15.5a2.25 2.25 0 0 0 2.25-2.25z"></svg:path>`,
})
export class LineiconsEnterDownIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsEnvatoIcon],svg[lineicons-envato-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.916 22a.894.894 0 1 0 0-1.787a.894.894 0 0 0 0 1.787m5.137-6.987l-5.04.54a.092.092 0 0 1-.066-.165l4.931-3.84c.319-.262.525-.668.437-1.106c-.087-.669-.64-1.106-1.34-1.019l-5.359.785c-.093.012-.143-.107-.069-.166l5.312-4.056c1.047-.815 1.135-2.415.175-3.346c-.871-.872-2.271-.844-3.143.028l-8.558 8.708a1.52 1.52 0 0 0-.378 1.31c.146.787.93 1.309 1.718 1.165l4.615-.94c.1-.022.153.112.069.168l-5.118 3.278c-.64.406-.931 1.134-.728 1.862c.203.96 1.165 1.512 2.096 1.281l7.653-1.884a.091.091 0 0 1 .093.147l-1.193 1.475c-.319.406.203.96.64.64l3.931-3.23c.7-.582.234-1.719-.669-1.631z"></svg:path>`,
})
export class LineiconsEnvatoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsEnvelopeIcon],svg[lineicons-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 9.6H8c-3.4 0-6.3 2.8-6.3 6.3v32.4c0 3.4 2.8 6.3 6.3 6.3h48c3.4 0 6.3-2.8 6.3-6.3V15.8c0-3.4-2.9-6.2-6.3-6.2m0 4.5h.3L32 29.7L7.7 14.1zm0 35.8H8c-1 0-1.8-.8-1.8-1.8V18.5l23.4 15c.7.5 1.5.7 2.3.7s1.6-.2 2.3-.7l23.4-15v29.7c.2 1-.6 1.7-1.6 1.7"></svg:path>`,
})
export class LineiconsEnvelopeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsEnvelope1Icon],svg[lineicons-envelope-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6.256V17.25a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 17.25V6.204A1.736 1.736 0 0 1 3.737 4.5h16.528c.959 0 1.736.777 1.736 1.735zM3.5 8.187v9.063c0 .414.336.75.75.75h15.5a.75.75 0 0 0 .75-.75V8.187l-7.213 5.03c-.773.54-1.8.54-2.574 0zm17-1.958A.236.236 0 0 0 20.264 6H3.736a.236.236 0 0 0-.135.429l7.97 5.558c.258.18.6.18.858 0l7.97-5.558a.24.24 0 0 0 .101-.186V6.23"></svg:path>`,
})
export class LineiconsEnvelope1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsEraserIcon],svg[lineicons-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m59.2 57.8l-27.4-.1l28.6-28.6c2.4-2.4 2.4-6.4 0-8.8L43.7 3.5c-1.2-1.2-2.7-1.8-4.4-1.8s-3.3.7-4.4 1.8L6 32.4c-2.7 2.7-4.2 6.3-4.2 10s1.5 7.4 4.2 10l5.4 5.4c2.8 2.8 6.4 4.2 10 4.2h.3l37.5.2c1.2 0 2.2-1 2.3-2.2c0-1.2-1-2.2-2.3-2.2M38 6.7c.3-.3.8-.5 1.2-.5s.9.2 1.2.5l16.7 16.7c.7.7.7 1.8 0 2.5L35.5 47.6L16.3 28.4zM9.1 49.4c-1.8-1.8-2.8-4.3-2.8-6.9s1-5 2.8-6.9l4-4l19.1 19.1l-4 4c-3.8 3.8-9.9 3.8-13.7 0z"></svg:path>`,
})
export class LineiconsEraserIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsEraser1Icon],svg[lineicons-eraser-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.044 3.13a2.25 2.25 0 0 1 3.074-.824l4.763 2.75a2.25 2.25 0 0 1 .824 3.073l-4.817 8.343a.75.75 0 0 1-1.024.274l-.217-.125l-1.123 1.945a.75.75 0 0 1-1.025.275L5.87 15.59a.75.75 0 0 1-.274-1.025l1.123-1.945l-.217-.125a.75.75 0 0 1-.274-1.024zm1.304 12.741l-4.33-2.5l-.748 1.296l4.33 2.5zm1.616-.799l4.442-7.693a.75.75 0 0 0-.275-1.024l-4.763-2.75a.75.75 0 0 0-1.025.274l-4.441 7.693l.189.109l.028.015l5.629 3.25l.027.017zM5.25 20.5a.75.75 0 0 0 0 1.5h13.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class LineiconsEraser1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsEthereumIcon],svg[lineicons-ethereum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.86 32.556L32.852 2l17.996 30.556l-17.996 10.887z"></svg:path><svg:path fill="currentColor" d="M14.86 36.05L32.852 62l18.006-25.95l-18.006 10.88z"></svg:path>`,
})
export class LineiconsEthereumIcon {
  readonly viewBox = input("0 0 65 64")
  readonly width = input("1.02em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsEthereumLogoIcon],svg[lineicons-ethereum-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.093 12.185L11.998 2l5.907 10.185l-5.907 3.63z"></svg:path><svg:path fill="currentColor" d="M6.093 13.35L11.998 22l5.91-8.65l-5.91 3.627z"></svg:path>`,
})
export class LineiconsEthereumLogoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsEuroIcon],svg[lineicons-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.043 5a7.25 7.25 0 0 0-6.71 4.5h4.702a.75.75 0 0 1 0 1.5H8.901a7.3 7.3 0 0 0 0 2.5h5.134a.75.75 0 0 1 0 1.5H9.333a7.25 7.25 0 0 0 9.321 4.016a.75.75 0 1 1 .54 1.4A8.754 8.754 0 0 1 7.734 15H5.578a.75.75 0 0 1 0-1.501h1.804a8.8 8.8 0 0 1 0-2.5H5.579a.75.75 0 0 1 0-1.5h2.155a8.754 8.754 0 0 1 11.46-5.415a.75.75 0 0 1-.54 1.4A7.2 7.2 0 0 0 16.044 5"></svg:path>`,
})
export class LineiconsEuroIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsExitIcon],svg[lineicons-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.578 2.5a2.25 2.25 0 0 0-2.25 2.25v1.878q.18.122.342.282l1.158 1.159V4.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v15.5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75v-3.319l-1.158 1.16q-.16.16-.342.28v1.879a2.25 2.25 0 0 0 2.25 2.25h6a2.25 2.25 0 0 0 2.25-2.25V4.75a2.25 2.25 0 0 0-2.25-2.25z"></svg:path><svg:path fill="currentColor" d="M3.578 12.5c0 .226.1.428.258.566l3.961 3.964a.75.75 0 1 0 1.061-1.06L6.14 13.25h5.938a.75.75 0 0 0 0-1.5H6.14l2.718-2.72a.75.75 0 0 0-1.06-1.06l-3.964 3.966a.75.75 0 0 0-.256.564"></svg:path>`,
})
export class LineiconsExitIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsExitDownIcon],svg[lineicons-exit-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M57.5 29.1h-6.9c-1.2 0-2.2 1-2.2 2.2s1 2.3 2.2 2.3h6.9q.3 0 .3.3v11.3c0 2.4-1.9 4.3-4.3 4.3H10.6c-2.4 0-4.3-1.9-4.3-4.3V33.9q0-.3.3-.3h6.9c1.2 0 2.2-1 2.2-2.3s-1-2.2-2.2-2.2h-7c-2.6 0-4.8 2.2-4.8 4.8v11.3c0 4.9 4 8.8 8.8 8.8h42.9c4.9 0 8.8-4 8.8-8.8V33.9c0-2.6-2.1-4.8-4.7-4.8"></svg:path><svg:path fill="currentColor" d="M30.4 37.1c.4.4 1 .6 1.6.6s1.1-.2 1.6-.6l10.2-10c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0l-6.3 6.2V12.3c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v17.9l-6.4-6.3c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2z"></svg:path>`,
})
export class LineiconsExitDownIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsExitUpIcon],svg[lineicons-exit-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.078 4c.223 0 .423.097.56.252l3.97 3.967a.75.75 0 0 1-1.06 1.06l-2.72-2.717V12.5a.75.75 0 0 1-1.5 0V6.562L8.608 9.28a.75.75 0 0 1-1.06-1.061l3.968-3.965A.75.75 0 0 1 12.078 4"></svg:path><svg:path fill="currentColor" d="M22.078 12a2.25 2.25 0 0 0-2.25-2.25H17.95q-.121.181-.281.342L16.51 11.25h3.318a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-15.5a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75h3.318l-1.158-1.158a2.3 2.3 0 0 1-.282-.342H4.328A2.25 2.25 0 0 0 2.078 12v6a2.25 2.25 0 0 0 2.25 2.25h15.5a2.25 2.25 0 0 0 2.25-2.25z"></svg:path>`,
})
export class LineiconsExitUpIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsExpandArrow1Icon],svg[lineicons-expand-arrow-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.782 3.47a.75.75 0 0 0-.218.584V8a.75.75 0 0 0 1.5 0V5.813L11.253 12l-6.189 6.188V16a.75.75 0 0 0-1.5 0v4c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5H6.125l6.188-6.188l6.189 6.188h-2.189a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-1.5 0v2.19L13.374 12l6.189-6.189V8a.75.75 0 0 0 1.5 0V4.047a.75.75 0 0 0-.75-.797h-4a.75.75 0 1 0 0 1.5h2.19l-6.19 6.19l-6.19-6.19h2.191a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0-.532.22"></svg:path>`,
})
export class LineiconsExpandArrow1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsExpandSquare4Icon],svg[lineicons-expand-square-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.563 5.5a2.25 2.25 0 0 1 2.25-2.25h2.5a.75.75 0 1 1 0 1.5h-2.5a.75.75 0 0 0-.75.75V8a.75.75 0 0 1-1.5 0zM15.561 4a.75.75 0 0 1 .75-.75h2.5a2.25 2.25 0 0 1 2.25 2.25V8a.75.75 0 1 1-1.5 0V5.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 1-.75-.75M4.313 15.25a.75.75 0 0 1 .75.75v2.5c0 .414.335.75.75.75h2.5a.75.75 0 0 1 0 1.5h-2.5a2.25 2.25 0 0 1-2.25-2.25V16a.75.75 0 0 1 .75-.75m15.998 0a.75.75 0 0 1 .75.75v2.5a2.25 2.25 0 0 1-2.25 2.25h-2.5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 0 .75-.75V16a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class LineiconsExpandSquare4Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsExpressjsIcon],svg[lineicons-expressjs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.493 6.725c.256-.334.652-.53 1.073-.53h.34l-4.392 5.743L22 17.803h-.34a1.35 1.35 0 0 1-1.073-.53l-3.576-4.676l-3.577 4.676a1.35 1.35 0 0 1-1.072.53h-.34l4.485-5.865l-4.391-5.743h.34c.42 0 .817.196 1.072.53l3.482 4.554z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.563 17.146c1.924.702 3.936-.094 4.959-1.647c.2-.305.53-.498.896-.498h.255c-.94 2.437-3.72 3.856-6.363 2.905C3.287 17.178 2 15.179 2 13.029V10.8a5.01 5.01 0 0 1 5.486-4.981c2.593.243 4.521 2.523 4.521 5.127V12.6H2.801v.444c0 1.802 1.069 3.485 2.762 4.102m1.44-10.55a4.21 4.21 0 0 0-4.202 4.202V11.8h8.406v-1a4.21 4.21 0 0 0-4.203-4.204" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsExpressjsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsEyeIcon],svg[lineicons-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12.023 7.625a4.375 4.375 0 1 0 0 8.75a4.375 4.375 0 0 0 0-8.75M9.148 12a2.875 2.875 0 1 1 5.75 0a2.875 2.875 0 0 1-5.75 0"></svg:path><svg:path d="M12.023 4.5c-4.312 0-8.025 2.556-9.722 6.235a3.02 3.02 0 0 0 0 2.53c1.697 3.679 5.41 6.235 9.722 6.235s8.026-2.556 9.723-6.235c.37-.802.37-1.728 0-2.53c-1.697-3.679-5.41-6.235-9.723-6.235m-8.36 6.863C5.125 8.194 8.32 6 12.023 6c3.704 0 6.899 2.194 8.36 5.363c.187.404.187.87 0 1.274C18.923 15.806 15.728 18 12.024 18s-6.898-2.194-8.36-5.363a1.52 1.52 0 0 1 0-1.274"></svg:path></svg:g>`,
})
export class LineiconsEyeIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFacebookIcon],svg[lineicons-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.54c5.523 0 10 4.476 10 10c0 4.99-3.657 9.127-8.437 9.878V15.43h2.33l.443-2.89l-2.773-.001v-1.922c.015-.774.411-1.515 1.63-1.515h1.26V6.64s-1.144-.196-2.238-.196c-2.249 0-3.73 1.342-3.776 3.774l-.002.117v2.203H7.899v2.89h2.54v6.988C5.657 21.667 2 17.53 2 12.54c0-5.523 4.477-10 10-10"></svg:path>`,
})
export class LineiconsFacebookIcon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFacebookFillIcon],svg[lineicons-facebook-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M47.4 25.8h-7.6V15.6H46c1.1 0 2-.8 2-2V3c0-1.1-.8-2-2-2h-7.3c-7.9 0-13.4 5.6-13.4 13.9v10.7h-8.8c-1.4 0-2.7 1.1-2.7 2.7v7.2c0 1.4 1.1 2.7 2.7 2.7h8.6v22.1c0 1.4 1.1 2.7 2.7 2.7h9.4c.6 0 1.1-.3 1.5-.7s.7-1.1.7-1.7V38.3H46c1.3 0 2.3-.8 2.5-2v-.2l1.4-6.9c.1-.7 0-1.5-.6-2.3c-.2-.5-1.1-1-1.9-1.1"></svg:path>`,
})
export class LineiconsFacebookFillIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFacebookLineIcon],svg[lineicons-facebook-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M35.9 62.3h-7.3c-2.2 0-4-1.9-4-4.2V36.6h-5.3c-2.2 0-4-1.9-4-4.2V26c0-2.3 1.8-4.2 4-4.2h5.2v-5.3c0-8.7 5.4-14.8 13.2-14.8h5.5c2.2 0 4 1.9 4 4.2v7.5c0 2.3-1.8 4.2-4 4.2h-3.4v4.1h4.8c1.2.1 2.3.6 3.1 1.5c.8 1 1.1 2.2.9 3.5L47.4 33c-.3 2-1.9 3.4-3.9 3.4h-3.7V58c0 2.4-1.7 4.3-3.9 4.3m-6.8-4.5h6.2V34.2c0-1.2 1-2.3 2.3-2.3H43l1.1-5.7h-6.5c-1.2 0-2.3-1-2.3-2.3v-6.7c0-1.9.5-4.2 4.1-4.2h3.3V6.3h-5c-5.3 0-8.7 4-8.7 10.3v7.5c0 1.2-1 2.3-2.3 2.3h-6.9v5.7h7c1.2 0 2.3 1 2.3 2.3zm15-31.9"></svg:path>`,
})
export class LineiconsFacebookLineIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFacebookMessengerIcon],svg[lineicons-facebook-messenger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.968 2.025C6.355 2.025 2 6.155 2 11.703c0 2.935 1.194 5.451 3.129 7.161c.13.13.226.355.258.549l.032 1.774c.033.548.581.967 1.13.71l2-.872c.128-.032.354-.096.548-.032c.903.226 1.87.42 2.903.42c5.645-.033 10-4.162 10-9.678s-4.387-9.71-10.032-9.71m6 7.452l-2.936 4.613c-.451.71-1.451.968-2.129.42l-2.322-1.775a.7.7 0 0 0-.71 0L6.71 15.09c-.42.322-.968-.194-.678-.645l2.936-4.613c.451-.71 1.451-.968 2.129-.42l2.322 1.775a.7.7 0 0 0 .71 0l3.13-2.42c.483-.193.967.29.709.71"></svg:path>`,
})
export class LineiconsFacebookMessengerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFacebookOriginalIcon],svg[lineicons-facebook-original-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M59.5 1h-55C2.5 1 1 2.6 1 4.5v55c0 2 1.6 3.5 3.5 3.5h29.6V38.9h-8v-9.3h8v-6.9c0-8 4.8-12.4 12-12.4c2.4 0 4.8.1 7.2.4V19h-4.8c-3.8 0-4.6 1.8-4.6 4.5v5.9H53l-1.3 9.4h-8v23.8h15.8c2 0 3.5-1.5 3.5-3.5V4.5c-.1-2-1.7-3.5-3.5-3.5"></svg:path>`,
})
export class LineiconsFacebookOriginalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFacebookOvalIcon],svg[lineicons-facebook-oval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 1C14.8 1 1 14.8 1 32s13.8 31 31 31s31-13.8 31-31S49.2 1 32 1m8.2 18.9h-3.1c-1.4 0-2.3.7-2.3 2c-.1 1.1 0 2.3 0 3.2c0 .4.1.4.4.4h4.6c.4 0 .6.1.6.6c-.1 1.8-.4 3.7-.4 5.5c0 .4-.1.4-.6.4h-3.7c-.8 0-.7-.1-.7.7v17.1c0 .6-.1.7-.7.7H28c-.6 0-.7-.1-.7-.7V32.5c0-.4-.1-.7-.6-.6H24c-.6.3-.6.1-.6-.3v-5.5c0-.4.1-.4.4-.4h2.8c.6 0 .7-.1.7-.7v-4.2c0-1.7.4-3.2 1.4-4.6c1.3-1.7 3.1-2.5 5.1-2.7c2.1-.1 4.2 0 6.3-.1c.3 0 .4.1.4.4v5.5q.15.6-.3.6"></svg:path>`,
})
export class LineiconsFacebookOvalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFacebookRoundedIcon],svg[lineicons-facebook-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="lineiconsFacebookRounded0"><svg:path fill="#fff" fill-rule="evenodd" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2" clip-rule="evenodd"></svg:path><svg:path fill="#000" d="M13.3 21.916v-7.724h2.177l.288-2.719H13.3l.004-1.36c0-.71.067-1.09 1.086-1.09h1.361V6.306h-2.178c-2.616 0-3.537 1.318-3.537 3.536v1.633h-1.63v2.718h1.63v7.615a10 10 0 0 0 3.264.109"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#lineiconsFacebookRounded0)"></svg:path></svg:g>`,
})
export class LineiconsFacebookRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFacebookSquareIcon],svg[lineicons-facebook-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17.625 3H6.375A3.375 3.375 0 0 0 3 6.375v11.25A3.375 3.375 0 0 0 6.375 21h11.25A3.375 3.375 0 0 0 21 17.625V6.375A3.375 3.375 0 0 0 17.625 3m-.457 9.694h-1.684v6.234H12.67v-6.234h-1.092v-2.1h1.092v-1.34c0-1.753.73-2.795 2.795-2.795h2.094v2.092H16.34c-.805 0-.857.3-.857.86l-.002 1.179h1.913l-.23 2.1z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsFacebookSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFacetimeIcon],svg[lineicons-facetime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8.497v7.006a2.77 2.77 0 0 0 2.767 2.766h8.43a2.77 2.77 0 0 0 2.766-2.766V8.497a2.77 2.77 0 0 0-2.767-2.767H4.772A2.766 2.766 0 0 0 2 8.497m18.188-1.875L17.013 9.24c-.283.235-.446.58-.446.945v3.625c0 .364.159.705.437.94l3.174 2.666c.724.604 1.822.091 1.822-.849V7.476c.005-.935-1.088-1.453-1.812-.854"></svg:path>`,
})
export class LineiconsFacetimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFigmaIcon],svg[lineicons-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.256 8.87a3.74 3.74 0 0 0 1.691-3.13A3.746 3.746 0 0 0 15.207 2H8.785a3.746 3.746 0 0 0-3.74 3.74c0 1.309.675 2.463 1.691 3.13a3.742 3.742 0 0 0 0 6.26a3.74 3.74 0 0 0-1.691 3.13c0 2.065 1.691 3.74 3.764 3.74c2.098 0 3.805-1.7 3.805-3.78v-3.456a3.76 3.76 0 0 0 2.52.976h.082a3.746 3.746 0 0 0 3.74-3.74a3.77 3.77 0 0 0-1.7-3.13m-5.87 9.35a2.575 2.575 0 0 1-2.577 2.56a2.53 2.53 0 0 1-2.536-2.52c0-1.39 1.13-2.512 2.512-2.52h2.601zm0-3.7H8.785A2.516 2.516 0 0 1 6.273 12c0-1.39 1.13-2.52 2.52-2.52h2.602v5.04zm0-6.26H8.785c-1.39 0-2.52-1.13-2.52-2.52s1.13-2.52 2.52-2.52h2.601zm1.22-5.04h2.601c1.39 0 2.52 1.13 2.52 2.52s-1.13 2.52-2.52 2.52h-2.601zm2.601 11.3h-.08c-1.391 0-2.521-1.13-2.521-2.52s1.13-2.52 2.52-2.52h.082c1.39 0 2.52 1.13 2.52 2.52s-1.13 2.52-2.52 2.52"></svg:path>`,
})
export class LineiconsFigmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFileFormatZipIcon],svg[lineicons-file-format-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.08 15.106q.222 0 .356-.115a.4.4 0 0 0 .139-.314a.4.4 0 0 0-.14-.32a.5.5 0 0 0-.356-.122h-.508q-.03 0-.03.03v.81q0 .03.03.03z"></svg:path><svg:path fill="currentColor" d="M17.25 22a2.25 2.25 0 0 0 2.25-2.25v-.744h1a1.5 1.5 0 0 0 1.5-1.5V13.25a1.5 1.5 0 0 0-1.5-1.5h-10a1.5 1.5 0 0 0-1.5 1.5v4.256a1.5 1.5 0 0 0 1.5 1.5H18v.744a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75v-10h4a2.25 2.25 0 0 0 2.25-2.252L12.249 3.5h5.002a.75.75 0 0 1 .75.75v7.488h1.5V4.25A2.25 2.25 0 0 0 17.25 2h-5.132a2.25 2.25 0 0 0-1.592.66L5.16 8.03a2.25 2.25 0 0 0-.66 1.592V19.75A2.25 2.25 0 0 0 6.75 22zM10.749 4.559l.002 2.94a.75.75 0 0 1-.75.751H7.06zm7.518 8.703q.43 0 .755.175q.327.17.502.49q.182.315.182.725q0 .405-.188.714a1.26 1.26 0 0 1-.526.478q-.339.168-.78.169h-.64q-.03 0-.031.03v1.36a.1.1 0 0 1-.024.067a.1.1 0 0 1-.067.024h-.955a.1.1 0 0 1-.067-.024a.1.1 0 0 1-.024-.066v-4.052a.1.1 0 0 1 .024-.066a.1.1 0 0 1 .067-.024zM14.84 17.47a.1.1 0 0 1-.025-.066v-4.052a.1.1 0 0 1 .024-.066a.1.1 0 0 1 .067-.024h.955a.1.1 0 0 1 .067.024a.1.1 0 0 1 .024.066v4.052a.1.1 0 0 1-.024.066a.1.1 0 0 1-.067.024h-.955a.1.1 0 0 1-.066-.024m-3.42.024a.1.1 0 0 1-.067-.024a.1.1 0 0 1-.024-.066v-.877a.16.16 0 0 1 .042-.109l1.76-2.146q.012-.013.006-.025t-.024-.012H11.42a.1.1 0 0 1-.067-.024a.1.1 0 0 1-.024-.066v-.793a.1.1 0 0 1 .024-.066a.1.1 0 0 1 .067-.024h2.908a.1.1 0 0 1 .067.024a.1.1 0 0 1 .024.066v.871a.16.16 0 0 1-.043.115l-1.771 2.147q-.012.012-.006.024t.024.012h1.705a.1.1 0 0 1 .067.024a.1.1 0 0 1 .024.066v.793a.1.1 0 0 1-.024.066a.1.1 0 0 1-.067.024z"></svg:path>`,
})
export class LineiconsFileFormatZipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFileMultipleIcon],svg[lineicons-file-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.892 16.733V4.25A2.25 2.25 0 0 0 14.642 2h-3.95a2.25 2.25 0 0 0-1.59.66L4.751 7.01a2.25 2.25 0 0 0-.658 1.59v8.132a2.25 2.25 0 0 0 2.25 2.25h8.298a2.25 2.25 0 0 0 2.25-2.25m-2.25.75H6.344a.75.75 0 0 1-.75-.75V8.731h2.98a2.25 2.25 0 0 0 2.25-2.251l-.001-2.98h3.82a.75.75 0 0 1 .75.75v12.483a.75.75 0 0 1-.75.75M6.653 7.231l2.67-2.672l.002 1.922a.75.75 0 0 1-.75.75z"></svg:path><svg:path fill="currentColor" d="M18.407 5.684a.75.75 0 0 1 1.5 0v11.567a4.75 4.75 0 0 1-4.75 4.75h-7.36a.75.75 0 0 1 0-1.5h7.36a3.25 3.25 0 0 0 3.25-3.25z"></svg:path>`,
})
export class LineiconsFileMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFilePencilIcon],svg[lineicons-file-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.75 20.5V22h-3a2.25 2.25 0 0 1-2.25-2.25V9.621c0-.596.237-1.169.659-1.59l5.367-5.371A2.25 2.25 0 0 1 12.118 2h5.132a2.25 2.25 0 0 1 2.25 2.25v5.5H18v-5.5a.75.75 0 0 0-.75-.75h-5.002l.003 3.998A2.25 2.25 0 0 1 10 9.75H6v10c0 .414.336.75.75.75zm.999-15.941L7.059 8.25h2.942a.75.75 0 0 0 .75-.75z"></svg:path><svg:path d="M20.299 12.339a1.75 1.75 0 0 0-2.475 0l-5.158 5.158a2.25 2.25 0 0 0-.646 1.35l-.19 1.746a.75.75 0 0 0 .827.826l1.747-.189a2.25 2.25 0 0 0 1.349-.646l5.158-5.158a1.75 1.75 0 0 0 0-2.475zm-2.277 1.923l.966.966l-4.296 4.296a.75.75 0 0 1-.45.215l-.82.089l.089-.82a.75.75 0 0 1 .215-.45z"></svg:path></svg:g>`,
})
export class LineiconsFilePencilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFilePlusCircleIcon],svg[lineicons-file-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.945 20.5a7 7 0 0 0 1.393 1.5H6.75a2.25 2.25 0 0 1-2.25-2.25V9.621c0-.596.237-1.169.659-1.59l5.367-5.371A2.25 2.25 0 0 1 12.118 2h5.132a2.25 2.25 0 0 1 2.25 2.25v6.128a6.8 6.8 0 0 0-1.5-.49V4.25a.75.75 0 0 0-.75-.75h-5.002l.003 3.998A2.25 2.25 0 0 1 10 9.75H6v10c0 .414.336.75.75.75zM10.75 4.559L7.059 8.25h2.942a.75.75 0 0 0 .75-.75z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15.875 15a.75.75 0 0 1 1.5 0v.875h.875a.75.75 0 0 1 0 1.5h-.875v.875a.75.75 0 1 1-1.5 0v-.875H15a.75.75 0 0 1 0-1.5h.875z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 16.625a5.375 5.375 0 1 1 10.75 0a5.375 5.375 0 0 1-10.75 0m5.375-3.875a3.875 3.875 0 1 0 0 7.75a3.875 3.875 0 0 0 0-7.75" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsFilePlusCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFileQuestionIcon],svg[lineicons-file-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.945 20.5a7 7 0 0 0 1.393 1.5H6.75a2.25 2.25 0 0 1-2.25-2.25V9.621c0-.596.237-1.169.659-1.59l5.367-5.371A2.25 2.25 0 0 1 12.118 2h5.132a2.25 2.25 0 0 1 2.25 2.25v6.128a6.8 6.8 0 0 0-1.5-.49V4.25a.75.75 0 0 0-.75-.75h-5.002l.003 3.998A2.25 2.25 0 0 1 10 9.75H6v10c0 .414.336.75.75.75zM10.75 4.559L7.059 8.25h2.942a.75.75 0 0 0 .75-.75z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M14.916 14.525a1.71 1.71 0 1 1 2.688 1.402c-.358.25-.775.574-1.107.975c-.334.404-.622.935-.622 1.582a.75.75 0 0 0 1.5 0c0-.18.077-.384.278-.625c.203-.246.49-.479.81-.704a3.209 3.209 0 1 0-5.048-2.63a.75.75 0 0 0 1.501 0m1.708 5.908a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5"></svg:path>`,
})
export class LineiconsFileQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFileXmarkIcon],svg[lineicons-file-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.75 20.5V22h-3a2.25 2.25 0 0 1-2.25-2.25V9.621c0-.596.237-1.169.659-1.59l5.367-5.371A2.25 2.25 0 0 1 12.118 2h5.132a2.25 2.25 0 0 1 2.25 2.25v5.5H18v-5.5a.75.75 0 0 0-.75-.75h-5.002l.003 3.998A2.25 2.25 0 0 1 10 9.75H6v10c0 .414.336.75.75.75zm.999-15.941L7.059 8.25h2.942a.75.75 0 0 0 .75-.75z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.485 12.485a.75.75 0 0 0 0 1.061l3.08 3.079l-3.08 3.079a.75.75 0 0 0 1.061 1.06l3.079-3.078l3.078 3.077a.75.75 0 0 0 1.06-1.06l-3.077-3.078l3.077-3.078a.75.75 0 0 0-1.06-1.06l-3.078 3.077l-3.079-3.079a.75.75 0 0 0-1.06 0"></svg:path>`,
})
export class LineiconsFileXmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFilesIcon],svg[lineicons-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 4.4H34.2c-3.4 0-6.3 2.8-6.3 6.3v7.1H8c-3.4 0-6.3 2.8-6.3 6.3v19.2c0 1.2.5 2.4 1.4 3.3L15 58.3c.9.9 2.1 1.4 3.3 1.4h11.5c3.4 0 6.2-2.8 6.2-6.3V39.9l5.1 5.1c.9.9 2.1 1.4 3.3 1.4H56c3.4 0 6.3-2.8 6.3-6.3V10.6c0-3.4-2.9-6.2-6.3-6.2M9.4 46.3h5.5c.1 0 .2.1.2.2V52zm22.2 7.1c0 1-.8 1.8-1.7 1.8H19.6v-8.6c0-2.6-2.1-4.7-4.7-4.7H6.3v-18c0-1 .8-1.8 1.8-1.8h23.4c.1 0 .2.1.2.2v31.1zm4.5-19.9V33h5c.1 0 .2.1.2.2v5.5zm21.7 6.6c0 1-.8 1.8-1.8 1.8H45.7v-8.6c0-2.6-2.1-4.7-4.7-4.7h-5v-6.2c0-2.2-1.6-4.1-3.6-4.5v-7.2c0-1 .8-1.8 1.8-1.8H56c1 0 1.8.8 1.8 1.8z"></svg:path>`,
})
export class LineiconsFilesIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFirebaseIcon],svg[lineicons-firebase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.32 15.057l1.948-12.67c.067-.431.637-.533.839-.147l2.092 3.977zm13.84 3.08l-1.857-11.67a.449.449 0 0 0-.76-.25L4.84 18.137l6.478 3.692c.402.228.906.228 1.309 0zM13.903 7.956l-1.5-2.898a.443.443 0 0 0-.793 0L5.02 16.989z"></svg:path>`,
})
export class LineiconsFirebaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFirefoxIcon],svg[lineicons-firefox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.941 9.437c-.1.25-.178.507-.278.757c-.072-1.05-.243-2.093-.58-3.087c-.228-.614-.492-1.228-.95-1.707c.065.586.215 1.157.2 1.75c-.128-.45-.278-.907-.55-1.293c-.585-.907-1.536-1.522-2.55-1.85c-.265-.086-.543-.136-.78-.279a9.2 9.2 0 0 0-4.843-1.229A9.03 9.03 0 0 0 5.65 4.88c-.25.235-.479.492-.729.735c-.436-.507-.657-1.15-.686-1.815c-.393.336-.621.822-.786 1.3c-.228.672-.35 1.387-.278 2.094c.007.157.05.329-.057.465C2.557 8.472 2.107 9.4 2 10.394c.179-.121.35-.25.529-.371c-.072.357-.172.714-.229 1.078a8.44 8.44 0 0 0 .907 5.137c.915 1.687 2.33 3.08 3.994 4.03a9.62 9.62 0 0 0 6.238 1.115c1.858-.307 3.658-1.122 4.987-2.472c.943-.958 1.765-2.037 2.358-3.244a11.3 11.3 0 0 0 1.157-6.23m-3.48 2.743c-.192-.393-.292-.857-.664-1.129c.093.986.136 1.987-.086 2.958c-.135.658-.428 1.293-.907 1.772c.086-.471.164-.95.136-1.429c-.693.936-1.53 1.8-2.594 2.308c-.9.436-1.965.414-2.908.122c-.857-.28-1.6-.808-2.257-1.408h.228a5.6 5.6 0 0 0 1.908-.229c.614-.178 1.072-.636 1.607-.957c.25-.15.565-.086.836-.164c.172-.093.229-.343.072-.48c-.4-.435-.98-.785-1.586-.714c-.586.086-1.065.486-1.644.622c-.414.072-.836-.057-1.2-.243c-.522-.264-.915-.707-1.286-1.143l-.164-.136c0-.064 0-.136.007-.2c.035-.178.136-.336.221-.5l.1-.2a10 10 0 0 1 1.715.279c-.007-.536-.043-1.144-.371-1.587l.114-.085c.364-.286.7-.622 1.107-.843c.165-.086.315-.2.436-.336l.029-.243h-.008c.008-.093-.007-.193-.007-.286a6 6 0 0 0-.607-.036l-.557-.035q-.065-.045-.129-.079c-.379-.236-.707-.55-1.064-.814l-.143-.129l.021-.193c.136-.893.793-1.593 1.48-2.13a4.6 4.6 0 0 0-1.401.43c-.458.221-.85.557-1.236.886c-.78-.2-1.615-.079-2.358.207c-.364.164-.693.407-1.05.593c.228-.229.493-.407.75-.608c.228-.171.4-.407.6-.607c1.486-1.529 3.565-2.45 5.687-2.558c1.408-.071 2.858.15 4.13.772c-.343-.014-.679-.036-1.022-.029c.765.229 1.658.472 2.087 1.215c-.393.014-.794.021-1.172.15c1.093.422 2.193.943 3.008 1.815c.486.521.821 1.2.807 1.929a5.3 5.3 0 0 0-.807-.515c.307 1.294.5 2.673.143 3.987"></svg:path>`,
})
export class LineiconsFirefoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFirefoxOriginalIcon],svg[lineicons-firefox-original-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61.6 29.2c-.1-.6-.1-.8-.1-.8s-.1.3-.6.8c-.1-1.4-.4-2.7-.7-4c-.4-1.7-1.1-3.2-1.8-4.7c-.4-1-1.1-2-1.7-2.8c-.1-.3-.4-.7-.7-1c-1.1-1.8-2.4-3-4-5.1c-1-1.7-1.7-3.4-2-5.2c-.4 1.1-.7 2.3-1 3.4c-1.6-1.6-2.8-2.7-3.5-3.4C41.5 3 42 1 42 1s-7.3 8.2-4.2 16.7c1.1 3 3 5.5 5.5 7.3c3.1 2.5 6.4 4.5 8.2 9.6c-1.4-2.7-3.5-4.9-6.1-6.5c.8 1.8 1.1 4 1.1 5.8c0 7.6-6.2 13.8-13.8 13.8c-1.1 0-2-.1-3.1-.4c-1.1-.1-2.4-.6-3.4-1.1c-1.7-1-3-2.3-4.1-3.8l.3.1c.6.1 1.1.4 1.7.4c2.4.4 4.8.1 7.1-.8c2.3-1.3 3.5-2.1 4.5-1.7c1.1.3 1.8-.7 1.1-1.7c-1.3-1.7-3.4-2.5-5.5-2.1c-2.3.3-4.3 1.8-7.1.4c-.1-.1-.4-.1-.6-.3c-.1-.1.6.1.4 0c-.6-.3-1.3-.7-1.8-1.1l.4.1c-.8-.4-1.4-1.1-1.8-2c-.4-1-.6-2-.1-3c.3-.4.7-.8 1.1-1.1c.4.1.6.3.6.3s-.1-.3-.3-.4h.1c.3.1 1.1.4 1.4.7c.3.1.4.3.7.6c0 0 .1-.1 0-.3c-.1-.3-.4-.6-.7-.8c.3.1.6.3.8.4c.1-.6.4-1.1.3-1.7c0-.3 0-.7-.1-1c-.1-.1.1-.3.1-.1c0-.1-.1-.3-.1-.4l.1-.1c.1-.1.3-.1.4-.3c.9-.6 1.9-1.2 2.9-1.5c.8-.4 1.4-.6 1.7-.7c.1-.1.4-.3.6-.4c.7-.6 1.1-1.4 1.3-2.3v-1c-.1-.4-.8-.8-4.8-1.1c-1.4-.1-2.5-1.3-2.8-2.7c.8-2 2.1-3.7 4-4.8c.1-.1-.4 0-.3-.1c.3-.1.7-.3 1.1-.4c.1-.1-.8-.4-1.6-.3c-.4 0-1 .1-1.4.4c.1-.1.8-.4.7-.4c-1.1.1-2 .6-3 1.1c0-.1 0-.1.1-.3c-.8.3-1.4.8-1.8 1.4v-.3c-.3.3-.7.6-.8.8c-2.1-.8-4.5-1.1-6.9-.6c-.4-.4-.8-.8-1.3-1.4h-.1c-.1-.1-.3-.4-.4-.8c-.3-.1-.3-.4-.4-.6c-.1 0-.1.1-.1.1c-.4-1.1-.6-2.1-.6-3.2c-.7.4-1.2 1.1-1.4 1.8c-.2.3-.2.4-.3.6v-.2c0-.1.1-.4.1-.4v.1c-.3.2-.4.5-.5.7c-.1.3-.1.4-.3.8v-.2v.1c-.8 1.8-1.4 4-1.6 5.9c-.1.4-.1.7-.1 1.1c-.6.7-1.1 1.4-1.6 2.1c-1.6 2.5-2.7 5.4-3.4 8.3C2.5 27 3.2 26 3.8 25c-1.3 3.2-2 6.9-2 10.6c.1-1.1.4-2.1.8-3.2c-.1 4.4.6 8.6 2.4 12.7c2.4 5.5 6.5 10 11.6 13.1c2 1.4 4.4 2.5 6.8 3.2c.3.1.7.1 1 .3c-.1 0-.1-.1-.3-.1c2.9 1 5.9 1.4 8.8 1.4c10.5 0 14-4 14.3-4.4c.4-.4 1-1.1 1.3-1.7c.1-.1.4-.1.6-.3l.1-.1l.1-.1c1.6-.8 3.1-1.7 4.5-2.8c2-1.4 3.5-3.5 4.2-6.1c.4-.8.4-1.8.1-2.8c.1-.1.1-.4.3-.6c2.3-3.5 3.5-7.8 3.7-12V32c-.4-.9-.4-1.9-.5-2.8M24 17c-.1.1-.1.3-.1.4c0-.2.1-.3.1-.4"></svg:path>`,
})
export class LineiconsFirefoxOriginalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFireworkRocket4Icon],svg[lineicons-firework-rocket-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.822 2.758a2.25 2.25 0 0 1 2.408 2.409l-.458 6.245a.75.75 0 0 1-1.278.475l-.947-.946l-6.494 6.495a.75.75 0 0 1-1.061 0l-.857-.857l-.994.994a1.276 1.276 0 0 0 1.804 1.804a.75.75 0 0 1 1.06 1.06a2.775 2.775 0 0 1-3.924-3.925l.993-.994l-.602-.603l-.024.025l-2.402 2.402a.75.75 0 1 1-1.06-1.06l2.402-2.403l.024-.023L5.557 13a.75.75 0 0 1 0-1.06l1.806-1.807a1 1 0 0 1 .085-.085l2.135-2.134a1 1 0 0 1 .081-.082l2.387-2.387l-.95-.95a.75.75 0 0 1 .476-1.279zm.912 2.299a.75.75 0 0 0-.803-.803l-4.61.339l5.075 5.075zM9.69 15.011l.833.834l1.749-1.749l-4.219-2.53l-.904.904l2.494 2.495zm-.543-4.54l4.218 2.532l1.124-1.124l-4.218-2.531zm2.217-2.217l4.219 2.531l.902-.902l-3.375-3.375z"></svg:path>`,
})
export class LineiconsFireworkRocket4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFireworksIcon],svg[lineicons-fireworks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M47.8 36.2c0-1.7-.6-3.2-1.8-4.4L23 8.9l1-1c1-1 1.3-2.6.8-3.9c-.6-1.3-1.9-2.2-3.3-2.2H5.3c-2 0-3.6 1.6-3.6 3.6v16.1c0 1.5.9 2.7 2.2 3.3c.5.1 1 .2 1.4.2c.9 0 1.8-.4 2.5-1l1-1l23 23c1.2 1.2 2.8 1.8 4.3 1.8c1.6 0 3.1-.6 4.3-1.8l5.4-5.4c1.3-1.2 2-2.7 2-4.4M33.1 25.4l-4.7 10.9l-6-6l4.6-11zM6.2 6.3h13l-13 13zM19.8 12l3.8 3.8l-4.6 11l-7-7zm23 25.4l-5.4 5.4c-.6.6-1.7.6-2.3 0l-3.2-3.2l4.7-10.9l6.2 6.2c.3.3.5.8.5 1.2c0 .6-.2 1-.5 1.3m2.4 15.5c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l5.5 5.5c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2zm5.4-5.4c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l9.1 9.1c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2zm11 0L56.1 42c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l5.5 5.5c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.4 0-3.2"></svg:path>`,
})
export class LineiconsFireworksIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFirstAidIcon],svg[lineicons-first-aid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.9 31.7h2.8v2.8c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-2.8h2.8c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-2.8v-2.8c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v2.8h-2.8c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2"></svg:path><svg:path fill="currentColor" d="M56.1 14.5H41.9v-2.8c0-4-3.3-7.3-7.3-7.3h-5.1c-4 0-7.3 3.3-7.3 7.3v2.8H7.9c-3.4 0-6.1 2.7-6.1 6.1v12.1c0 2 1 3.8 2.5 4.8V54c0 3.1 2.5 5.7 5.6 5.7h44.3c3.1 0 5.6-2.6 5.6-5.7V37.5c1.5-1.1 2.5-2.9 2.5-4.9v-12c-.1-3.4-2.8-6.1-6.2-6.1m-29.5-2.9c0-1.6 1.3-2.8 2.8-2.8h5.1c1.6 0 2.8 1.3 2.8 2.8v2.8H26.6zm-20.4 9c0-.9.8-1.6 1.7-1.6h48.4c.9 0 1.6.7 1.6 1.6v12.1c0 .7-.5 1.3-1 1.4c-1 .1-1.8.3-2.5.5l-14.8 4.1c-4.9 1.4-10.1 1.4-15 0L9.7 34.5c-.7-.2-1.4-.3-2-.4h-.2c-.7-.2-1.2-.7-1.2-1.4V20.6zm47.9 34.6H9.9c-.6 0-1.1-.5-1.1-1.2V39l14.4 4q4.35 1.2 8.7 1.2c4.35 0 5.9-.4 8.7-1.2l14.5-4.1V54c.1.7-.4 1.2-1 1.2"></svg:path>`,
})
export class LineiconsFirstAidIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFitbitIcon],svg[lineicons-fitbit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.068 3.492c0 .817-.666 1.493-1.47 1.493c-.8 0-1.469-.676-1.469-1.493c0-.812.669-1.492 1.47-1.492c.803 0 1.469.68 1.469 1.492m-1.47 2.711c-.865 0-1.534.68-1.534 1.562c0 .881.67 1.56 1.538 1.56c.864 0 1.534-.679 1.534-1.56c0-.882-.679-1.562-1.544-1.562zm0 4.207c-.865 0-1.602.744-1.602 1.626s.737 1.626 1.605 1.626c.865 0 1.601-.745 1.601-1.626c0-.882-.736-1.626-1.6-1.626zm0 4.268c-.865 0-1.534.68-1.534 1.558c0 .882.67 1.562 1.538 1.562c.864 0 1.534-.68 1.534-1.562c0-.81-.679-1.558-1.544-1.558zm0 4.34c-.8 0-1.469.676-1.469 1.493c0 .81.669 1.489 1.47 1.489c.803 0 1.469-.677 1.469-1.492c0-.814-.666-1.49-1.47-1.49M15.673 6c-.936 0-1.736.818-1.736 1.764s.8 1.76 1.736 1.76c.932 0 1.733-.813 1.733-1.76S16.606 6 15.673 6m0 4.204c-1.004 0-1.804.813-1.804 1.832a1.81 1.81 0 0 0 1.804 1.828c1 0 1.8-.812 1.8-1.831c0-1.016-.8-1.829-1.8-1.829m0 4.272c-.936 0-1.736.817-1.736 1.76c0 .95.8 1.764 1.736 1.764c.932 0 1.733-.817 1.733-1.764s-.8-1.76-1.733-1.76M19.875 10c-1.067 0-2 .882-2 2.035c0 1.084.865 2.034 2 2.034s2.004-.892 2.004-2.044c-.068-1.156-.936-2.031-2.004-2.031zM7.46 6.409c-.732 0-1.33.611-1.33 1.356c0 .744.598 1.355 1.33 1.355c.737 0 1.335-.611 1.335-1.355c0-.745-.598-1.353-1.335-1.353zm0 4.203c-.8 0-1.402.607-1.402 1.424c0 .814.595 1.424 1.396 1.424c.803 0 1.396-.61 1.396-1.424c0-.817-.605-1.424-1.406-1.424zm0 4.268c-.732 0-1.33.611-1.33 1.355c0 .748.598 1.356 1.33 1.356c.737 0 1.335-.614 1.335-1.365a1.34 1.34 0 0 0-1.335-1.355zm-4.134-4.066c-.67 0-1.203.542-1.203 1.222c0 .676.534 1.218 1.203 1.218c.666 0 1.2-.542 1.2-1.218c0-.68-.534-1.222-1.2-1.222"></svg:path>`,
})
export class LineiconsFitbitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFlagIcon],svg[lineicons-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M50.7 11.5c-1.2-1.3-2.8-2.1-4.6-2.1H16.3V4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v56c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V36.8H44c3.1 0 5.7-2.3 6.1-5.3l2-15.2c.2-1.8-.3-3.5-1.4-4.8m-5 19.4c-.1.8-.8 1.4-1.6 1.4H16.3V13.9H46c.6 0 1 .3 1.2.5s.5.6.4 1.3z"></svg:path>`,
})
export class LineiconsFlagIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFlag1Icon],svg[lineicons-flag-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.273 3.41a.75.75 0 1 0-1.5 0v18.5a.75.75 0 0 0 1.5 0v-6h12.75a.75.75 0 0 0 .684-1.058l-1.973-4.384a.75.75 0 0 1 0-.616l1.973-4.384a.75.75 0 0 0-.684-1.058H6.273zm0 2.5h11.59l-1.497 3.327a2.25 2.25 0 0 0 0 1.847l1.497 3.326H6.273z"></svg:path>`,
})
export class LineiconsFlag1Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFlag2Icon],svg[lineicons-flag-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.273 3.41a.75.75 0 1 0-1.5 0v18.5a.75.75 0 0 0 1.5 0v-6h5.25a2.25 2.25 0 0 0 2.25 2.25h5.25a.75.75 0 0 0 .684-1.058l-1.973-4.384a.75.75 0 0 1 0-.616l1.973-4.384a.75.75 0 0 0-.684-1.058h-6a2.25 2.25 0 0 0-2.25-2.25h-4.5zm0 2.5h4.5a.75.75 0 0 1 .75.75v7.75h-5.25zm6.75 2.25h4.84l-1.497 3.327a2.25 2.25 0 0 0 0 1.847l1.497 3.326h-4.09a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class LineiconsFlag2Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFlagAltIcon],svg[lineicons-flag-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m51.9 33.7l-3.4-8l3.4-8c.1-.1.1-.3.1-.4v-.5c0-1.2-1-2.3-2.3-2.3H34.3v-2.8c0-1.2-1-2.3-2.3-2.3H16.4V4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v56c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V31.7h13.3v1.8c0 1.8 1.5 3.3 3.3 3.3h16.7c1.2 0 2.3-1 2.3-2.3c.1-.3 0-.6-.1-.8m-35.5-6.5V13.9h13.3v13.3zM34.3 19h12.2l-2.8 6.7l2.8 6.7H34.3z"></svg:path>`,
})
export class LineiconsFlagAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFlagsAlt1Icon],svg[lineicons-flags-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M63.2 23.7c-.3-1.2-1.6-1.9-2.8-1.6c-5.9 1.7-16.7 2.7-28 2.7c-11.9 0-22.9-1.1-28.7-2.9c-1.2-.4-2.4.3-2.8 1.5c-.3.9 0 1.9.8 2.4l4.7 12.7c.4 1 1.3 1.8 2.4 1.9h.4c.9 0 1.8-.4 2.4-1.2l7.6-10.4c1.4.1 2.9.2 4.4.3l6 11.5c.5 1 1.5 1.6 2.6 1.6s2.1-.6 2.6-1.6L41 29.1c1.5-.1 3-.1 4.4-.3l7.5 10.4q.9 1.2 2.4 1.2h.4c1.1-.2 2-.9 2.3-1.9l4.6-12.4c.4-.5.8-1.5.6-2.4M9.5 34.2L7 27.3c2 .4 4.3.7 6.8 1zM32 35.9l-3.5-6.6h7zm22.5-1.7l-4.2-5.8c2.4-.3 4.7-.6 6.7-1z"></svg:path>`,
})
export class LineiconsFlagsAlt1Icon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFlickrIcon],svg[lineicons-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.645 12A4.323 4.323 0 1 1 2 12a4.323 4.323 0 0 1 8.645 0M22 12a4.323 4.323 0 1 1-8.645 0A4.323 4.323 0 0 1 22 12"></svg:path>`,
})
export class LineiconsFlickrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFloppyDisk1Icon],svg[lineicons-floppy-disk-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 3.25A2.25 2.25 0 0 0 3.25 5.5v13a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25V8.614a2.25 2.25 0 0 0-.66-1.592l-3.12-3.114a2.25 2.25 0 0 0-1.59-.658zm0 1.5h.75v.75A2.25 2.25 0 0 0 8.5 7.75h3a2.25 2.25 0 0 0 2.25-2.25v-.75h1.63a.75.75 0 0 1 .53.22l3.12 3.113c.14.141.22.332.22.531V18.5a.75.75 0 0 1-.75.75h-1.75V15.5a2.25 2.25 0 0 0-2.25-2.25h-5a2.25 2.25 0 0 0-2.25 2.25v3.75H5.5a.75.75 0 0 1-.75-.75v-13a.75.75 0 0 1 .75-.75m2.25 0h4.5v.75a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75zm7.5 14.5h-6.5V15.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75z"></svg:path>`,
})
export class LineiconsFloppyDisk1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFlowerIcon],svg[lineicons-flower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M49.6 20.8c-1.9 0-4.6.7-8.5 2.1c1.4-3.8 2.1-6.6 2.1-8.5c0-7-5-12.7-11.2-12.7S20.8 7.4 20.8 14.4c0 1.9.7 4.6 2.1 8.5c-3.8-1.4-6.6-2.1-8.5-2.1c-7 0-12.7 5-12.7 11.2s5.7 11.2 12.7 11.2c1.9 0 4.6-.7 8.5-2.1c-1.4 3.8-2.1 6.6-2.1 8.5c0 7 5 12.7 11.2 12.7s11.2-5.7 11.2-12.7c0-1.9-.7-4.6-2.1-8.5c3.8 1.4 6.6 2.1 8.5 2.1c7 0 12.7-5 12.7-11.2s-5.7-11.2-12.7-11.2M26.7 32c0-2.9 2.4-5.3 5.3-5.3s5.3 2.4 5.3 5.3s-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3M32 6.3c3.7 0 6.7 3.7 6.7 8.2c0 1.1-.5 3.5-2.5 8.8q-1.95-.9-4.2-.9c-1.5 0-2.9.3-4.2 1c-2.1-5.2-2.5-7.6-2.5-8.8c0-4.7 3-8.3 6.7-8.3M6.3 32c0-3.7 3.7-6.7 8.2-6.7c1.1 0 3.5.5 8.8 2.5c-.6 1.3-1 2.7-1 4.2s.3 2.9 1 4.2c-5.2 2.1-7.6 2.5-8.8 2.5c-4.6 0-8.2-3-8.2-6.7M32 57.8c-3.7 0-6.7-3.7-6.7-8.2c0-1.1.5-3.5 2.5-8.8c1.3.6 2.7 1 4.2 1s2.9-.3 4.2-1c2.1 5.2 2.5 7.6 2.5 8.8c0 4.5-3 8.2-6.7 8.2m17.6-19.1c-1.1 0-3.5-.5-8.8-2.5c.6-1.3 1-2.7 1-4.2s-.3-2.9-1-4.2c5.2-2.1 7.6-2.5 8.8-2.5c4.5 0 8.2 3 8.2 6.7s-3.7 6.7-8.2 6.7"></svg:path>`,
})
export class LineiconsFlowerIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFlower2Icon],svg[lineicons-flower-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.32 2.068a.72.72 0 0 0-.61 0h-.01s-.02.01-.03.02q-.045.03-.12.06A6.7 6.7 0 0 0 9.906 3.39a6.25 6.25 0 0 0-1.814 4.458v.21h-.21c-2.084 0-3.536.912-4.458 1.813a6.7 6.7 0 0 0-1.002 1.232c-.11.17-.19.311-.24.411q-.045.075-.06.12c0 .02-.01.03-.02.04v.02c-.09.2-.09.421 0 .611v.02l.02.04c.01.03.04.07.06.12a6.7 6.7 0 0 0 1.242 1.643a6.25 6.25 0 0 0 4.458 1.814h.21v.21c0 2.084.912 3.537 1.813 4.458a6.7 6.7 0 0 0 1.643 1.242q.075.045.12.06c.02 0 .03.01.04.02h.01c.201.09.421.09.612 0h.01s.02 0 .03-.01h.01c.03-.01.07-.04.12-.06a6.7 6.7 0 0 0 1.643-1.242a6.25 6.25 0 0 0 1.813-4.458v-.21h.21c2.084 0 3.537-.912 4.458-1.813a6.7 6.7 0 0 0 1.242-1.643a1 1 0 0 0 .06-.12c0-.02.01-.03.02-.04v-.02c.09-.2.09-.421 0-.612c0 0 0-.03-.01-.04v-.01a1 1 0 0 1-.06-.12a6.7 6.7 0 0 0-1.242-1.643a6.25 6.25 0 0 0-4.458-1.813h-.21v-.21c0-2.084-.912-3.536-1.813-4.458a6.7 6.7 0 0 0-1.232-1.002c-.17-.11-.31-.19-.411-.24a1 1 0 0 0-.12-.06c-.02 0-.03-.01-.04-.02h-.01m-3.767 11.46c-.13.28-.23.58-.31.901c-.13 0-.27.01-.411.01c-1.603 0-2.695-.69-3.416-1.382a5.7 5.7 0 0 1-.792-.962l-.06-.09l.06-.09c.17-.26.431-.611.792-.962c.711-.701 1.813-1.382 3.416-1.382c.14 0 .28 0 .41.01c.08.32.19.62.311.901c-.21.471-.32.982-.32 1.533s.12 1.062.32 1.533zm2.374-9.096c.35-.36.701-.621.962-.792L12 3.6l.09.06c.26.17.611.431.962.792c.701.711 1.382 1.813 1.382 3.416q0 .675-.12 1.202a3.75 3.75 0 0 0-2.324-.802a3.75 3.75 0 0 0-2.324.802q-.12-.525-.12-1.202c0-1.603.691-2.695 1.382-3.416zm3.316 7.563a2.257 2.257 0 0 1-2.254 2.254a2.257 2.257 0 0 1-2.254-2.254a2.257 2.257 0 0 1 2.254-2.254a2.257 2.257 0 0 1 2.254 2.254m-1.192 7.563c-.35.36-.701.621-.962.792l-.09.06l-.09-.06a5.7 5.7 0 0 1-.962-.792c-.7-.711-1.382-1.813-1.382-3.416q0-.675.12-1.202a3.75 3.75 0 0 0 2.324.802c.882 0 1.683-.3 2.324-.802q.12.525.12 1.202c0 1.603-.69 2.695-1.382 3.416zm7.293-7.473c-.17.26-.431.611-.792.962c-.71.701-1.813 1.382-3.416 1.382c-.14 0-.28 0-.41-.01c-.08-.32-.19-.62-.31-.901c.21-.471.32-.982.32-1.533s-.12-1.062-.32-1.533c.13-.28.23-.58.31-.901c.13 0 .27-.01.41-.01c1.603 0 2.695.69 3.416 1.382a5.7 5.7 0 0 1 .852 1.052l-.06.09z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsFlower2Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFlutterIcon],svg[lineicons-flutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.953 11.232l-5.301 5.383l5.3 5.385h-6.059l-2.272-2.307l-3.03-3.078l5.302-5.383zM13.893 2L4.047 12l3.03 3.078L19.953 2z"></svg:path>`,
})
export class LineiconsFlutterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFolderIcon],svg[lineicons-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61 19.6v-3.3c0-3.4-2.7-6.1-6.1-6.1H32.7l-.3-.8c-.7-1.8-2.4-2.9-4.3-2.9H7.9c-3.4 0-6.1 2.7-6.1 6.1v38.9c0 3.4 2.7 6.1 6.1 6.1h48.3c3.4 0 6.1-2.7 6.1-6.1V22.7c0-1.2-.5-2.3-1.3-3.1m-6.1-5c.9 0 1.6.7 1.6 1.6v1.9H35.9l-1.4-3.5zm2.9 36.9c0 .9-.7 1.6-1.6 1.6H7.9c-.9 0-1.6-.7-1.6-1.6v-39c0-.9.7-1.6 1.6-1.6l20.3.1l4.1 10.2c.3.9 1.2 1.4 2.1 1.4h23.3s.1 0 .1.1z"></svg:path>`,
})
export class LineiconsFolderIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFolder1Icon],svg[lineicons-folder-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 6a2.25 2.25 0 0 1 2.25-2.25H8.5a2.25 2.25 0 0 1 1.8.9l1.35 1.8a.75.75 0 0 0 .6.3h7.5A2.25 2.25 0 0 1 22 9v9a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 18zm2.25-.75A.75.75 0 0 0 3.5 6v12c0 .414.336.75.75.75h15.5a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-7.5a2.25 2.25 0 0 1-1.8-.9L9.1 5.55a.75.75 0 0 0-.6-.3z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsFolder1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFordIcon],svg[lineicons-ford-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.003 8.157C6.475 8.157 2 9.881 2 12.003c0 2.123 4.475 3.84 10.003 3.84S22 14.126 22 12.003s-4.475-3.846-9.997-3.846m0 7.29c-5.3 0-9.61-1.533-9.61-3.444c0-1.91 4.306-3.457 9.61-3.457s9.617 1.553 9.617 3.457c0 1.905-4.3 3.445-9.617 3.445M16 11.824c-.228-.025-.511.17-.741.459c-.116.145-.24.42-.259.582c-.025.164.019.329.078.373c.06.047.314.183.716-.228a3.5 3.5 0 0 0 .446-.604l-.072-.019c.137-.256.109-.531-.168-.563m-3.996-2.992c-5.148 0-9.305 1.42-9.305 3.17c0 1.748 4.16 3.178 9.305 3.178s9.315-1.423 9.315-3.179s-4.173-3.17-9.315-3.17m-4.347 4.852c-.561 0-1.06-.373-1.072-1.04c-.006-.406.315-.905.916-1.054c.071 0 .096.025.096.066c0 .026-.025.057-.084.086c-.174.066-.476.414-.476.734c0 .243.15.512.402.569c.068.019.133.013.199.013c.626 0 1.33-.715 2.09-1.803c-.122.006-.645.066-.776.215c-.06.047-.096.019-.109-.032c0-.012.019-.06.04-.085c.206-.237.826-.288.975-.307c.555-.867 1.265-1.417 1.458-1.458q-.006 0-.016-.003c-.495-.117-.947-.215-1.301-.215c-1.246 0-1.8.544-1.776 1.04c.013.203.175.335.411.288c.259-.047.62-.294.71-.512c.02-.045.072-.054.09-.038c.038.031.026.079.026.079c-.031.256-.42.961-1.09.961c-.374 0-.626-.354-.62-.702c.006-.648.657-1.303 2.264-1.303c.302 0 .645.025 1.018.092c.433.079 1.51.262 2.386.275c.324 0 .735.013 1.071-.038c.355-.06.277-.073.418-.073c.127 0 .127.054.127.105c0 .208-.722.61-1.336.61c-.903 0-1.84-.414-2.326-.55a.07.07 0 0 1 .015.085a.7.7 0 0 1-.096.104c-.128.117-.567.409-1.046 1.225c.386-.02.837-.098.837-.098s-.025-.086-.025-.159c.02-.281.181-.452.387-.42a.23.23 0 0 1 .193.224a.6.6 0 0 1-.168.354c-.06.045-.122.092-.2.13c0 .073.097.13.18.14c-.018.072-.012.104-.043.097c-.193 0-.27-.19-.27-.19c-.26.048-.508.08-1.02.13c-1.282 2.11-1.684 2.458-2.469 2.458zm8.844-.348c.277-.013.788-.55.91-.68c.024-.032.071-.092.096-.092s.078.025.078.067c0 .025-.06.123-.103.183c-.258.329-.685.832-1.168.845c-.24 0-.33-.098-.361-.288c-.109.098-.483.269-.866.269a.52.52 0 0 1-.507-.348a.75.75 0 0 1-.038-.49c-.174.091-.336.104-.567.098c-.27-.007-.439-.13-.523-.453c-.311.576-.324.595-.638 1.199h-.548l.704-1.211a1.6 1.6 0 0 0 .168-.434c.018-.079-.038-.152-.122-.158c-.09 0-.236.092-.38.228c0 0-.361.392-.626.79c-.252.38-.685.813-1.155.813c-.343 0-.651-.19-.716-.556c0 0-.035.085-.337.262c-.025.013-.09.05-.109.038a.28.28 0 0 1-.096-.164c.018.006.059-.026.18-.124c.24-.183.29-.329.29-.329c.06-.123.162-.319.234-.458c.193-.392.529-.794 1.077-.813c.09 0 .115.038.134.073c.053.038.034.117.034.117a1.23 1.23 0 0 0-.812.512c-.097.146-.2.38-.219.55c-.037.295.097.49.296.538c.374.06.685-.215.928-.642c.063-.11.11-.398.11-.557a.62.62 0 0 0-.15-.385c0-.111.072-.184.156-.184c.025 0 .05 0 .078.025c.127.13.199.38.199.57c0 .066 0 .13-.013.196c.271-.335.614-.766.879-.851c.053-.025.102-.025.155-.025c.483-.013.418.433.418.433c.258-.3.439-.411.675-.398c.259.012.35.196.35.341c-.007.17-.132.367-.343.373c-.187 0-.296-.091-.355-.262c-.122.044-.181.13-.206.3a.324.324 0 0 0 .33.386c.355 0 .51-.158.639-.275c.439-.42.685-.857 1.317-.85c.38.005.476.312.542.445l.831-1.426h.511l-1.38 2.483c-.025.053-.09.151-.084.227c.013.124.169.092.11.092zm-5.089-2.533c.038-.038.103-.159.09-.238c-.005-.038-.024-.085-.07-.079c-.097.02-.157.067-.181.165a.42.42 0 0 0 0 .256s.062.006.161-.104" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsFordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsForwardIcon],svg[lineicons-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M58.1 4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v24.9L16.2 4.5c-2-1.3-4.6-1.4-6.8-.3C7.3 5.4 5.9 7.6 5.9 10v44c0 2.4 1.3 4.6 3.5 5.8c1 .5 2.1.8 3.2.8c1.3 0 2.5-.4 3.6-1.1l37.4-24.4V60c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V4zM13.7 55.7c-.7.4-1.5.5-2.2.1c-.3-.2-1.1-.7-1.1-1.8V10c0-1.1.8-1.6 1.1-1.8s.7-.3 1-.3c.4 0 .8.1 1.2.4L50.1 32z"></svg:path>`,
})
export class LineiconsForwardIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFrameExpandIcon],svg[lineicons-frame-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.3 1.8H7.9c-3.4 0-6.1 2.7-6.1 6.1v11.4c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V7.9C6.3 7 7 6.3 7.9 6.3h11.4c1.2 0 2.3-1 2.3-2.3s-1.1-2.2-2.3-2.2m36.8 0H44.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h11.4c.9 0 1.6.7 1.6 1.6v11.4c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V7.9c0-3.4-2.8-6.1-6.2-6.1M60 42.5c-1.2 0-2.3 1-2.3 2.3v11.4c0 .9-.7 1.6-1.6 1.6H44.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h11.4c3.4 0 6.1-2.7 6.1-6.1V44.7c.1-1.2-1-2.2-2.2-2.2M19.3 57.8H7.9c-.9 0-1.6-.7-1.6-1.6V44.7c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v11.4c0 3.4 2.7 6.1 6.1 6.1h11.4c1.2 0 2.3-1 2.3-2.3s-1-2.1-2.2-2.1"></svg:path>`,
})
export class LineiconsFrameExpandIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFramerIcon],svg[lineicons-framer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.666 2v6.667H12L5.333 2zM5.333 8.667H12l6.666 6.666H12V22l-6.667-6.667z"></svg:path>`,
})
export class LineiconsFramerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFreshJuiceIcon],svg[lineicons-fresh-juice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M55.9 32.4c-2-.4-4 .1-5.7 1.4c.9-1.8 2.5-4 3.8-5.4c.8-.9.8-2.3-.1-3.2c-.9-.8-2.3-.8-3.2.1s-4.5 5.1-5.5 8.9c-.3-.2-.7-.3-1-.6c-1.7-1.2-3.7-1.6-5.5-1.3c-4.1.7-6.9 4.5-6.3 8.7c1.4 9.7 4.3 13.5 6.5 14.9q1.65 1.2 3.6 1.2c.4 0 .7 0 1.1-.1h.2c1.1-.2 1.8-.6 2.5-1.3c.6-.6 1.5-.6 2.1 0c.3.3 1.2 1.1 2.6 1.3c1.8.3 3.3-.1 4.8-1.1c2.1-1.5 4.9-5.4 6.4-14.9c.6-4-2.2-7.9-6.3-8.6m1.8 8c-1.4 9-3.9 11.4-4.6 11.9c-.4.3-.7.4-1.5.3h-.1c-1.1-1.1-2.7-1.7-4.2-1.7s-3 .6-4.2 1.7c0 0-.1 0-.2.1c-.7.1-1 0-1.4-.3c-.7-.5-3.2-2.9-4.6-11.9c-.3-1.8.8-3.3 2.6-3.6c.9-.2 1.8.3 2.2.5c1.7 1.2 3.6 1.9 5.6 1.9h.5c2-.1 3.7-.8 5.2-1.9c.6-.5 1.4-.7 2.2-.5c1.6.2 2.8 1.9 2.5 3.5M29.5 6.8H21c-2.6 0-4.9 1.8-5.5 4.4L14.3 17H7c-1.5 0-2.9.6-3.9 1.7s-1.5 2.5-1.4 4l2.5 29.7c.2 2.7 2.5 4.8 5.2 4.8h13.7c2.7 0 5-2.1 5.2-4.8l2.5-29.7c.1-1.5-.4-2.9-1.4-4S27 17 25.5 17h-6.8l1.1-4.8c.1-.5.6-.9 1.1-.9h8.4c1.2 0 2.3-1 2.3-2.3s-.9-2.2-2.1-2.2m-6.3 45.9H9.5c-.4 0-.7-.3-.7-.7L6.9 30.4h18.8L23.9 52c0 .4-.3.7-.7.7m3-31c.1.1.2.3.2.5l-.3 3.6H6.6l-.3-3.6c0-.3.1-.5.2-.5c.1-.1.3-.2.5-.2h18.7c.3 0 .5.1.5.2"></svg:path>`,
})
export class LineiconsFreshJuiceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFriendlyIcon],svg[lineicons-friendly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 .8C14.8.8.8 14.8.8 32s14 31.3 31.3 31.3s31.3-14 31.3-31.3S49.2.8 32 .8m0 58c-14.8 0-26.8-12-26.8-26.8S17.3 5.3 32 5.3s26.8 12 26.8 26.8s-12 26.7-26.8 26.7"></svg:path><svg:circle cx="20" cy="22.8" r="4" fill="currentColor"></svg:circle><svg:circle cx="44" cy="22.8" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M48.2 31.8c-1.2 0-2.3 1-2.3 2.3C46 41.2 40.2 47 33.1 47c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3c9.6 0 17.4-7.8 17.4-17.4c0-1.3-1-2.4-2.3-2.4"></svg:path>`,
})
export class LineiconsFriendlyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFullScreenIcon],svg[lineicons-full-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 21.5c1.2 0 2.3-1 2.3-2.3V5c0-1.8-1.4-3.2-3.2-3.2H44.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h9.8L32 28.8L9.4 6.3h9.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H5C3.2 1.8 1.8 3.2 1.8 5v14.3c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V9.4L28.8 32L6.3 54.6v-9.8c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3V59c0 1.8 1.4 3.2 3.2 3.2h14.3c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H9.4L32 35.2l22.6 22.6h-9.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H59c1.8 0 3.2-1.4 3.2-3.2V44.7c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v9.8L35.2 32L57.8 9.4v9.8c0 1.3 1 2.3 2.2 2.3"></svg:path>`,
})
export class LineiconsFullScreenIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFunnelIcon],svg[lineicons-funnel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.2 62.2c-.6 0-1.2-.2-1.8-.5c-1-.6-1.5-1.6-1.5-2.7V27.2L5.4 6.9c-.7-1-.9-2.3-.4-3.4s1.7-1.8 3-1.8h48c1.3 0 2.5.8 3 2s.3 2.4-.6 3.4l-17.2 20v23.3c0 .6-.2 1.5-1.1 2.4l-.2.2l-12 8.9c-.5.2-1.1.3-1.7.3m.5-37.6c.5.6.8 1.5.8 2.1v29.9l9.3-6.9v-23c0-.5 0-1.4.8-2.2L53.2 6.3H10.8zm-3.5 2.9l.1.1zM55.1 4.1"></svg:path>`,
})
export class LineiconsFunnelIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsFunnel1Icon],svg[lineicons-funnel-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.063 4.479a2.25 2.25 0 0 1 2.25-2.25h11.25a2.25 2.25 0 0 1 2.25 2.25v1.36a3.75 3.75 0 0 1-.77 2.276l-4.327 5.666a.75.75 0 0 0-.153.455v6.238c0 1.36-1.484 2.2-2.65 1.5l-1.508-.904a2.25 2.25 0 0 1-1.092-1.93v-4.904a.75.75 0 0 0-.154-.455L4.832 8.115a3.75 3.75 0 0 1-.77-2.276zm2.25-.75a.75.75 0 0 0-.75.75v1.36c0 .494.162.973.461 1.366l4.327 5.665c.3.392.461.872.461 1.366v4.905a.75.75 0 0 0 .365.643l1.507.904a.25.25 0 0 0 .379-.214v-6.238c0-.494.162-.974.461-1.366l4.327-5.665c.3-.393.462-.872.462-1.366v-1.36a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsFunnel1Icon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGalleryIcon],svg[lineicons-gallery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.145 6.935a1.625 1.625 0 0 0 0 3.25h.01a1.625 1.625 0 0 0 0-3.25z"></svg:path><svg:path fill="currentColor" d="M3.75 5.5A2.25 2.25 0 0 1 6 3.25h13a2.25 2.25 0 0 1 2.25 2.25v13A2.25 2.25 0 0 1 19 20.75H6a2.25 2.25 0 0 1-2.25-2.25zM6 4.75a.75.75 0 0 0-.75.75v10.08l1.451-1.9a2.25 2.25 0 0 1 3.584.01L11.5 15.3a.75.75 0 0 0 1.293-.168l1.978-4.847c.667-1.635 2.872-1.9 3.906-.468l1.073 1.484V5.5a.75.75 0 0 0-.75-.75zM5.25 18.5c0 .414.336.75.75.75h13a.75.75 0 0 0 .75-.75v-4.64l-2.288-3.164a.75.75 0 0 0-1.302.156l-1.978 4.846c-.66 1.616-2.827 1.899-3.879.506l-1.215-1.61a.75.75 0 0 0-1.195-.003l-2.492 3.264a.8.8 0 0 1-.151.148z"></svg:path>`,
})
export class LineiconsGalleryIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGameIcon],svg[lineicons-game-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M59.4 25.1c-1.9-1.9-4.6-3.1-7.3-3.1H34.2V6.6c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v15.5H12c-5.6 0-10.2 4.5-10.2 10.1v17.4c0 5.6 4.6 10.1 10.2 10.1c5.1 0 9.3-3.7 10.1-8.4h20c.8 4.8 5 8.5 10.1 8.5c5.6 0 10.2-4.5 10.2-10.1V32.2c-.1-2.6-1.1-5.1-3-7.1m-1.7 24.5c0 3.1-2.5 5.6-5.7 5.6s-5.7-2.5-5.7-5.6c0-1.6-1.3-2.9-2.9-2.9H20.6c-1.6 0-2.9 1.3-2.9 2.9c0 3-2.6 5.5-5.7 5.5c-3.2 0-5.7-2.5-5.7-5.6V32.2c0-3.1 2.6-5.6 5.7-5.6h40.1c1.5 0 3 .6 4.1 1.7c1 1 1.6 2.4 1.6 3.9v17.4z"></svg:path><svg:path fill="currentColor" d="M21.1 34.8h-2.2v-2.1c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v2.1h-2.2c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h2.2v2.1c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-2.1h2.2c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3M49 35h.4c.1 0 .3-.1.4-.1c.1-.1.3-.1.4-.2l.3-.3c.4-.4.7-1 .7-1.6s-.2-1.2-.7-1.6l-.3-.3c-.1-.1-.3-.1-.4-.2s-.3-.1-.4-.1c-.7-.1-1.5.1-2 .6c-.4.4-.7 1-.7 1.6s.2 1.2.7 1.6c.4.3 1 .6 1.6.6m-2.8.5l-.3-.3c-.1-.1-.3-.1-.4-.2s-.3-.1-.4-.1c-.7-.1-1.5.1-2 .6c-.4.4-.7 1-.7 1.6s.2 1.2.7 1.6c.2.2.5.4.7.5c.3.1.6.2.9.2h.4c.2 0 .3-.1.4-.1s.3-.1.4-.2l.3-.3c.4-.4.7-1 .7-1.6c0-.7-.3-1.3-.7-1.7m1.2 4.8c-.4.4-.7 1-.7 1.6s.2 1.2.7 1.6l.3.3c.1.1.3.2.4.2c.1.1.3.1.4.1h.8c.1 0 .3-.1.4-.1c.1-.1.3-.1.4-.2l.3-.3c.4-.4.7-1 .7-1.6s-.2-1.2-.7-1.6c-.6-.9-2.1-.9-3 0m8-4.1c-.1-.1-.1-.3-.2-.4l-.3-.3c-.5-.5-1.3-.8-2-.6c-.1 0-.3.1-.4.1s-.3.1-.4.2l-.3.3l-.3.3c-.1.1-.2.3-.2.4c-.1.1-.1.3-.1.4v.4c0 .6.2 1.2.7 1.6c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.4-.4.7-1 .7-1.6v-.4c-.3-.1-.3-.2-.4-.4"></svg:path>`,
})
export class LineiconsGameIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGamePadModern1Icon],svg[lineicons-game-pad-modern-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.303 7.739a.75.75 0 0 1 .75.75v1.004h1.005a.75.75 0 0 1 0 1.5h-1.005V12a.75.75 0 0 1-1.5 0v-1.007H7.547a.75.75 0 0 1 0-1.5h1.006V8.489a.75.75 0 0 1 .75-.75m5.176 4.007a.75.75 0 0 1 .75-.75h.877a.75.75 0 0 1 0 1.5h-.877a.75.75 0 0 1-.75-.75m.75-3.757a.75.75 0 1 0 0 1.5h.877a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.402 5.018a30.8 30.8 0 0 1 11.188 0l1.565.29a2.25 2.25 0 0 1 1.825 1.944l1.167 9.73a2.25 2.25 0 0 1-2.234 2.518h-2.097a2.25 2.25 0 0 1-1.915-1.07l-1.434-2.324a.75.75 0 0 0-.638-.356h-3.667a.75.75 0 0 0-.638.356l-1.433 2.325A2.25 2.25 0 0 1 6.175 19.5H4.078a2.25 2.25 0 0 1-2.234-2.518l1.168-9.73a2.25 2.25 0 0 1 1.824-1.944zm10.915 1.475a29.3 29.3 0 0 0-10.642 0l-1.566.29a.75.75 0 0 0-.608.648l-1.167 9.73a.75.75 0 0 0 .744.839h2.097a.75.75 0 0 0 .639-.357l1.433-2.324a2.25 2.25 0 0 1 1.915-1.07h3.667c.78 0 1.505.405 1.915 1.07l1.434 2.324a.75.75 0 0 0 .638.357h2.097a.75.75 0 0 0 .745-.84L19.49 7.43a.75.75 0 0 0-.609-.647z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsGamePadModern1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGatsbyIcon],svg[lineicons-gatsby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.452 2 2 6.452 2 12s4.452 10 10 10s10-4.452 10-10S17.548 2 12 2M4.129 12.097l7.742 7.742c-4.226-.032-7.677-3.484-7.742-7.742m9.645 7.548l-9.42-9.42C5.195 6.743 8.259 4.13 12 4.13a7.9 7.9 0 0 1 6.355 3.226l-1.097.968C16.13 6.645 14.161 5.58 12 5.58c-2.774 0-5.129 1.774-6.032 4.225l8.226 8.226c2-.742 3.548-2.42 4.032-4.516h-3.42V12h5.033c.032 3.742-2.613 6.871-6.065 7.645"></svg:path>`,
})
export class LineiconsGatsbyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGauge1Icon],svg[lineicons-gauge-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 14.31a8.5 8.5 0 0 0-.793-3.583l-1.054.609a.75.75 0 1 1-.75-1.3l1.055-.608a8.5 8.5 0 0 0-6.208-3.584V7.06a.75.75 0 0 1-1.5 0V5.844a8.5 8.5 0 0 0-6.207 3.583l1.054.609a.75.75 0 0 1-.75 1.3l-1.054-.61q-.077.165-.146.332a8.5 8.5 0 0 0 .145 6.836l1.053-.607a.75.75 0 1 1 .75 1.299l-1.732 1a.75.75 0 0 1-1.044-.312a10 10 0 1 1 17.34.04a.75.75 0 0 1-1.076.241l-1.68-.97a.75.75 0 0 1 .75-1.299l1.054.609q.077-.164.146-.332a8.5 8.5 0 0 0 .647-3.252"></svg:path><svg:path fill="currentColor" d="m12 10.186l.664-.35a.75.75 0 0 0-1.327 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m12 10.186l-.663-.35l-.001.003l-.004.007l-.014.026l-.05.098a37 37 0 0 0-.726 1.483c-.198.43-.402.899-.558 1.323c-.142.387-.289.85-.289 1.215a2.305 2.305 0 1 0 4.61 0c0-.365-.146-.828-.289-1.215a18 18 0 0 0-.557-1.323a37 37 0 0 0-.726-1.483l-.05-.098l-.014-.026l-.004-.007l-.001-.003zm-.096 1.894l.096-.207l.097.207c.19.414.375.842.511 1.213q.102.279.155.478a2 2 0 0 1 .042.22a.805.805 0 0 1-1.61 0l.001-.015l.007-.047q.01-.06.035-.159c.034-.13.086-.292.154-.477c.136-.37.321-.799.512-1.213" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsGauge1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGear1Icon],svg[lineicons-gear-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 8.774a3.835 3.835 0 1 0 0 7.67a3.835 3.835 0 0 0 0-7.67M9.663 12.61a2.335 2.335 0 1 1 4.67 0a2.335 2.335 0 0 1-4.67 0"></svg:path><svg:path d="M2.58 8.922a2.234 2.234 0 0 0 .819 3.052a.733.733 0 0 1 0 1.27a2.234 2.234 0 0 0-.818 3.052l1.516 2.626a2.234 2.234 0 0 0 3.052.818a.734.734 0 0 1 1.101.635c0 1.234 1 2.234 2.234 2.234h3.033c1.233 0 2.233-1 2.233-2.233a.734.734 0 0 1 1.1-.636a2.233 2.233 0 0 0 3.051-.817l1.517-2.627a2.234 2.234 0 0 0-.818-3.051a.734.734 0 0 1 0-1.271a2.234 2.234 0 0 0 .818-3.052L19.9 6.296a2.233 2.233 0 0 0-3.05-.817a.734.734 0 0 1-1.1-.636c0-1.233-1-2.234-2.234-2.234h-3.033c-1.234 0-2.234 1-2.234 2.234a.734.734 0 0 1-1.101.636a2.234 2.234 0 0 0-3.052.818zm1.569 1.753a.734.734 0 0 1-.27-1.003l1.517-2.625a.734.734 0 0 1 1.003-.269c1.49.86 3.351-.215 3.351-1.935c0-.405.329-.734.734-.734h3.033c.405 0 .733.329.733.734c0 1.72 1.861 2.794 3.35 1.935a.733.733 0 0 1 1.002.268l1.517 2.626c.202.351.082.8-.269 1.003c-1.49.86-1.49 3.01 0 3.869c.35.202.471.651.269 1.002l-1.517 2.627a.733.733 0 0 1-1.002.268c-1.489-.86-3.35.216-3.35 1.935a.734.734 0 0 1-.733.733h-3.033a.734.734 0 0 1-.734-.734c0-1.72-1.862-2.794-3.351-1.934a.734.734 0 0 1-1.003-.269L3.88 15.546a.734.734 0 0 1 .269-1.002c1.489-.86 1.489-3.01 0-3.87"></svg:path></svg:g>`,
})
export class LineiconsGear1Icon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGears3Icon],svg[lineicons-gears-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.253 5.397a1.492 1.492 0 0 0 2.23-1.288h1.5a1.492 1.492 0 0 0 2.231 1.288l.75 1.298c.417-.233.916-.387 1.424-.478q-.046-.135-.12-.264l-.759-1.313a1.49 1.49 0 0 0-2.025-.553A1.49 1.49 0 0 0 7.992 2.61H6.476c-.82 0-1.485.66-1.492 1.478a1.49 1.49 0 0 0-2.026.553L2.2 5.953c-.41.71-.17 1.616.534 2.031a1.49 1.49 0 0 0-.534 2.031l.758 1.313c.41.71 1.314.955 2.026.553c.006.618.388 1.147.928 1.368c-.003-.571.14-1.15.447-1.68l.068-.118a1.494 1.494 0 0 0-2.174-.88l-.75-1.299c.985-.576.985-2 0-2.576z"></svg:path><svg:path fill="currentColor" d="M7.234 9.484a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.64 15.11a3.065 3.065 0 1 1 6.13 0a3.065 3.065 0 0 1-6.13 0m3.066-1.564a1.565 1.565 0 1 0 0 3.13a1.565 1.565 0 0 0 0-3.13" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.658 17.903a1.833 1.833 0 0 1 .671-2.505a.333.333 0 0 0 0-.576a1.833 1.833 0 0 1-.67-2.504l1.106-1.916a1.833 1.833 0 0 1 2.503-.67a.332.332 0 0 0 .499-.288c0-1.012.82-1.833 1.832-1.833h2.213c1.013 0 1.833.821 1.833 1.833c0 .256.277.416.498.288a1.83 1.83 0 0 1 2.503.67l1.107 1.918a1.83 1.83 0 0 1-.67 2.502a.332.332 0 0 0 0 .576a1.833 1.833 0 0 1 .67 2.503l-1.105 1.916a1.833 1.833 0 0 1-2.504.671a.333.333 0 0 0-.5.288c0 1.013-.82 1.833-1.832 1.833H13.6a1.833 1.833 0 0 1-1.833-1.832a.333.333 0 0 0-.5-.288a1.833 1.833 0 0 1-2.503-.671zm1.421-1.206a.333.333 0 0 0-.122.456l1.106 1.915c.092.16.295.214.455.122c1.221-.705 2.749.176 2.749 1.587c0 .183.149.332.333.332h2.212a.333.333 0 0 0 .333-.333c0-1.41 1.527-2.292 2.749-1.587c.16.092.363.037.455-.122l1.106-1.916a.333.333 0 0 0-.122-.454c-1.221-.705-1.222-2.468 0-3.174a.33.33 0 0 0 .121-.453l-1.107-1.917a.33.33 0 0 0-.454-.122c-1.221.706-2.748-.177-2.748-1.587a.333.333 0 0 0-.333-.333H13.6a.33.33 0 0 0-.332.333c0 1.41-1.527 2.292-2.749 1.586a.333.333 0 0 0-.454.122l-1.106 1.916a.333.333 0 0 0 .122.455c1.222.705 1.22 2.47 0 3.174" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsGears3Icon {
  readonly viewBox = input("0 0 24 25")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGeminiIcon],svg[lineicons-gemini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.996 12.018a10.65 10.65 0 0 0-9.98 9.98h-.04c-.32-5.364-4.613-9.656-9.976-9.98v-.04c5.363-.32 9.656-4.613 9.98-9.976h.04c.324 5.363 4.617 9.656 9.98 9.98v.036z"></svg:path>`,
})
export class LineiconsGeminiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGiftIcon],svg[lineicons-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54.1 14.5h-4.6c1.1-.8 2-1.7 2.4-2.8c.6-1.5.6-4-2.5-6.9c-3.3-3.2-6.3-3.2-8.2-2.7c-4.3 1.1-7.2 6.1-8.8 9.7c-1.6-3.6-4.5-8.5-8.8-9.7c-1.9-.5-4.9-.4-8.2 2.7c-3.1 3-3 5.4-2.5 6.9c.4 1.1 1.3 2 2.4 2.8H9.9c-2.9 0-5.3 2.4-5.3 5.3v6.6c0 2.8 2.3 5.1 5.1 5.2V56c0 3.4 2.8 6.3 6.3 6.3h32.7c3.4 0 6.3-2.8 6.3-6.3V31.5c2.5-.4 4.4-2.6 4.4-5.2v-6.6c0-2.9-2.4-5.2-5.3-5.2M42.3 6.3c.1 0 .4-.1.7-.1c.7 0 1.8.3 3.3 1.7c1.2 1.1 1.5 1.9 1.4 2.1c-.5 1.4-5.5 2.9-11.2 3.5c1.4-3.1 3.5-6.6 5.8-7.2M18.4 8c1.5-1.4 2.6-1.7 3.3-1.7c.3 0 .5.1.7.1c2.3.6 4.5 4 5.9 7.2c-5.7-.6-10.7-2.1-11.2-3.5c-.1-.3.2-1 1.3-2.1M9.1 26.3v-6.6c0-.4.3-.8.8-.8h44.2c.4 0 .8.3.8.8v6.6c0 .4-.3.8-.8.8H9.9c-.4 0-.8-.3-.8-.8m39.6 31.5H16c-1 0-1.8-.8-1.8-1.8V31.6h36.2V56c.1 1-.7 1.8-1.7 1.8"></svg:path>`,
})
export class LineiconsGiftIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGitIcon],svg[lineicons-git-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.838 11.677l-9.549-9.58c-.129-.13-.451-.13-.645 0L9 4.742l2.452 2.452c.193-.097.419-.13.645-.13c.903 0 1.58.742 1.58 1.581c0 .226-.032.452-.129.645l1.968 1.968c.194-.097.42-.129.645-.129c.904 0 1.58.742 1.58 1.58c0 .904-.741 1.581-1.58 1.581c-.903 0-1.58-.742-1.58-1.58c0-.226.032-.452.129-.646l-1.968-1.967h-.032v3.71c.58.258 1 .806 1 1.483c0 .904-.742 1.581-1.581 1.581c-.903 0-1.58-.742-1.58-1.58c0-.678.419-1.259 1-1.485v-3.612c-.581-.259-1-.807-1-1.484c0-.226.032-.452.128-.645L8.225 5.613l-6.097 6.064c-.129.13-.129.452 0 .646l9.58 9.58c.13.13.452.13.646 0l9.548-9.58a.59.59 0 0 0-.064-.646"></svg:path>`,
})
export class LineiconsGitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGithubIcon],svg[lineicons-github-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.249c-5.484 0-10 4.452-10 10c0 4.387 2.871 8.13 6.871 9.484c.516.097.677-.226.677-.452s0-.87-.032-1.742c-2.774.645-3.355-1.355-3.355-1.355c-.451-1.129-1.129-1.451-1.129-1.451c-.903-.645.033-.645.033-.645c1 .032 1.548 1.032 1.548 1.032c.87 1.548 2.355 1.097 2.903.806c.097-.645.355-1.096.645-1.354c-2.193-.226-4.548-1.097-4.548-4.904c0-1.096.42-1.967 1.032-2.645c-.097-.226-.451-1.258.097-2.645c0 0 .87-.258 2.774 1.032a9.3 9.3 0 0 1 2.516-.355c.871 0 1.742.097 2.516.355c1.904-1.258 2.742-1.032 2.742-1.032c.549 1.355.226 2.42.097 2.645c.645.678 1.032 1.58 1.032 2.645c0 3.807-2.355 4.678-4.548 4.904c.355.322.677.967.677 1.87c0 1.355-.032 2.42-.032 2.742c0 .259.194.549.678.452C19.129 20.314 22 16.604 22 12.185c-.032-5.484-4.516-9.936-10-9.936"></svg:path>`,
})
export class LineiconsGithubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGithubOriginalIcon],svg[lineicons-github-original-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 1.8c-17 0-31 13.8-31 31C1 46.4 9.9 58 22.3 62.2c1.6.3 2.1-.7 2.1-1.4s0-2.7-.1-5.4c-8.6 2-10.4-4.2-10.4-4.2c-1.4-3.5-3.5-4.5-3.5-4.5c-2.8-2 .1-2 .1-2c3.1.1 4.8 3.2 4.8 3.2c2.7 4.8 7.3 3.4 9 2.5c.3-2 1.1-3.4 2-4.2c-6.8-.7-14.1-3.4-14.1-15.2c0-3.4 1.3-6.1 3.2-8.2c-.3-.7-1.4-3.9.3-8.2c0 0 2.7-.8 8.6 3.2c2.5-.7 5.1-1.1 7.8-1.1s5.4.3 7.8 1.1c5.9-3.9 8.5-3.2 8.5-3.2c1.7 4.2.7 7.5.3 8.2c2 2.1 3.2 4.9 3.2 8.2c0 11.8-7.3 14.5-14.1 15.2c1.1 1 2.1 3 2.1 5.8c0 4.2-.1 7.5-.1 8.5c0 .8.6 1.7 2.1 1.4C54.1 57.8 63 46.3 63 32.6c-.1-17-14-30.8-31-30.8"></svg:path>`,
})
export class LineiconsGithubOriginalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGlassJuice1Icon],svg[lineicons-glass-juice-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.773 3.936a.75.75 0 0 1 .68-.436h3.041a.75.75 0 1 0 0-1.5h-3.04a2.25 2.25 0 0 0-2.043 1.307l-.897 1.943H5.625a.75.75 0 0 0-.746.823L6.246 19.97A2.25 2.25 0 0 0 8.485 22h7.03a2.25 2.25 0 0 0 2.24-2.03L19.12 6.073a.75.75 0 0 0-.746-.823h-5.209zM11.977 6.75h5.571l-1.286 13.073a.75.75 0 0 1-.747.677h-7.03a.75.75 0 0 1-.747-.677L6.452 6.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsGlassJuice1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGlobe1Icon],svg[lineicons-globe-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.003 12.126C2.07 17.59 6.521 22 12.001 22c5.523 0 10-4.478 10-10c0-5.508-4.454-9.976-9.956-10h-.088c-5.46.024-9.886 4.424-9.954 9.873a3 3 0 0 0 0 .253M8.98 8.977A20 20 0 0 1 12 8.75c1.069 0 2.087.081 3.024.228c.147.937.228 1.954.228 3.022s-.081 2.085-.227 3.022c-.938.146-1.956.227-3.024.227c-1.067 0-2.084-.081-3.02-.227A20 20 0 0 1 8.751 12c0-1.068.08-2.086.227-3.023m-1.56.321c-.11.861-.167 1.768-.167 2.702s.058 1.84.167 2.701a11.5 11.5 0 0 1-1.662-.562c-.781-.337-1.365-.72-1.744-1.107c-.345-.353-.49-.676-.51-.96v-.145c.02-.284.165-.607.51-.96c.379-.386.963-.77 1.744-1.107a11.6 11.6 0 0 1 1.662-.562M9.3 7.418c.16-.611.349-1.168.562-1.661c.337-.781.72-1.365 1.107-1.744c.373-.365.712-.505 1.007-.513h.05c.295.008.635.148 1.008.513c.386.379.77.963 1.107 1.744c.213.493.402 1.05.561 1.66A22 22 0 0 0 12 7.25c-.933 0-1.84.058-2.7.167m7.284 1.881a11.6 11.6 0 0 1 1.658.561c.781.338 1.366.72 1.744 1.107c.375.384.513.732.513 1.033s-.138.648-.513 1.032c-.378.387-.963.77-1.744 1.107a11.5 11.5 0 0 1-1.658.561c.109-.86.166-1.767.166-2.7s-.057-1.84-.166-2.7m-1.882 7.283c-.159.61-.348 1.167-.561 1.66c-.338.781-.72 1.366-1.107 1.744c-.384.375-.732.513-1.033.513s-.649-.138-1.032-.513c-.387-.378-.77-.963-1.107-1.744a11.6 11.6 0 0 1-.562-1.66c.86.11 1.767.167 2.7.167s1.84-.058 2.702-.167m-7.009-.274c.203.932.47 1.785.792 2.53c.178.41.375.795.592 1.145a8.53 8.53 0 0 1-5.057-5.056q.525.323 1.142.589c.744.322 1.598.59 2.531.792m8.616 0c.932-.203 1.785-.47 2.528-.792a9 9 0 0 0 1.147-.592a8.53 8.53 0 0 1-5.058 5.06c.217-.35.414-.736.592-1.147c.321-.744.589-1.597.791-2.53m3.675-7.233a9 9 0 0 0-1.147-.592a14 14 0 0 0-2.527-.791a14 14 0 0 0-.792-2.53a9 9 0 0 0-.591-1.145a8.53 8.53 0 0 1 5.057 5.058M7.694 7.691a14 14 0 0 0-2.532.792q-.617.266-1.142.59a8.53 8.53 0 0 1 5.056-5.056q-.325.527-.591 1.145c-.322.744-.59 1.597-.792 2.529"></svg:path>`,
})
export class LineiconsGlobe1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGlobeStandIcon],svg[lineicons-globe-stand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.267 2.1a8.63 8.63 0 0 0 2.997 16.002a1 1 0 0 0-.015.148v2.25h-4a.75.75 0 0 0 0 1.5h9.5a.75.75 0 0 0 0-1.5h-4v-2.25l-.001-.047a8.6 8.6 0 0 0 4.149-1.156a.75.75 0 0 0-.75-1.299A7.13 7.13 0 1 1 9.017 3.4a.75.75 0 1 0-.75-1.3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.793 4.743a5.58 5.58 0 1 0 5.58 9.664a5.58 5.58 0 0 0-5.58-9.664m-.743 6.871a4.08 4.08 0 1 1 7.065-4.079a4.08 4.08 0 0 1-7.065 4.08" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsGlobeStandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGoIcon],svg[lineicons-go-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.51 10.503c-.04 0-.05-.02-.03-.05l.205-.266c.02-.03.068-.05.107-.05h3.476c.04 0 .049.03.03.06l-.166.257c-.02.03-.068.059-.097.059zm-1.471.91c-.039 0-.049-.02-.03-.05l.205-.267c.02-.03.068-.05.107-.05h4.44c.04 0 .06.03.05.06l-.078.237c-.01.04-.049.06-.088.06zm2.357.91c-.04 0-.049-.03-.03-.06l.137-.247c.02-.03.058-.06.097-.06h1.948c.039 0 .058.03.058.07l-.02.237c0 .04-.038.07-.067.07zm10.108-1.998c-.614.158-1.032.277-1.636.435c-.146.04-.156.05-.283-.099c-.146-.168-.253-.277-.457-.376c-.614-.306-1.208-.217-1.763.149c-.662.435-1.003 1.078-.993 1.879c.01.791.545 1.444 1.315 1.553c.662.089 1.217-.149 1.655-.653c.088-.109.165-.228.263-.366h-1.88c-.204 0-.253-.129-.184-.297c.126-.306.36-.82.496-1.078a.26.26 0 0 1 .243-.158h3.545c-.02.267-.02.534-.058.801a4.25 4.25 0 0 1-.799 1.939c-.7.94-1.616 1.523-2.775 1.68c-.954.13-1.84-.059-2.62-.652q-1.078-.831-1.236-2.196c-.127-1.077.185-2.047.827-2.897c.692-.92 1.607-1.504 2.727-1.711c.915-.168 1.792-.06 2.58.484c.517.346.887.821 1.13 1.395c.059.089.02.138-.097.168"></svg:path><svg:path fill="currentColor" d="M17.726 15.794c-.886-.02-1.694-.277-2.376-.87a3.12 3.12 0 0 1-1.052-1.91c-.175-1.117.127-2.106.79-2.986c.71-.95 1.567-1.444 2.726-1.652c.993-.178 1.928-.079 2.775.505c.77.534 1.247 1.256 1.373 2.205c.166 1.335-.214 2.423-1.12 3.353a4.44 4.44 0 0 1-2.337 1.266c-.263.05-.526.06-.779.09m2.318-3.996c-.01-.128-.01-.227-.03-.326c-.175-.98-1.06-1.533-1.986-1.315c-.905.207-1.49.79-1.704 1.72c-.175.772.195 1.553.896 1.87c.535.237 1.071.207 1.587-.06c.77-.405 1.188-1.038 1.237-1.889"></svg:path>`,
})
export class LineiconsGoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGoodreadsIcon],svg[lineicons-goodreads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.167 17.768h1.645c.032 0 .129-.032.129.097c.258 1.354 1.193 2.128 2.45 2.515c1.032.323 2.129.323 3.193.032c1.322-.258 2.192-1.096 2.644-2.354c.322-.87.419-1.74.451-2.58v-2.03h-.032c-.032.031-.032.128-.097.193c-.87 1.677-2.418 2.644-4.127 2.676c-4.063.097-6.675-2.257-6.772-6.9c-.032-.968.032-1.87.323-2.741C6.747 3.87 8.844 2.032 11.97 2c2.387 0 3.967 1.516 4.547 2.773c.032.032.032.097.097.032V2.42h1.741v12.963c0 3.031-1.032 5.643-4.03 6.353c-2.677.644-6.192.193-7.643-2.226a3.76 3.76 0 0 1-.516-1.74m5.74-14.35C9.874 3.389 7.617 5 7.391 8.645c-.129 2.321.58 4.772 2.773 5.804c1.097.516 2.903.58 4.225-.355c1.87-1.322 2.45-3.773 2.128-6.062c-.355-2.709-1.838-4.611-4.611-4.611"></svg:path>`,
})
export class LineiconsGoodreadsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGoogleIcon],svg[lineicons-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.594 11.08H12.32v2.746h6.656c-.356 3.812-3.457 5.46-6.462 5.46c-3.813 0-7.205-2.972-7.205-7.27c0-4.135 3.23-7.27 7.205-7.27c3.037 0 4.879 1.971 4.879 1.971l1.874-1.97S16.748 2 12.386 2C6.634 1.968 2.24 6.782 2.24 11.984C2.24 17.024 6.376 22 12.483 22c5.395 0 9.272-3.651 9.272-9.111c.033-1.131-.161-1.81-.161-1.81"></svg:path>`,
})
export class LineiconsGoogleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGoogleCloudIcon],svg[lineicons-google-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.68 12.532a5.63 5.63 0 0 0-2.166-2.813a7.8 7.8 0 0 0-2.361-3.806l-.037.036v-.042a7.8 7.8 0 0 0-3.489-1.776a7.9 7.9 0 0 0-3.922.147a7.86 7.86 0 0 0-3.35 2.037A7.8 7.8 0 0 0 4.41 9.72c.043-.018.092-.03.135-.042c-.074.042-.14.091-.208.14a5.67 5.67 0 0 0-2.043 2.776a5.66 5.66 0 0 0 1.909 6.277h.006l-.006.018a5.6 5.6 0 0 0 3.41 1.135h4.325l.025.024h4.343a5.66 5.66 0 0 0 3.38-1.086a5.66 5.66 0 0 0 2.062-2.885a5.64 5.64 0 0 0-.067-3.544m-3.368 2.696a2.14 2.14 0 0 1-1.177 1.177c-.263.11-.543.165-.83.165h-4.35v-.024H7.613a2.1 2.1 0 0 1-.89-.196a2.24 2.24 0 0 1-.812-.64a2.2 2.2 0 0 1-.42-.946a2.1 2.1 0 0 1 .06-1.037A2.16 2.16 0 0 1 6.978 12.3a2.2 2.2 0 0 1 1.037-.067c.341.067.67.213.945.427c.275.22.494.5.64.817l2.52-2.52a5.7 5.7 0 0 0-1.988-1.634a5.5 5.5 0 0 0-1.41-.47c.019-.018.03-.024.05-.018a4.345 4.345 0 0 1 5.935-.452h.049c.494.41.884.921 1.159 1.507c.274.598.408 1.245.396 1.903v.434c.287 0 .567.054.83.164a2.14 2.14 0 0 1 1.177 1.178c.11.262.165.543.165.83s-.055.567-.165.829z"></svg:path>`,
})
export class LineiconsGoogleCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGoogleDriveIcon],svg[lineicons-google-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.258 14.29L8.871 3.258h6.258l6.42 11.032zm-5.387.903l-3.13 5.549h12.13L22 15.193zM8.032 4.613L2 15.193l3.129 5.549l6.097-10.581z"></svg:path>`,
})
export class LineiconsGoogleDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGoogleMeetIcon],svg[lineicons-google-meet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.685 3.724L2 8.436h11.313v7.127H6.685V8.436H2v10.46c0 .762.614 1.38 1.371 1.38h13.142c.757 0 1.37-.618 1.37-1.38v-2.97l3.009 2.48A.686.686 0 0 0 22 17.863V6.252a.686.686 0 0 0-1.122-.533l-2.994 2.469V5.103c0-.762-.614-1.38-1.371-1.38z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsGoogleMeetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGooglePayIcon],svg[lineicons-google-pay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.57 9.832a1.8 1.8 0 0 0-1.267-.495c-.862 0-1.593.58-1.855 1.363c-.138.41-.138.854 0 1.264c.262.783.993 1.364 1.855 1.364c.446 0 .828-.115 1.124-.316a1.53 1.53 0 0 0 .66-1.004H5.303v-1.272h3.114q.058.333.057.672c0 1.005-.359 1.855-.982 2.43c-.548.504-1.298.797-2.19.797a3.304 3.304 0 0 1 0-6.605c.82-.01 1.613.298 2.21.86zm4.889 2.077v2.328h-.739V8.488h1.959a1.77 1.77 0 0 1 1.268.498a1.6 1.6 0 0 1 .53 1.213a1.6 1.6 0 0 1-.53 1.22q-.513.49-1.268.49zm0-2.713v2.007h1.238a.98.98 0 0 0 .73-.297a.98.98 0 0 0 0-1.405a.96.96 0 0 0-.73-.305zm4.72.98q.819 0 1.293.437q.473.438.473 1.2v2.424h-.707v-.546h-.032q-.458.675-1.22.675q-.65 0-1.087-.386a1.23 1.23 0 0 1-.438-.963q0-.61.461-.97q.462-.362 1.232-.362q.659 0 1.084.24v-.168a.84.84 0 0 0-.305-.654a1.05 1.05 0 0 0-.713-.27q-.618 0-.98.523l-.65-.41q.537-.77 1.589-.77m-.956 2.857a.59.59 0 0 0 .245.482a.9.9 0 0 0 .574.192c.312 0 .61-.124.83-.344q.369-.345.368-.811q-.345-.276-.963-.275q-.45 0-.75.217q-.304.218-.304.54m4.31 2.938L22 10.304h-.804l-1.14 2.826h-.016l-1.172-2.826h-.803l1.622 3.684l-.916 1.983z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsGooglePayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGoogleWalletIcon],svg[lineicons-google-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.007 6.226c1.677 2.742 2.87 5.032 3.774 7.258c-.355 1.516-.87 2.968-1.42 4.355c-.58-2.355-1.193-4.549-2.515-6.645c.29-1.549.096-3.226.16-4.968m-2.161 3.29h-4.13c-.257 0-.451.355-.257.549c1.87 2.451 3.193 5.225 4.096 8.354H11.2c-.741-3.129-1.741-5.967-3.677-8.645c-.194-.129-.42-.258-.677-.258m2.16-3.968C12.04 10.42 14.814 16.064 15.2 22h5.033c-.549-6.129-3.065-11.871-6.387-16.452zm11.227-3.032A.69.69 0 0 0 19.555 2H15.62c-.226 0-.42.226-.355.452c.58 2.032 1 4.258 1.194 6.548c2.128 3.807 3.548 7.968 4.032 12.032c.742-2.677 1.129-5.967 1.129-9.032c0-3.258-.516-6.452-1.387-9.484"></svg:path>`,
})
export class LineiconsGoogleWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGraduationIcon],svg[lineicons-graduation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m61.5 34l-4.2-4.3v-3.8c.6-.7 1-1.6 1-2.6c0-1.5-.8-2.8-2.2-3.4l-24.5-11c-.9-.4-2-.4-3 0L4 19.8c-1.3.6-2.2 1.9-2.2 3.4S2.7 26 4 26.6l8.4 3.8v11.8c0 7.3 5.9 13.2 13.1 13.2h9.1c7.3 0 13.1-5.9 13.1-13.2V30.6l4.8-2.2l.3-.1v1.6l-4 4.1c-1.1 1.1-1.1 2.8 0 3.9l4.3 4.5c.5.5 1.2.8 2 .8c.7 0 1.5-.3 2-.8l4.3-4.5c1.1-1.1 1.1-2.8.1-3.9m-18.3 8.2c0 4.8-3.9 8.7-8.6 8.7h-9.1c-4.8 0-8.6-3.9-8.6-8.7v-9.7l11.9 5.4q.75.3 1.5.3c.75 0 1-.1 1.5-.3l11.4-5.1zm-12.9-8.7L7.4 23.2l22.7-10l22.6 10.2zM55.1 38l-2-2l2-2l2 2z"></svg:path>`,
})
export class LineiconsGraduationIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGraduationCap1Icon],svg[lineicons-graduation-cap-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.298 3.31a.75.75 0 0 0-.596 0l-9.25 4a.75.75 0 0 0 0 1.376l2.673 1.156v6.084a.75.75 0 0 0 .122.41l.628-.41l-.628.41l.001.002l.001.001l.003.004l.007.012a3 3 0 0 0 .11.15c.072.097.177.23.316.387c.277.313.69.725 1.244 1.136c1.113.826 2.797 1.648 5.071 1.648s3.958-.822 5.07-1.648a8 8 0 0 0 1.245-1.136a6 6 0 0 0 .425-.537l.008-.012l.003-.004v-.001c.001 0 .002-.002-.626-.412l.628.41a.75.75 0 0 0 .122-.41V9.842L20.5 9.14v5.58a.75.75 0 0 0 1.5 0V7.998a.75.75 0 0 0-.452-.688zm5.077 7.18v5.19a6.7 6.7 0 0 1-1.198 1.144c-.91.674-2.288 1.352-4.177 1.352c-1.89 0-3.268-.678-4.177-1.352a6.7 6.7 0 0 1-1.198-1.145v-5.188l5.077 2.195a.75.75 0 0 0 .596 0zM12 11.18L4.64 7.999L12 4.815l7.36 3.183z"></svg:path>`,
})
export class LineiconsGraduationCap1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGrammarlyIcon],svg[lineicons-grammarly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m2.133-7.333c-.336 0-.646-.221-.706-.544a.66.66 0 0 1 .146-.552a.68.68 0 0 1 .525-.241h3.708v3.807a.66.66 0 0 1-.248.516a.7.7 0 0 1-.561.142c-.33-.059-.556-.363-.556-.69v-.636l.128-.704a5.9 5.9 0 0 1-2.007 1.47a6 6 0 0 1-2.448.515c-3.385 0-6.107-2.742-5.91-6.102c.17-2.886 2.554-5.246 5.501-5.44a6 6 0 0 1 3.07.603a5.9 5.9 0 0 1 2.327 2.055a.65.65 0 0 1-.204.878c-.31.21-.737.1-.951-.204c-.81-1.114-2.222-2.036-3.833-2.036c-3.09 0-5.461 3.034-4.216 6.212c.55 1.4 1.85 2.403 3.363 2.636c1.86.285 3.56-.362 4.54-1.768l-.613.083z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsGrammarlyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGraphIcon],svg[lineicons-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46.3 12.9c-3.6 0-6.5 2.9-6.5 6.5v.7l-2.4 1.6l-2.7-.9c-.8-2.7-3.3-4.6-6.2-4.6c-3.6 0-6.5 2.9-6.5 6.5c0 .6.1 1.1.2 1.6c-.7.6-1.6 1.2-2.3 1.8c-1.1-.7-2.3-1.2-3.7-1.2c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5c0-.6-.1-1.1-.2-1.6c.7-.6 1.6-1.2 2.3-1.8c1.1.7 2.3 1.2 3.7 1.2c2.6 0 4.8-1.5 5.9-3.7l2 .7c.4.1.7.2 1.1.2c.7 0 1.4-.2 2-.6l2.3-1.5c1.2 1.1 2.7 1.7 4.4 1.7c3.6 0 6.5-2.9 6.5-6.5s-2.8-6.6-6.4-6.6M16.2 33.4c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m12.3-8.8c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m17.8-3.2c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path><svg:path fill="currentColor" d="M57 5.9H7C3.6 5.9.7 8.7.7 12.2v26.4c0 3.4 2.8 6.3 6.3 6.3h22.8v8.8h-11c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h26.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H34.3v-8.8H57c3.4 0 6.3-2.8 6.3-6.3V12.1c0-3.4-2.9-6.2-6.3-6.2m1.8 32.6c0 1-.8 1.8-1.8 1.8H7c-1 0-1.8-.8-1.8-1.8V12.1c0-1 .8-1.8 1.8-1.8h50c1 0 1.8.8 1.8 1.8z"></svg:path>`,
})
export class LineiconsGraphIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGridIcon],svg[lineicons-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 34.2c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-7V18.6h7c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-7V7.3c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v6.8H34.2V7.3c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v6.8H15.5V7.3c0-1.2-1-2.2-2.2-2.2S11 6.1 11 7.3v6.8H4c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h7v11.1H4c-1.2 0-2.2 1-2.2 2.2S2.8 34 4 34h7v11.1H4c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h7v6.8c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-6.8h14.3v6.8c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-6.8h14.3v6.8c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-6.8h7c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-7V34.2zM48.5 18.6v11.1H34.2V18.6zm-33 0h14.3v11.1H15.5zm0 26.8V34.2h14.3v11.1H15.5zm33 0H34.2V34.2h14.3z"></svg:path>`,
})
export class LineiconsGridIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGridAltIcon],svg[lineicons-grid-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.7 3.4H9c-3.4 0-6.2 2.8-6.2 6.2v12.7c0 3.4 2.8 6.2 6.2 6.2h12.7c3.4 0 6.2-2.8 6.2-6.2V9.7c.1-3.5-2.7-6.3-6.2-6.3m1.8 19c0 1-.8 1.8-1.8 1.8H9c-1 0-1.8-.8-1.8-1.8V9.7c0-1 .8-1.8 1.8-1.8h12.7c1 0 1.8.8 1.8 1.8zM55 3.4H42.3c-3.4 0-6.2 2.8-6.2 6.2v12.7c0 3.4 2.8 6.2 6.2 6.2H55c3.4 0 6.2-2.8 6.2-6.2V9.7c0-3.5-2.8-6.3-6.2-6.3m1.8 19c0 1-.8 1.8-1.8 1.8H42.3c-1 0-1.8-.8-1.8-1.8V9.7c0-1 .8-1.8 1.8-1.8H55c1 0 1.8.8 1.8 1.8zM21.7 35.3H9c-3.4 0-6.2 2.8-6.2 6.2v12.7c0 3.4 2.8 6.2 6.2 6.2h12.7c3.4 0 6.2-2.8 6.2-6.2V41.6c.1-3.5-2.7-6.3-6.2-6.3m1.8 19c0 1-.8 1.8-1.8 1.8H9c-1 0-1.8-.8-1.8-1.8V41.6c0-1 .8-1.8 1.8-1.8h12.7c1 0 1.8.8 1.8 1.8zm31.5-19H42.3c-3.4 0-6.2 2.8-6.2 6.2v12.7c0 3.4 2.8 6.2 6.2 6.2H55c3.4 0 6.2-2.8 6.2-6.2V41.6c0-3.5-2.8-6.3-6.2-6.3m1.8 19c0 1-.8 1.8-1.8 1.8H42.3c-1 0-1.8-.8-1.8-1.8V41.6c0-1 .8-1.8 1.8-1.8H55c1 0 1.8.8 1.8 1.8z"></svg:path>`,
})
export class LineiconsGridAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsGrowIcon],svg[lineicons-grow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M59 45.9a7.63 7.63 0 0 0-9.31-5.29c-3.53 1-8.37 2.48-12 3.53a4.8 4.8 0 0 0-.11-3.21c-.92-2.29-3.47-3.31-5.6-3.31H22a4 4 0 0 1-2.68-1.25a5.77 5.77 0 0 0-3.9-1.52H7.31A6.45 6.45 0 0 0 1 41.42v12.86A6.57 6.57 0 0 0 7.43 61h9.74a6.34 6.34 0 0 0 3.51-1.08l.12.06a19.2 19.2 0 0 0 9.26 2.39a18.6 18.6 0 0 0 5.68-.86L53.84 56h.12a7.89 7.89 0 0 0 5.09-10ZM7.43 57A2.57 2.57 0 0 1 5 54.28V41.42a2.46 2.46 0 0 1 2.31-2.57h8.1a1.74 1.74 0 0 1 1.2.48a12 12 0 0 0 1 .78v16.81a2 2 0 0 1-.42 0Zm45.18-4.82l-18.06 5.48a14.8 14.8 0 0 1-4.49.68a15.2 15.2 0 0 1-7.35-1.91l-1.12-.59V41.6H32a2.16 2.16 0 0 1 1.89.8c.16.41-.12 1.63-2.22 3.63l-1.15 1.09l.79 1.36C32.17 50 32.17 50 42.27 47c4.29-1.25 8.57-2.53 8.57-2.53a3.66 3.66 0 0 1 4.37 2.62a3.9 3.9 0 0 1-2.6 5.06Zm10.31-41.94A3.22 3.22 0 0 0 60 7.3c-2.49-.19-7.15 0-10.41 3.21a10 10 0 0 0-1.44 1.81a12.4 12.4 0 0 0-2.81-6.65c-3-3.38-8-3.95-10.66-4a3.22 3.22 0 0 0-3.18 3c-.21 2.86-.11 8.17 2.87 11.51c2.47 2.77 6.27 3.33 9 3.33a18 18 0 0 0 2-.1v14.68a2 2 0 0 0 4 0v-9c2.84-.05 7.58-.61 10.53-3.54c3.18-3.26 3.26-8.49 3.02-11.31m-18.67 5.28c-2.09.13-5.28-.12-6.94-2c-1.86-2.07-2-5.93-1.91-7.83c1.91.12 5.13.63 6.91 2.62s2.02 5.33 1.94 7.21M57 18.75c-1.93 1.92-5.47 2.32-7.59 2.38c.27-2.16 1-5.8 3-7.79c1.78-1.77 4.48-2.09 6.22-2.09H59c.06 1.81 0 5.51-2 7.5"></svg:path>`,
})
export class LineiconsGrowIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHackerNewsIcon],svg[lineicons-hacker-news-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm9.61 10.103v4.036h-1.278v-4.123L8.14 6.832h1.48c2.12 3.92 1.975 4.094 2.381 5.023c.493-1.103.203-.987 2.468-5.023h1.393z"></svg:path>`,
})
export class LineiconsHackerNewsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHammerIcon],svg[lineicons-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.8 28.2h.2l22-.7c.2.6.8 1.1 1.4 1.3l2.7.8c.1 3.3 2.9 6 6.2 6h4.9c3.4 0 6.2-2.8 6.2-6.2c0-4.9-.1-12.6-.1-12.6c0-.4-.1-10.9-11.1-14.9c-.7-.2-1.5-.2-2.1.3c-.6.4-1 1.1-1 1.8v8.3l-.7.8h-4.6c-1.2 0-2.2 1-2.2 2.2v.8l-21.8-.8c-1.7-.1-3.3.6-4.6 1.7c-1.2 1.2-1.9 2.8-1.9 4.5v.4c0 1.7.7 3.3 1.9 4.5c1.5 1.1 3 1.8 4.6 1.8m26.6-10.6h3.4c.7 0 1.3-.3 1.7-.8l1.9-2.2q.6-.6.6-1.5V7.6c5 3.4 5.1 8.8 5.1 9.1c0 0 .1 7.6.1 12.6c0 1-.8 1.7-1.7 1.7h-4.9c-1 0-1.7-.8-1.7-1.7v-1.4c0-1-.7-1.9-1.6-2.2l-2.7-.8v-7.3zM9.1 21.5c0-.5.2-.9.5-1.3c.3-.3.8-.5 1.3-.5l21.9.8v2.4l-22 .7c-.5 0-.9-.2-1.3-.5c-.3-.3-.5-.8-.5-1.3v-.3zM57 47.3h-8.7v-2.8h3.3c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H41.4c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h2.3v2.8H20.1v-5.5H23c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H12.9c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h2.7v5.5H7c-2.9 0-5.2 2.4-5.2 5.2V57c0 2.9 2.4 5.2 5.2 5.2h50c2.9 0 5.2-2.4 5.2-5.2v-4.4c0-2.9-2.3-5.3-5.2-5.3m.7 9.7c0 .4-.3.8-.8.8H7c-.4 0-.8-.3-.8-.8v-4.4c0-.4.3-.8.8-.8h50c.4 0 .8.3.8.8V57z"></svg:path>`,
})
export class LineiconsHammerIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHammer1Icon],svg[lineicons-hammer-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.664 2a.75.75 0 0 0-.75.75v4.184c0 .414.336.75.75.75h3.716l-.557 11.961A2.25 2.25 0 0 0 12.07 22h.857a2.25 2.25 0 0 0 2.248-2.355l-.557-11.961h3.717a.75.75 0 0 0 .75-.75V6.75A4.75 4.75 0 0 0 14.335 2zm6.453 5.684l.56 12.031a.75.75 0 0 1-.75.785h-.857a.75.75 0 0 1-.749-.785l.56-12.031zm4.419-1.5H7.415V3.5h6.92a3.25 3.25 0 0 1 3.2 2.684"></svg:path>`,
})
export class LineiconsHammer1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHammer2Icon],svg[lineicons-hammer-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.374 4l-.098-.593a.787.787 0 0 0-1.553 0L11.625 4h-4.96a.75.75 0 0 0-.75.75v4.183c0 .415.336.75.75.75h3.71l-.538 9.945A2.25 2.25 0 0 0 12.082 22h.834a2.25 2.25 0 0 0 2.246-2.372l-.538-9.945h3.71a.75.75 0 0 0 .75-.75V8.75A4.75 4.75 0 0 0 14.336 4zm-.252 5.683l.543 10.026a.75.75 0 0 1-.75.79h-.833a.75.75 0 0 1-.748-.79l.542-10.026zm4.414-1.5H7.414V5.5h6.921a3.25 3.25 0 0 1 3.2 2.683"></svg:path>`,
})
export class LineiconsHammer2Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHandIcon],svg[lineicons-hand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M57.3 45.8V15.2c0-3.2-2.8-5.7-6.2-5.7c-.6 0-1.2.1-1.7.2V8.5c0-3.2-2.8-5.7-6.2-5.7c-1.2 0-2.4.3-3.3.9c-1.1-1.2-2.8-1.9-4.6-1.9c-2.6 0-4.9 1.5-5.8 3.6c-.7-.3-1.4-.4-2.2-.4c-3.4 0-6.2 2.6-6.2 5.7v21.6l-1.3-1.6c-2.3-3-6.5-4-9.8-2.2c-1.6.9-2.8 2.4-3.2 4.2s0 3.7 1.2 5.3l9 11.9c.5.6.9 1.3 1.4 1.9c1.4 2 2.9 4.2 5 5.9c4 3.3 9.4 4.5 14.5 4.5c2.5 0 4.8-.3 7-.7c12.5-2.7 12.5-12.1 12.4-15.7M43.9 57.1c-5.2 1.1-13 1.1-17.6-2.8c-1.6-1.4-2.9-3.2-4.2-5.1l-1.5-2.1l-9-11.9c-.4-.5-.5-1.1-.4-1.6q.15-.75.9-1.2c1.3-.7 3.2-.2 4.1 1l.1.1l5.4 6.4c.6.7 1.6 1 2.5.7s1.5-1.2 1.5-2.1V10.7c0-.6.8-1.2 1.7-1.2s1.7.6 1.7 1.2v17.6c0 1.2 1 2.3 2.3 2.3s2.2-1 2.2-2.3V7.4c0-.7.8-1.2 1.7-1.2s1.7.6 1.7 1.3v21.6c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V8.5c0-.6.8-1.2 1.7-1.2s1.7.6 1.7 1.2v22.6c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-16c.1-.6.8-1.1 1.7-1.1s1.7.6 1.7 1.2v30.7c-.1 4.5-.8 9.4-9.1 11.2"></svg:path>`,
})
export class LineiconsHandIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHandMicIcon],svg[lineicons-hand-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.09 4.909a5.66 5.66 0 0 0-9.602 4.823l.029.196l-5.72 6.632a2.25 2.25 0 0 0 .112 3.06l.469.47a2.25 2.25 0 0 0 3.06.112l6.633-5.72l.196.028a5.66 5.66 0 0 0 4.823-9.602m-6.943 1.06a4.16 4.16 0 1 1 2.574 7.085l-3.777-3.777a4.15 4.15 0 0 1 1.203-3.308M4.932 17.54l5.628-6.524l2.424 2.423l-6.525 5.628a.75.75 0 0 1-1.02-.037l-.47-.469a.75.75 0 0 1-.037-1.02" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsHandMicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHandShakeIcon],svg[lineicons-hand-shake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.825 6.455l-.009-.006l-.793-.533a3 3 0 0 0-3.626.211L5.45 7.796a.75.75 0 0 1-.488.18H2.75a.75.75 0 0 0-.75.75v6.03c0 .414.336.75.75.75h2.088a.75.75 0 0 1 .563.254l2.339 2.66a2.25 2.25 0 0 0 2.968.365l.684-.473l.734.25a2.25 2.25 0 0 0 2.539-.803l.47-.642l.326.044a2.25 2.25 0 0 0 2.276-1.153l.049-.09h3.464a.75.75 0 0 0 .75-.75V8.727a.75.75 0 0 0-.75-.75h-2.211a.75.75 0 0 1-.49-.182L16.86 6.336a3.75 3.75 0 0 0-5.036.12m-1.64.705l.562.378l-1.96 1.971a2.25 2.25 0 0 0 .044 3.216l.068.064c.81.771 2.062.831 2.941.14l2.079-1.632l2.657 2.555a.75.75 0 0 1 .139.9l-.025.044l-.014.026l-.255.467a.75.75 0 0 1-.758.384l-.769-.103a.75.75 0 0 0-.705.3l-.734 1.002a.75.75 0 0 1-.846.268l-1.09-.37a.75.75 0 0 0-.668.093l-.994.687a.75.75 0 0 1-.99-.122l-2.339-2.66a2.25 2.25 0 0 0-1.69-.763H3.5v-4.53h1.461a2.25 2.25 0 0 0 1.464-.541l1.948-1.669a1.5 1.5 0 0 1 1.813-.106m8.12 7.259a2.25 2.25 0 0 0-.69-1.648l-2.521-2.424a.75.75 0 0 0-1.053-1.053l-.506.397l-.06.047l-2.562 2.013a.75.75 0 0 1-.981-.047l-.068-.065a.75.75 0 0 1-.015-1.072l2.965-2.98a2.25 2.25 0 0 1 3.066-.116l1.687 1.458a2.25 2.25 0 0 0 1.472.547h1.46v4.943z"></svg:path>`,
})
export class LineiconsHandShakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHandStopIcon],svg[lineicons-hand-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.599 3.495C9.908 2.655 10.646 2 11.616 2s1.709.654 2.018 1.495a2 2 0 0 1 .834-.177c1.293 0 2.176 1.164 2.176 2.382v.437a2 2 0 0 1 .676-.114c1.293 0 2.176 1.165 2.176 2.382v5.705c.018.709.021 2.63-.828 4.4c-.433.904-1.095 1.784-2.098 2.436c-1.005.654-2.304 1.047-3.96 1.054h-.003c-1.814 0-3.424-.886-4.6-1.784a14 14 0 0 1-2.3-2.241a4 4 0 0 0-.16-.19L3.202 15.23l-.012-.013c-.804-.92-.804-2.375 0-3.295c.85-.973 2.273-.979 3.13-.018l.27.275v-6.48c0-1.217.882-2.381 2.175-2.381c.303 0 .583.064.835.177m-.16 2.198c-.003-.58-.395-.875-.676-.875s-.676.297-.676.882v8.315a.75.75 0 0 1-1.285.525l-1.568-1.6l-.03-.03c-.258-.296-.629-.296-.887 0c-.308.352-.31.958-.005 1.314l2.34 2.547q.125.138.225.266a12.4 12.4 0 0 0 2.04 1.986c1.064.813 2.352 1.477 3.688 1.477c1.413-.006 2.42-.339 3.146-.811c.729-.474 1.225-1.12 1.563-1.827c.69-1.439.698-3.062.68-3.723V8.405c0-.585-.394-.882-.675-.882s-.676.297-.676.882v2.825a.75.75 0 1 1-1.5 0V5.7c0-.585-.395-.882-.676-.882s-.676.297-.676.882v5.53a.75.75 0 1 1-1.5 0V4.382c0-.585-.394-.882-.676-.882c-.281 0-.676.297-.676.882v6.66a.75.75 0 0 1-1.5 0z"></svg:path>`,
})
export class LineiconsHandStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHandTakingDollarIcon],svg[lineicons-hand-taking-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.309 2a.75.75 0 0 1 .75.75v.169c.748.19 1.302.867 1.302 1.674a.75.75 0 0 1-1.5 0a.227.227 0 0 0-.227-.227h-.395a.483.483 0 0 0-.17.935l1.005.377a1.983 1.983 0 0 1-.015 3.72v.236a.75.75 0 0 1-1.5 0v-.17a1.73 1.73 0 0 1-1.303-1.673a.75.75 0 0 1 1.5 0c0 .125.102.226.227.226h.395a.483.483 0 0 0 .17-.934l-1.005-.377a1.983 1.983 0 0 1 .016-3.72V2.75a.75.75 0 0 1 .75-.75m4.118 9.084a1.578 1.578 0 0 1 2.226 2.212l-3.867 4.829a1.98 1.98 0 0 1-1.544.742h-6.174a.75.75 0 0 0-.503.194l-.525.474a.75.75 0 0 1-.34.877L6.124 21.9a.75.75 0 0 1-1.025-.275l-2.998-5.194a.75.75 0 0 1 .274-1.024l2.577-1.488a.75.75 0 0 1 .743-.004l1.693-1.352c.553-.443 1.253-.748 2.025-.751c.813-.004 2.099.068 3.262.493h2.598c.662 0 1.239.359 1.548.893zM8.559 17.948a2.25 2.25 0 0 1 1.51-.581h6.173a.48.48 0 0 0 .373-.18l3.867-4.828a.078.078 0 0 0-.11-.11l-3.852 3.124a1.78 1.78 0 0 1-1.247.507h-2.735a.75.75 0 0 1 0-1.5h2.735q.07 0 .13-.03l.024-.022l.073-.059a.288.288 0 0 0-.227-.465h-2.682q-.197-.001-.369-.068c-.926-.353-2.033-.428-2.802-.424c-.374.001-.755.15-1.096.422l-1.788 1.43l1.75 3.03zm-4.784-1.617l2.248 3.895l1.278-.738l-2.249-3.895z"></svg:path>`,
})
export class LineiconsHandTakingDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHandTakingLeaf1Icon],svg[lineicons-hand-taking-leaf-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.309 2.75l.284-.694a.75.75 0 0 0-.57 0z"></svg:path><svg:path fill="currentColor" d="m15.309 2.75l-.285-.694h-.001l-.002.001l-.004.002l-.01.004l-.034.015l-.11.05a6.4 6.4 0 0 0-1.453.979c-.794.716-1.644 1.873-1.644 3.524c0 2.02 1.536 3.752 3.543 3.752c2.006 0 3.542-1.732 3.542-3.752c0-1.65-.85-2.808-1.644-3.524a6.4 6.4 0 0 0-1.454-.979l-.11-.05l-.033-.015l-.01-.004l-.004-.002h-.002zm.894 1.472c.602.541 1.148 1.324 1.148 2.409c0 .982-.554 1.77-1.292 2.093V6.106a.75.75 0 0 0-1.5 0v2.618c-.738-.323-1.293-1.11-1.293-2.093c0-1.085.547-1.868 1.148-2.409a5 5 0 0 1 .895-.635l.063.035c.228.131.53.33.831.6m3.224 6.862a1.578 1.578 0 0 1 2.226 2.212l-3.867 4.829a1.98 1.98 0 0 1-1.544.741h-6.174a.75.75 0 0 0-.503.194l-.525.475a.75.75 0 0 1-.34.877l-2.576 1.487a.75.75 0 0 1-1.025-.274L2.101 16.43a.75.75 0 0 1 .274-1.025l2.577-1.487a.75.75 0 0 1 .743-.004l1.693-1.353c.553-.442 1.253-.747 2.025-.75c.813-.004 2.099.068 3.262.492h2.598c.662 0 1.239.36 1.548.893zM8.559 17.948a2.25 2.25 0 0 1 1.51-.582h6.173a.48.48 0 0 0 .373-.179l3.867-4.829a.078.078 0 0 0-.11-.109l-3.852 3.123a1.78 1.78 0 0 1-1.247.507h-2.735a.75.75 0 1 1 0-1.5h2.735q.07 0 .13-.03l.024-.021l.073-.06a.288.288 0 0 0-.227-.465h-2.682q-.197 0-.369-.067c-.926-.353-2.033-.428-2.802-.425c-.374.002-.755.15-1.096.423l-1.788 1.43l1.75 3.03zM3.775 16.33l2.248 3.895l1.278-.738l-2.249-3.894z"></svg:path>`,
})
export class LineiconsHandTakingLeaf1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHandTakingUserIcon],svg[lineicons-hand-taking-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.442 4.052a1.866 1.866 0 1 1 3.733 0a1.866 1.866 0 0 1-3.733 0m1.867-.366a.366.366 0 1 0 0 .732a.366.366 0 0 0 0-.732m6.295 7.58a1.58 1.58 0 0 0-2.177-.182l-2.606 2.113a1.79 1.79 0 0 0-1.548-.893h-2.598c-1.163-.425-2.449-.497-3.262-.493c-.772.004-1.472.309-2.025.751l-1.693 1.353a.75.75 0 0 0-.743.004l-2.577 1.487a.75.75 0 0 0-.274 1.025l2.998 5.194a.75.75 0 0 0 1.025.274L8.7 20.411a.75.75 0 0 0 .34-.876l.525-.475a.75.75 0 0 1 .504-.194h6.173c.6 0 1.168-.273 1.544-.741l3.866-4.83a1.58 1.58 0 0 0-.048-2.03M8.286 18.194l-1.75-3.031l1.788-1.43c.341-.272.722-.42 1.096-.422c.769-.003 1.876.072 2.802.425q.173.066.37.068h2.681a.288.288 0 0 1 .227.465l-.073.059l-.025.02a.3.3 0 0 1-.129.031h-2.735a.75.75 0 0 0 0 1.5h2.735a1.78 1.78 0 0 0 1.247-.507l3.852-3.123a.078.078 0 0 1 .11.11l-3.867 4.828a.48.48 0 0 1-.373.18h-6.174a2.25 2.25 0 0 0-1.51.58zm-2.263 2.031L3.775 16.33l1.277-.737l2.249 3.894zm8.071-13.946a2.24 2.24 0 0 0-2.238 2.238v.93c0 .414.336.75.75.75h5.405a.75.75 0 0 0 .75-.75v-.93a2.24 2.24 0 0 0-2.238-2.238zm-.738 2.238c0-.408.33-.738.738-.738h2.429c.407 0 .738.33.738.738v.18h-3.905z"></svg:path>`,
})
export class LineiconsHandTakingUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHandshakeIcon],svg[lineicons-handshake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61 35.52h-2.34c-.79 0-1.46-.92-1.46-2V18.4c0-1.11.72-2.08 1.54-2.08H61a2 2 0 0 0 0-4h-2.26a5.44 5.44 0 0 0-4.74 2.9H40.91L39 13.55a14.12 14.12 0 0 0-12.7-3.22c-5.6 1.42-9.3 5.93-10.59 7.79h-2a5.72 5.72 0 0 0-5.45-5.8H3a2 2 0 0 0 0 4h5.24c.79 0 1.46.91 1.46 2v15.11c0 1.11-.72 2.09-1.54 2.09H3a2 2 0 0 0 0 4h5.16a5.46 5.46 0 0 0 4.71-2.9h.7a4.45 4.45 0 0 1 2.17.57a2 2 0 0 0 .36 1.56l2.31 3.09a2.07 2.07 0 0 0 1.08.73l3.06.82l1.37 2.92a2 2 0 0 0 1.28 1.08l3.22.88l2.09 3.32a2 2 0 0 0 1.15.86L37.23 54a2 2 0 0 0 .54.08a2 2 0 0 0 1.66-.88l10.45-15.52a1 1 0 0 1 .83-.44h3.67a5.31 5.31 0 0 0 4.28 2.28H61a2 2 0 0 0 0-4M18.94 20.44c1.07-1.51 4-5.14 8.34-6.24a10.15 10.15 0 0 1 9.09 2.36l4.09 3.56a2.4 2.4 0 0 1 .92 1.56a1.14 1.14 0 0 1-.32.85l-1.7 1.82a2.56 2.56 0 0 1-3.43.3l-.4-.3a6.42 6.42 0 0 0-8.42.59l-8.83 9.13a8.4 8.4 0 0 0-4.58-1.45v-10.5h2a4 4 0 0 0 3.24-1.68m27.63 15l-9.65 14.32l-3.44-1l-2.09-3.32a2 2 0 0 0-1.16-.86l-3.08-.84l-1.38-2.93a2 2 0 0 0-1.28-1.08l-3.29-.88l-.88-1.17l9.62-10a2.44 2.44 0 0 1 3.18-.21l.4.3a6.57 6.57 0 0 0 8.77-.77L44 25.26a5.14 5.14 0 0 0 1.39-3.79a5.45 5.45 0 0 0-.62-2.25h8.43v14h-2.49a5 5 0 0 0-4.14 2.22"></svg:path>`,
})
export class LineiconsHandshakeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHappyIcon],svg[lineicons-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46.3 35.3H17.7c-.7 0-1.4.3-1.8.9s-.6 1.3-.4 2c2.1 7.4 8.9 12.6 16.5 12.6c7.8 0 14.4-5 16.5-12.6c.2-.7.1-1.4-.4-2c-.4-.6-1.1-.9-1.8-.9M32 46.2c-4.6 0-8.7-2.5-11-6.4h22c-2.2 3.9-6.3 6.4-11 6.4"></svg:path><svg:path fill="currentColor" d="M32 .8C14.8.8.8 14.8.8 32s14 31.3 31.3 31.3s31.3-14 31.3-31.3S49.2.8 32 .8m0 58c-14.8 0-26.8-12-26.8-26.8S17.3 5.3 32 5.3s26.8 12 26.8 26.8s-12 26.7-26.8 26.7"></svg:path><svg:circle cx="20" cy="22.8" r="4" fill="currentColor"></svg:circle><svg:circle cx="44" cy="22.8" r="4" fill="currentColor"></svg:circle>`,
})
export class LineiconsHappyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHarddriveIcon],svg[lineicons-harddrive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48.2 2.3H15.8c-3.3 0-6 2.7-6 6v47.4c0 3.3 2.7 6 6 6h32.5c3.3 0 6-2.7 6-6V8.3c0-3.3-2.7-6-6.1-6m1.6 53.4c0 .9-.7 1.5-1.5 1.5H15.8c-.9 0-1.5-.7-1.5-1.5V8.3c0-.9.7-1.5 1.5-1.5h32.5c.9 0 1.5.7 1.5 1.5z"></svg:path><svg:path fill="currentColor" d="M43.6 32c0-6.3-5.2-11.5-11.5-11.5S20.6 25.7 20.6 32c0 2.3.7 4.5 1.9 6.3c-1.9 1.3-3.7 2.7-4.4 4c-2.1 3.6-.9 8.2 2.7 10.3c1.2.7 2.5 1 3.8 1c.6 0 1.3-.1 1.9-.3c1.9-.5 3.6-1.8 4.6-3.5c.8-1.3 1.1-3.8 1.3-6.4c6.2-.1 11.2-5.2 11.2-11.4M27.2 47.6c-.4.7-1.1 1.2-1.8 1.4c-.8.2-1.6.1-2.3-.3s-1.2-1.1-1.4-1.8s-.1-1.6.3-2.3c.5-.9 3.1-2.7 6.1-4.4c-.1 3.4-.4 6.6-.9 7.4m5.3-8.6c0-1.1 0-2.1-.1-2.7c0-.8-.5-1.5-1.1-1.9c-.7-.4-1.5-.4-2.2-.1c-.6.3-1.7.9-2.9 1.6c-.8-1.2-1.2-2.5-1.2-4c0-3.9 3.1-7 7-7s7 3.1 7 7c.1 3.8-2.8 6.8-6.5 7.1m10.3 11.3c-.4.4-.7 1-.7 1.6s.2 1.2.7 1.6c.4.4 1 .7 1.6.7h.4c.1 0 .3-.1.4-.1c.1-.1.3-.1.4-.2l.3-.3c.4-.4.7-1 .7-1.6s-.2-1.2-.7-1.6c-.8-.9-2.3-.9-3.1-.1"></svg:path>`,
})
export class LineiconsHarddriveIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHashnodeIcon],svg[lineicons-hashnode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.388 8.691a4.644 4.644 0 0 0 0 6.622l5.307 5.308a4.696 4.696 0 0 0 6.64 0l5.29-5.308a4.696 4.696 0 0 0 0-6.64l-5.307-5.307a4.707 4.707 0 0 0-6.623 0zm10.944 5.637a3.3 3.3 0 0 1-4.651 0a3.3 3.3 0 0 1 0-4.651a3.3 3.3 0 0 1 4.651 0a3.3 3.3 0 0 1 0 4.65"></svg:path>`,
})
export class LineiconsHashnodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHatChef3Icon],svg[lineicons-hat-chef-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.001 2a4.75 4.75 0 0 0-4.163 2.46a3.73 3.73 0 0 0-2.723 6.86l.425.245V20c0 .414.336.75.75.75h11.352a.75.75 0 0 0 .75-.75v-8.397l.494-.284a3.73 3.73 0 0 0-2.723-6.86A4.75 4.75 0 0 0 12 2M8.944 5.645a3.252 3.252 0 0 1 6.114-.001a.75.75 0 0 0 1.023.424a2.23 2.23 0 0 1 2.055 3.952l-.869.5a.75.75 0 0 0-.375.65v4.33H7.04v-4.368a.75.75 0 0 0-.375-.65l-.8-.461a2.23 2.23 0 0 1 2.056-3.952a.75.75 0 0 0 1.023-.424M7.04 17h9.852v2.25H7.04z"></svg:path>`,
})
export class LineiconsHatChef3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHeadphoneIcon],svg[lineicons-headphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M53.6 18c-5.9-5.8-13.7-8.9-22.1-8.7c-16.4.2-29.7 13.5-29.7 29.6v11.5c0 2.3 1.9 4.3 4.3 4.3h6.2c2.3 0 4.3-1.9 4.3-4.3v-8.8c0-2.3-1.9-4.3-4.3-4.3h-6c.8-13 11.8-23.5 25.2-23.7c7.1-.2 13.9 2.5 18.9 7.4c4.5 4.4 7.1 10.1 7.3 16.2h-5.9c-2.3 0-4.3 1.9-4.3 4.3v8.8c0 2.3 1.9 4.3 4.3 4.3H58c2.3 0 4.3-1.9 4.3-4.3v-12c0-7.5-3.1-14.8-8.7-20.3M11.9 50.2H6.3v-8.3H12v8.3zm45.9 0h-5.7v-8.3h5.7z"></svg:path>`,
})
export class LineiconsHeadphoneIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHeadphone1Icon],svg[lineicons-headphone-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.25A8.75 8.75 0 0 0 3.25 12v5.25A2.25 2.25 0 0 0 5.5 19.5h1a2.25 2.25 0 0 0 2.25-2.25v-3.5A2.25 2.25 0 0 0 6.5 11.5h-1q-.392.002-.74.125a7.25 7.25 0 0 1 14.48 0a2.3 2.3 0 0 0-.74-.125h-1a2.25 2.25 0 0 0-2.25 2.25v3.5a2.25 2.25 0 0 0 2.25 2.25h1a2.25 2.25 0 0 0 2.25-2.25V12A8.75 8.75 0 0 0 12 3.25m7.25 10.486v3.514a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 .75.736M6.5 13a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-1a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 5.5 13z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsHeadphone1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHeartIcon],svg[lineicons-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.823 4.771L12 4.95l.177-.178a5.754 5.754 0 0 1 8.138 8.138l-6.724 6.723a2.25 2.25 0 0 1-3.182 0L3.685 12.91a5.754 5.754 0 1 1 8.138-8.138m-1.061 1.06a4.254 4.254 0 1 0-6.016 6.017l6.724 6.724a.75.75 0 0 0 1.06 0l6.724-6.724a4.254 4.254 0 0 0-6.016-6.016l-.708.708a.75.75 0 0 1-1.06 0z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHeartFillIcon],svg[lineicons-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 57.6c-.8 0-1.6-.3-2.2-.8c-2.3-2-4.6-3.9-6.6-5.6c-5.8-4.9-10.9-9.2-14.4-13.4C4.8 33 3 28.6 3 23.7c0-4.7 1.6-9.1 4.6-12.3s7.1-5 11.6-5c3.3 0 6.4 1.1 9.1 3.1c1.1.8 2 1.8 2.9 2.9c.4.5 1.1.5 1.5 0c.9-1.1 1.9-2 2.9-2.9c2.7-2.1 5.8-3.1 9.1-3.1c4.5 0 8.6 1.8 11.6 5s4.6 7.6 4.6 12.3c0 4.9-1.8 9.3-5.8 14c-3.5 4.2-8.6 8.5-14.4 13.4c-2 1.7-4.3 3.6-6.6 5.6c-.5.6-1.3.9-2.1.9"></svg:path>`,
})
export class LineiconsHeartFillIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHeartMonitorIcon],svg[lineicons-heart-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.3 17L39.8 5.6c-.5-2.3-2.5-3.8-4.8-3.8h-6c-2.3 0-4.3 1.6-4.8 3.8L21.6 17c-3.3.2-5.9 2.9-5.9 6.2v17.5c0 3.3 2.6 6 5.9 6.2l2.6 11.5c.5 2.3 2.5 3.8 4.8 3.8h6c2.3 0 4.3-1.6 4.8-3.8L42.3 47c3.3-.2 5.9-2.9 5.9-6.2V23.3c0-3.4-2.6-6.1-5.9-6.3M28.6 6.6c0-.2.2-.3.4-.3h6c.2 0 .4.1.4.3L37.7 17H26.2zM22 21.5h20c1 0 1.8.8 1.8 1.8v8.3l-7-4c-.7-.4-1.5-.4-2.2 0L27 31.9l-6.7-3.8v-4.8c-.1-1 .7-1.8 1.7-1.8m13.4 35.9c0 .2-.2.3-.4.3h-6c-.2 0-.4-.1-.4-.3L26.2 47h11.5zM42 42.5H22c-1 0-1.8-.8-1.8-1.8v-7.4l5.5 3.2c.7.4 1.5.4 2.2 0l7.6-4.3l8.2 4.7v3.9c.1.9-.7 1.7-1.7 1.7"></svg:path>`,
})
export class LineiconsHeartMonitorIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHelicopterIcon],svg[lineicons-helicopter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 22.1c-1.2 0-2.2 1-2.2 2.2v.3h-21v-2c0-1.7-1.4-3.1-3.1-3.1H24v-5.7h11.9c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2H7.5c-1.2 0-2.2 1-2.2 2.2s1 2.2 2.2 2.2h11.9v5.7H10c-4.5 0-8.2 3.7-8.2 8.2v13.6c0 1.7 1.4 3.1 3.1 3.1h4.6v5.7H7c-.1-1.1-1.1-2-2.2-2c-1.2 0-2.2 1-2.2 2.2c0 2.4 2 4.3 4.5 4.3H32c1.2 0 2.2-1 2.2-2.2s-1-2.2-2.2-2.2h-5.4v-5.7h7.1c1.7 0 3.1-1.4 3.1-3.1v-2l21-2.3c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V24.4c0-1.3-1-2.3-2.2-2.3m-37.9 28h-8.2v-5.7h8.2zm10.2-10.2h-26V27.8c0-2.1 1.7-3.7 3.7-3.7h22.3zm4.5-5.1v-5.7h21v3.4z"></svg:path>`,
})
export class LineiconsHelicopterIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHelicopter2Icon],svg[lineicons-helicopter-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.125 6.734h-5.25v1.5h.126a6.75 6.75 0 0 1 6.75 6.75v.433a2.25 2.25 0 0 1-2.25 2.25H12.13a2.25 2.25 0 0 1-1.806-.907l-2.688-3.617a.75.75 0 0 0-.476-.292l-2.73-.467a2.25 2.25 0 0 1-1.843-1.866l-.582-3.666a.75.75 0 0 1 1.247-.672l2.035 1.858a.75.75 0 0 0 .506.196h6.582v-1.5h-5.25a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 0 1.5m-6.014 3H5.793a2.25 2.25 0 0 1-1.517-.588l-.454-.414l.246 1.552a.75.75 0 0 0 .615.621l2.73.468a2.25 2.25 0 0 1 1.426.875l2.689 3.617a.75.75 0 0 0 .602.302h6.37a.75.75 0 0 0 .75-.75v-.433c0-2.9-2.35-5.25-5.25-5.25zm9.283 9.614a.75.75 0 1 0-.788-1.276l-.872.538a3.75 3.75 0 0 1-1.969.558H9.79a.75.75 0 0 0 0 1.5h8.976a5.25 5.25 0 0 0 2.756-.782z"></svg:path>`,
})
export class LineiconsHelicopter2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHelmetIcon],svg[lineicons-helmet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M57.4 38.1C57.4 23.6 46 11.9 32 11.9S6.6 23.6 6.6 38v.1c-2.7.2-4.9 2.4-4.9 5.2v3.5c0 2.9 2.4 5.2 5.2 5.2h50c2.9 0 5.2-2.4 5.2-5.2v-3.5c.1-2.7-2-5-4.7-5.2M20.5 19.9v3.8c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-6.1c1.5-.6 3.1-.9 4.7-1.1v9.6c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-9.6c1.6.2 3.2.6 4.7 1.1v6.1c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-3.8c5.7 3.9 9.4 10.5 9.4 18.1v.1H11.1V38c0-7.5 3.8-14.2 9.4-18.1m37.3 27c0 .4-.3.8-.8.8H7c-.4 0-.8-.3-.8-.8v-3.5c0-.4.3-.8.8-.8h50c.4 0 .8.3.8.8z"></svg:path>`,
})
export class LineiconsHelmetIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHelmetSafety1Icon],svg[lineicons-helmet-safety-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2.5c1.2 0 2.18.939 2.246 2.122a9 9 0 0 1 6.254 8.574v1.413h.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H3.25a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75h.25v-1.414a9 9 0 0 1 6.254-8.573A2.25 2.25 0 0 1 12 2.5zM13 4h-1a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 1-1.5 0V6.216A7.5 7.5 0 0 0 5 13.196v1.413h3.75v-1.75a.75.75 0 0 1 1.5 0v1.75h1.5v-1.75a.75.75 0 0 1 1.5 0v1.75h1.5v-1.75a.75.75 0 0 1 1.5 0v1.75H20v-1.414a7.5 7.5 0 0 0-4.75-6.98V7.25a.75.75 0 0 1-1.5 0v-2.5A.75.75 0 0 0 13 4"></svg:path>`,
})
export class LineiconsHelmetSafety1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHelpIcon],svg[lineicons-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M45.9 16.7c-.7-6.6-6.1-12-12.9-12.9c-6.2-.7-12 2.4-14.8 7.8c-.6 1.1-.1 2.5 1 3c1.1.6 2.5.1 3-1c2-3.8 6-5.9 10.3-5.5c4.7.6 8.4 4.4 8.9 8.9c.5 4.3-1.8 8.4-5.7 10.2c-4.1 2-6.7 6.2-6.7 10.9V48c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-9.9c0-2.9 1.7-5.6 4.2-6.8c5.5-2.4 8.8-8.4 8.1-14.6M31.3 55.2c-1.2 0-2.3 1-2.3 2.3v.5c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3v-.5c-.1-1.3-1.1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsHelpIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHierarchy1Icon],svg[lineicons-hierarchy-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.274 3.75a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0m.247 4.177c-.345.255-.608.628-.803 1.106a.75.75 0 1 1-1.389-.566c.268-.659.677-1.286 1.302-1.747c.63-.466 1.427-.72 2.393-.72s1.761.254 2.393.72c.624.461 1.033 1.088 1.301 1.747a.75.75 0 0 1-1.389.566c-.195-.478-.458-.85-.803-1.106c-.339-.25-.811-.427-1.502-.427s-1.164.177-1.503.427M5.218 21.533c.195-.478.458-.85.803-1.106c.34-.25.812-.427 1.503-.427s1.163.177 1.502.427c.345.255.608.628.803 1.106a.75.75 0 1 0 1.39-.566c-.27-.659-.678-1.286-1.302-1.747c-.632-.466-1.428-.72-2.393-.72c-.966 0-1.762.254-2.393.72c-.625.461-1.034 1.088-1.302 1.747a.75.75 0 1 0 1.39.566m.555-5.283a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0m8.444 5.283c.195-.478.458-.85.803-1.106c.34-.25.812-.427 1.503-.427s1.163.177 1.502.427c.345.255.608.628.803 1.106a.75.75 0 1 0 1.39-.566c-.27-.659-.678-1.286-1.302-1.747c-.632-.466-1.428-.72-2.393-.72c-.966 0-1.762.254-2.393.72c-.625.461-1.033 1.088-1.302 1.747a.75.75 0 1 0 1.39.566m.555-5.283a1.75 1.75 0 1 1 3.5 0a1.75 1.75 0 0 1-3.5 0m-4.858-3.4a.75.75 0 1 0 .75 1.3l1.357-.784l1.357.784a.75.75 0 0 0 .75-1.3l-1.356-.783V10.5a.75.75 0 0 0-1.5 0v1.567z"></svg:path>`,
})
export class LineiconsHierarchy1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHighlightIcon],svg[lineicons-highlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M35.3 1.8h-6.6c-3.8 0-7 3.1-7 7V43c0 1.4 1.2 2.6 2.6 2.6h.1v4.6c0 1.2.4 2.2 1.1 3.1v6c0 .9.4 1.8 1.2 2.4q.75.6 1.8.6c.3 0 .6 0 .8-.1l7.1-2.1c1.3-.4 2.2-1.6 2.2-3v-3.8c.6-.8 1-1.9 1-3v-4.6c1.5 0 2.6-1.2 2.6-2.6V8.7c.1-3.8-3-6.9-6.9-6.9m-9.1 6.9c0-1.4 1.1-2.5 2.5-2.5h6.6c1.4 0 2.5 1.1 2.5 2.5v32.4H26.2zM30 57.2v-2.1h4.1v.9zm5.1-7c0 .2-.2.4-.4.4h-5.4c-.2 0-.4-.2-.4-.4v-4.6h6.2z"></svg:path>`,
})
export class LineiconsHighlightIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHighlightAltIcon],svg[lineicons-highlight-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m60 10.2l-5.3-5.3c-3-3-7.8-3-10.8 0L13.7 35.1c-1 1-1 2.7 0 3.8l.3.3L9.1 44c-.9.9-1.4 2.1-1.5 3.2l-4.9 4.9c-.7.7-1 1.7-.9 2.6s.7 1.8 1.6 2.2l7.4 4c.5.3 1 .4 1.5.4c.8 0 1.7-.3 2.3-1l3.1-3.1c1.1-.1 2.3-.6 3.1-1.5l4.9-4.9l.2.2c.5.5 1.2.8 1.9.8s1.4-.3 1.9-.8L60 20.9c1.4-1.4 2.2-3.3 2.2-5.4c0-2-.7-3.9-2.2-5.3M12 56.6L7.2 54l2.2-2.2l3.7 3.7zm10.5-8.8l-4.9 4.9c-.3.3-.8.3-1.1 0l-4.3-4.3c-.2-.3-.2-.5-.2-.6s0-.4.2-.6l4.9-4.9l2.7 2.7zm34.3-30.1l-29 29l-4.8-4.8l-4.9-4.9l29-29c1.2-1.2 3.2-1.2 4.4 0l5.3 5.3c1.3 1.3 1.3 3.2 0 4.4"></svg:path>`,
})
export class LineiconsHighlightAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHighlighter1Icon],svg[lineicons-highlighter-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.228 17.788a.75.75 0 0 1-.53-.22l-.177-.176l-1.591 1.59a1.75 1.75 0 0 1-1.844.406a1 1 0 0 1-.1.125l-.364.364a.75.75 0 0 1-.682.204l-2.345-.483a.75.75 0 0 1-.38-1.265l1.296-1.295a1 1 0 0 1 .125-.1a1.75 1.75 0 0 1 .405-1.844l1.59-1.591l-.176-.177a.75.75 0 0 1 0-1.06L14.94 3.78a2.25 2.25 0 0 1 3.182 0l2.121 2.121a2.25 2.25 0 0 1 0 3.182l-8.485 8.486a.75.75 0 0 1-.53.22M9.46 16.331l-1.768-1.767l-1.59 1.59a.25.25 0 0 0 0 .354l1.414 1.414a.25.25 0 0 0 .353 0zm1.591-.53l.014.014l.163.163l7.955-7.955a.75.75 0 0 0 0-1.06L17.06 4.84a.75.75 0 0 0-1.06 0l-7.955 7.955l.163.163l.014.014z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsHighlighter1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHighlighter2Icon],svg[lineicons-highlighter-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.059 4.002A2.25 2.25 0 0 1 11.295 2h1.46a2.25 2.25 0 0 1 2.237 2.002l1.158 10.423a2.25 2.25 0 0 1-.582 1.773l-.397.432a.75.75 0 0 0-.186.37l-.375 2.002a.76.76 0 0 1-.747.62h-.167v.937a.75.75 0 0 1-.486.702l-1.843.691a.75.75 0 0 1-1.013-.702v-1.628h-.16a.76.76 0 0 1-.747-.62l-.374-1.993a.75.75 0 0 0-.185-.37l-.406-.441a2.25 2.25 0 0 1-.582-1.773zm2.236-.502a.75.75 0 0 0-.745.667l-.931 8.378h4.813L13.5 4.167a.75.75 0 0 0-.745-.667zm3.303 10.545H9.452l-.06.546a.75.75 0 0 0 .193.59l.406.441c.286.31.479.695.557 1.11l.26 1.39h2.44l.263-1.399c.078-.415.27-.8.557-1.11l.397-.431a.75.75 0 0 0 .194-.591z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsHighlighter2Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHomeIcon],svg[lineicons-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56.4 62.3H43.3c-3.2 0-5.9-2.6-5.9-5.9V45.8c0-.8-.6-1.4-1.4-1.4h-8c-.8 0-1.4.6-1.4 1.4v10.6c0 3.3-2.6 5.9-5.9 5.9H7.6c-3.2 0-5.9-2.6-5.9-5.9V22.7c0-1.7.8-3.2 2.2-4.1L29.4 2.5c1.6-1 3.6-1 5.1 0L60 18.7c1.4.9 2.2 2.4 2.2 4.1v33.6c.1 3.2-2.6 5.9-5.8 5.9M28 39.9h8c3.3 0 5.9 2.6 5.9 5.9v10.6c0 .8.6 1.4 1.4 1.4h13.1c.8 0 1.4-.6 1.4-1.4V22.7c0-.1-.1-.2-.1-.3L32.1 6.3q-.15-.15-.3 0L6.4 22.4c-.1.1-.2.2-.2.3v33.7c0 .8.6 1.4 1.4 1.4h13.1c.8 0 1.4-.6 1.4-1.4V45.8c0-3.2 2.6-5.9 5.9-5.9"></svg:path>`,
})
export class LineiconsHomeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHome2Icon],svg[lineicons-home-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.45 4.903a.75.75 0 0 0-.9 0l-6.5 4.875a.75.75 0 0 0-.3.6V18.5c0 .414.336.75.75.75H9V17a3 3 0 0 1 6 0v2.25h3.5a.75.75 0 0 0 .75-.75v-8.122a.75.75 0 0 0-.3-.6zm-1.8-1.2c.8-.6 1.9-.6 2.7 0l6.5 4.875c.567.425.9 1.092.9 1.8V18.5a2.25 2.25 0 0 1-2.25 2.25h-4.25a.75.75 0 0 1-.75-.75v-3a1.5 1.5 0 0 0-3 0v3a.75.75 0 0 1-.75.75H5.5a2.25 2.25 0 0 1-2.25-2.25v-8.122c0-.708.333-1.375.9-1.8z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsHome2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHospitalIcon],svg[lineicons-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M55.3 20.3L35.7 3.1c-2.1-1.8-5.3-1.8-7.4 0L8.7 20.3c-1.2 1.1-1.9 2.6-1.9 4.2v32.2c0 3.1 2.5 5.6 5.6 5.6H21c3.1 0 5.6-2.5 5.6-5.6V45.5c0-.6.5-1.1 1.1-1.1h8.6c.6 0 1.1.5 1.1 1.1v11.1c0 3.1 2.5 5.6 5.6 5.6h8.6c3.1 0 5.6-2.5 5.6-5.6V24.5c0-1.6-.7-3.2-1.9-4.2m-2.6 36.4c0 .6-.5 1.1-1.1 1.1H43c-.6 0-1.1-.5-1.1-1.1V45.5c0-3.1-2.5-5.6-5.6-5.6h-8.6c-3.1 0-5.6 2.5-5.6 5.6v11.1c0 .6-.5 1.1-1.1 1.1h-8.6c-.6 0-1.1-.5-1.1-1.1V24.5c0-.3.1-.6.4-.8L31.3 6.5c.4-.4 1-.4 1.4 0l19.6 17.1c.2.2.4.5.4.8z"></svg:path><svg:path fill="currentColor" d="M37.1 19.5c-1.2 0-2.2 1-2.2 2.2v2.8h-5.7v-2.8c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2V32c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2v-2.8h5.7V32c0 1.2 1 2.2 2.2 2.2s2.2-1 2.2-2.2V21.8c0-1.3-1-2.3-2.2-2.3"></svg:path>`,
})
export class LineiconsHospitalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHospital2Icon],svg[lineicons-hospital-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.92 10.419a.75.75 0 0 0-1.5 0v5.163a.75.75 0 0 0 1.5 0V13.75h2.16v1.832a.75.75 0 0 0 1.5 0v-5.163a.75.75 0 0 0-1.5 0v1.831h-2.16z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.35 3.704c-.8-.6-1.9-.6-2.7 0l-6.5 4.875a2.25 2.25 0 0 0-.9 1.8V18.5a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25v-8.12a2.25 2.25 0 0 0-.9-1.8zm-1.8 1.2a.75.75 0 0 1 .9 0l6.5 4.875a.75.75 0 0 1 .3.6V18.5a.75.75 0 0 1-.75.75h-13a.75.75 0 0 1-.75-.75v-8.12a.75.75 0 0 1 .3-.6z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsHospital2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHourglassIcon],svg[lineicons-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3.25a.75.75 0 0 0 0 1.5h1.25V6a6.75 6.75 0 0 0 3.655 6a6.75 6.75 0 0 0-3.655 6v1.25H4a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5h-1.25V18a6.75 6.75 0 0 0-3.655-6a6.75 6.75 0 0 0 3.655-6V4.75H20a.75.75 0 0 0 0-1.5zm7.99 9.5h.02A5.25 5.25 0 0 1 17.25 18v1.25H6.75V18a5.25 5.25 0 0 1 5.24-5.25m.02-1.5h-.02A5.25 5.25 0 0 1 6.75 6V4.75h10.5V6a5.25 5.25 0 0 1-5.24 5.25"></svg:path>`,
})
export class LineiconsHourglassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsHtml5Icon],svg[lineicons-html5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.233 2h.902v.89h.824V2h.902v2.697h-.902v-.903h-.824v.903h-.902zm3.813.894h-.793V2h2.489v.894h-.794v1.803h-.902zM12.136 2h.94l.579.948l.578-.948h.94v2.697h-.898V3.36l-.62.96h-.015l-.621-.96v1.337h-.882zm3.486 0h.901v1.806h1.268v.891h-2.17z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m4.915 5.93l1.29 14.464L11.99 22l5.802-1.609l1.291-14.46zm11.202 6.547H9.652l-.162-1.816h6.788l.159-1.774H7.552l.478 5.364h6.148l-.206 2.3l-1.978.535h-.002l-1.976-.533l-.126-1.415H8.11l.248 2.785l3.633 1.009l.009-.002l3.63-1.007l.443-4.97z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsHtml5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsIbmIcon],svg[lineicons-ibm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8v.547h3.893V8zm4.445 0v.547h5.547S11.425 8 10.675 8zm6.636 0v.547h3.356l-.2-.547zm5.762 0l-.2.547h3.326V8zM2 9.064v.548h3.893v-.548zm4.445.001v.547h6.19s-.071-.421-.197-.547zm6.636 0v.547h3.724l-.185-.547zm5.364 0l-.185.547h3.71v-.547zM3.119 10.13v.548h1.686v-.548zm4.444 0v.548H9.25v-.548zm3.326 0v.548h1.686s.107-.29.107-.548zm3.31 0v.548h2.99l-.2-.548zm3.878 0l-.2.548h3.004v-.548zM3.12 11.194v.547h1.686v-.547zm4.444 0v.547h4.307s.36-.28.475-.547zm6.636 0v.547h1.686v-.304l.107.305h3.089l.114-.305v.305h1.686v-.548h-3.165l-.168.464l-.168-.464zM3.12 12.26v.547h1.686v-.547zm4.444 0v.547h4.782c-.115-.266-.476-.547-.476-.547zm6.636 0v.547h1.686v-.547zm1.992 0l.204.547h2.316l.194-.547zm3.004 0v.547h1.686v-.547zM3.12 13.323v.547h1.686v-.547zm4.444 0v.547H9.25v-.547zm3.326 0v.547h1.793a1.9 1.9 0 0 0-.107-.547zm3.31 0v.547h1.686v-.547zm2.375 0l.198.547h1.552l.2-.547zm2.621 0v.547h1.686v-.547zM2.03 14.387v.549h3.893v-.549zm4.415 0v.549h5.993c.126-.126.198-.549.198-.549zm6.666 0v.549h2.774v-.549zm3.847 0l.203.549h.79l.19-.549zm2.237 0v.549H22v-.549zM2.03 15.453V16h3.893v-.547zm4.415 0v.546h4.23c.75 0 1.317-.546 1.317-.546zm6.666 0V16h2.774v-.547zm4.232 0l.195.546h.034l.198-.546zm1.852 0V16H22v-.547z"></svg:path>`,
})
export class LineiconsIbmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsIdCardIcon],svg[lineicons-id-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.837 9.861a1.616 1.616 0 1 1 3.232 0a1.616 1.616 0 0 1-3.232 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.24 12.087A2.24 2.24 0 0 0 5 14.325v.93c0 .415.336.75.75.75h5.405a.75.75 0 0 0 .75-.75v-.93a2.24 2.24 0 0 0-2.238-2.238zm-.74 2.238c0-.407.33-.738.738-.738h2.429c.407 0 .738.33.738.738v.18H6.501z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M19 10.501a.75.75 0 0 1-.75.75h-4.1a.75.75 0 0 1 0-1.5h4.1a.75.75 0 0 1 .75.75m-2.85 3.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 4.501A2.25 2.25 0 0 0 2 6.751v10.5a2.25 2.25 0 0 0 2.25 2.25h15.5a2.25 2.25 0 0 0 2.25-2.25v-10.5a2.25 2.25 0 0 0-2.25-2.25zm-.75 2.25a.75.75 0 0 1 .75-.75h15.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsIdCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsImageIcon],svg[lineicons-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.6 31.7c4.7 0 8.6-3.8 8.6-8.6s-3.8-8.6-8.6-8.6s-8.6 4-8.6 8.7s3.9 8.5 8.6 8.5m0-12.6c2.2 0 4.1 1.8 4.1 4.1s-1.8 4.1-4.1 4.1s-4.1-1.8-4.1-4.1s1.8-4.1 4.1-4.1"></svg:path><svg:path fill="currentColor" d="M52.7 1.8H11.3C7.9 1.8 5.1 4.6 5.1 8v48c0 3.4 2.8 6.3 6.3 6.3h41.3c3.4 0 6.3-2.8 6.3-6.3V8c-.1-3.4-2.9-6.2-6.3-6.2M11.3 6.3h41.3c1 0 1.8.8 1.8 1.8V43l-7.3-6c-2.1-1.7-5.1-1.6-7 .3l-8.2 8.1L21.4 36c-2-1.8-5-1.8-7 0l-4.8 4.3V8c0-1 .8-1.7 1.7-1.7m41.4 51.5H11.3c-1 0-1.8-.8-1.8-1.8v-9.7l7.8-7.1c.3-.3.7-.3 1 0L30.4 50c.4.4 1 .6 1.5.6c.6 0 1.1-.2 1.6-.7l9.7-9.6c.3-.3.7-.3 1 0l10.1 8.4V56c.1 1-.7 1.8-1.6 1.8"></svg:path>`,
})
export class LineiconsImageIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsImdbIcon],svg[lineicons-imdb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.645 2H3.355c-.742.032-1.323.645-1.387 1.323v17.322c.064.71.613 1.258 1.322 1.355h17.42c.742-.032 1.322-.677 1.322-1.42V3.42c-.064-.743-.645-1.388-1.387-1.42m.936 18.58a.99.99 0 0 1-.904 1H3.29a.96.96 0 0 1-.903-.967V3.355c.032-.516.452-.903.968-.968h17.258c.548.032.968.452.968 1z"></svg:path><svg:path fill="currentColor" d="M5.968 8.87h-1.58V15h1.58zm3 2.904l-.226-1.58c-.032-.484-.129-.968-.193-1.323H6.517V15H7.87v-4.032L8.453 15h1l.549-4.13V15h1.354V8.87H9.26zm6.29-2.419c-.129-.194-.355-.258-.645-.355c-.258-.032-.742-.097-1.452-.097h-1.193v6.13h1.903c.484 0 1.161.064 1.452-.42c.129-.194.16-.452.193-.71c.032-.226.032-.451.032-.71v-2.128c0-.581 0-.968-.032-1.194c-.032-.193-.129-.355-.258-.516m-1.129 3.742c0 .42-.097.645-.129.742s-.194.129-.42.129V9.903c.194 0 .259 0 .355.033a.5.5 0 0 1 .13.193c.032.097.032.258.032.549v2.419zm5.388-2.291c-.065-.129-.162-.193-.323-.258a1.6 1.6 0 0 0-.87-.064c-.13.032-.259.064-.388.129c-.064.032-.129.064-.194.129c-.032.032-.16.097-.16.129v-2h-1.55V15h1.452l.097-.42c.13.13.258.259.42.355c.129.097.322.097.483.097c.162 0 .355-.032.516-.097a1.08 1.08 0 0 0 .613-.903c.033-.548.033-1.097.033-1.677v-1.13a1.6 1.6 0 0 0-.13-.419m-1.355 2.742c0 .258 0 .484-.032.549c-.033.097-.13.129-.258.129c-.097 0-.13-.033-.194-.097c-.032-.097-.032-.226-.032-.484V12c0-.258 0-.452.032-.484s.097-.097.194-.097c.096 0 .225.032.258.13c.032.096.032.225.032.483z"></svg:path>`,
})
export class LineiconsImdbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsInboxIcon],svg[lineicons-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 26.3c-1.2 0-2.3 1-2.3 2.3v18.8c0 3.9-2.9 7-6.5 7H12.8c-3.7 0-6.5-3.1-6.5-7V28.5c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v18.8c0 6.3 4.9 11.5 11 11.5h38.5c6.1 0 11-5.1 11-11.5V28.5c.1-1.2-1-2.2-2.2-2.2"></svg:path><svg:path fill="currentColor" d="M30.4 41.2c.4.4 1 .7 1.6.7s1.1-.2 1.6-.7l12.2-12.1c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0l-8.3 8.2V7.5c0-1.2-1-2.3-2.3-2.3c-1.2 0-2.3 1-2.3 2.3v26.8L21.4 26c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2z"></svg:path>`,
})
export class LineiconsInboxIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsIndentIcon],svg[lineicons-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 4a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16A.75.75 0 0 1 3.75 4m8.714 5.334a.75.75 0 0 1 .75-.75H20.5a.75.75 0 1 1 0 1.5h-7.286a.75.75 0 0 1-.75-.75m.75 4.582a.75.75 0 1 0 0 1.5H20.5a.75.75 0 1 0 0-1.5zM3.75 20a.75.75 0 0 1 .75-.75h16a.75.75 0 0 1 0 1.5h-16a.75.75 0 0 1-.75-.75m1.5-10.683l.015-.008l4.198 2.684z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.75 9.323c0-1.196 1.321-1.92 2.329-1.275l4.187 2.677a1.513 1.513 0 0 1 0 2.55L6.08 15.952c-1.008.644-2.329-.08-2.329-1.275zm1.5-.006v5.366l.007.006l.008.003l.006-.004l4.187-2.677h.002l.002-.002l.001-.001l.001-.008v-.008h-.002l-.002-.002l-.002-.001L5.271 9.31l-.006-.002l-.008.002q-.006.004-.006.006" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsIndentIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsIndentDecreaseIcon],svg[lineicons-indent-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.7 6.3h45.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H9.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3m45.8 51.5H9.7c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h45.8c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3M17.4 42.9c.5.4 1.2.7 1.9.7c.4 0 .8-.1 1.2-.2c1.1-.4 1.8-1.4 1.9-2.5V23.4c0-1.2-.7-2.4-1.8-2.9c-1-.5-2.2-.3-3.1.4l-10 8.5c-.7.6-1.2 1.5-1.2 2.4s.4 1.8 1.1 2.4zm.5-16.4v10.9l-6.4-5.5zm37.6-10.8H33.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h21.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.2-2.3m0 14.1H33.6c-1.2 0-2.3 1-2.3 2.3s1 2.2 2.3 2.2h21.8c1.2 0 2.3-1 2.3-2.2s-1-2.3-2.2-2.3m0 14H33.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h21.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.2-2.3"></svg:path>`,
})
export class LineiconsIndentDecreaseIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsIndentIncreaseIcon],svg[lineicons-indent-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 6.3h45.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H8.5c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3m45.8 51.5H8.5c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h45.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3m2.3-28.3l-10.1-8.6c-.9-.8-2.1-.9-3.1-.4c-1.1.5-1.8 1.6-1.8 2.9v17.5c.1 1.1.8 2.1 1.9 2.5c.4.2.8.2 1.2.2c.7 0 1.3-.2 1.9-.7l10-8.6c.7-.6 1.1-1.4 1.1-2.4s-.4-1.9-1.1-2.4m-10.5 7.9V26.5l6.4 5.4zM8.5 20.2h21.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H8.5c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3m0 14.1h21.8c1.2 0 2.3-1 2.3-2.3c0-1.2-1-2.3-2.3-2.3H8.5c-1.2 0-2.3 1-2.3 2.3c.1 1.3 1.1 2.3 2.3 2.3m0 14h21.8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H8.5c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3"></svg:path>`,
})
export class LineiconsIndentIncreaseIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsInfiniteIcon],svg[lineicons-infinite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 17.8c-5.8 0-12.8 7-16 10.7c-3.3-3.7-10.2-10.7-16-10.7c-7.9 0-14.2 6.4-14.2 14.2S8.1 46.2 16 46.2c5.8 0 12.8-7 16-10.7c3.3 3.7 10.2 10.7 16 10.7c7.8 0 14.2-6.4 14.2-14.2S55.9 17.8 48 17.8M16 41.7c-5.4 0-9.7-4.4-9.7-9.7s4.4-9.7 9.7-9.7c3.6 0 9.5 5.5 13.1 9.7c-3.6 4.2-9.5 9.7-13.1 9.7m32 0c-3.6 0-9.5-5.5-13.1-9.7c3.6-4.2 9.5-9.7 13.1-9.7c5.4 0 9.7 4.4 9.7 9.7s-4.3 9.7-9.7 9.7"></svg:path>`,
})
export class LineiconsInfiniteIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsInfoIcon],svg[lineicons-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.563 18.89a.75.75 0 1 0 1.5 0V8.39a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5h.75z"></svg:path>`,
})
export class LineiconsInfoIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsInformationIcon],svg[lineicons-information-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40.4 56h-6.1V21.6c0-2.8-2.3-5-5-5h-5.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h5.6c.3 0 .5.2.5.5V56h-6.1c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h16.8c1.2 0 2.3-1 2.3-2.3S41.6 56 40.4 56"></svg:path><svg:circle cx="31.5" cy="8.7" r="3" fill="currentColor"></svg:circle>`,
})
export class LineiconsInformationIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsInjection1Icon],svg[lineicons-injection-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.594 2.218a.75.75 0 0 1 1.06 0l1.19 1.19l.002.001l2.958 2.959a.75.75 0 1 1-1.06 1.06l-.66-.66l-1.707 1.706l.707.707a.75.75 0 0 1 0 1.06l-8.276 8.278a2.25 2.25 0 0 1-2.814.298l-.034.036l-1.038 1.038a.75.75 0 0 1-1.06 0l-.335-.335l-2.225 2.225a.75.75 0 1 1-1.06-1.06l2.224-2.226l-.334-.333a.75.75 0 0 1 0-1.061l1.038-1.038l.036-.034a2.25 2.25 0 0 1 .298-2.814l8.277-8.277a.75.75 0 0 1 1.06 0l.708.707l1.706-1.706l-.661-.66a.75.75 0 0 1 0-1.061M18.315 5L16.61 6.706l.708.707l1.706-1.706zm-3.302 2.23l-.701-.7l-7.747 7.746a.75.75 0 0 0 0 1.06l2.121 2.122a.75.75 0 0 0 1.061 0l7.747-7.747l-.702-.701l-.006-.006l-1.768-1.768z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsInjection1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsInstagramIcon],svg[lineicons-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="lineiconsInstagram0" fill="currentColor" d="M8.667 12a3.333 3.333 0 1 1 6.667 0a3.333 3.333 0 0 1-6.667 0m-1.802 0a5.135 5.135 0 1 0 10.27 0a5.135 5.135 0 0 0-10.27 0m9.273-5.338a1.2 1.2 0 1 0 1.2-1.2a1.2 1.2 0 0 0-1.2 1.2M7.96 20.14c-.975-.045-1.505-.207-1.857-.344a3.1 3.1 0 0 1-1.15-.748a3.1 3.1 0 0 1-.748-1.15c-.138-.352-.3-.882-.344-1.857c-.049-1.054-.058-1.37-.058-4.04s.01-2.987.058-4.042c.044-.975.208-1.504.344-1.857c.181-.467.398-.8.748-1.15s.682-.567 1.15-.748c.352-.138.882-.3 1.857-.344C9.014 3.81 9.33 3.8 12 3.8s2.986.01 4.041.059c.975.044 1.504.208 1.857.344c.467.18.8.398 1.15.748s.567.683.749 1.15c.137.352.3.882.343 1.857c.049 1.055.059 1.37.059 4.041c0 2.67-.01 2.986-.059 4.041c-.044.975-.207 1.505-.343 1.857a3.1 3.1 0 0 1-.748 1.15a3.1 3.1 0 0 1-1.15.748c-.353.137-.883.3-1.858.344c-1.054.048-1.37.058-4.041.058c-2.67 0-2.986-.01-4.04-.058M7.877 2.06c-1.064.049-1.792.218-2.427.465a4.9 4.9 0 0 0-1.772 1.153A4.9 4.9 0 0 0 2.525 5.45c-.247.636-.416 1.363-.464 2.427C2.01 8.943 2 9.284 2 12s.011 3.057.06 4.123c.049 1.064.218 1.791.465 2.427a4.9 4.9 0 0 0 1.153 1.771a4.9 4.9 0 0 0 1.772 1.154c.636.247 1.363.416 2.427.464C8.944 21.988 9.284 22 12 22s3.057-.011 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.9 4.9 0 0 0 1.771-1.154a4.9 4.9 0 0 0 1.154-1.77c.247-.637.417-1.364.464-2.428c.049-1.067.06-1.407.06-4.123s-.011-3.057-.06-4.123c-.048-1.064-.217-1.792-.464-2.427a4.9 4.9 0 0 0-1.154-1.772a4.9 4.9 0 0 0-1.77-1.153c-.637-.247-1.364-.417-2.427-.464C15.057 2.012 14.717 2 12 2s-3.057.011-4.124.06"></svg:path></svg:defs><svg:use href="#lineiconsInstagram0"></svg:use><svg:use href="#lineiconsInstagram0"></svg:use>`,
})
export class LineiconsInstagramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsInstagramFillIcon],svg[lineicons-instagram-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32.1" cy="32" r="11.6" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M44.7 1H19.3C9.2 1 1 9.2 1 19.3v25.2C1 54.8 9.2 63 19.3 63h25.2C54.8 63 63 54.8 63 44.7V19.3C63 9.2 54.8 1 44.7 1M32.1 47.2c-8.5 0-15.2-6.9-15.2-15.2s6.8-15.2 15.2-15.2c8.3 0 15.1 6.9 15.1 15.2s-6.7 15.2-15.1 15.2m21-29c-1 1.1-2.5 1.7-4.2 1.7c-1.5 0-3-.6-4.2-1.7c-1.1-1.1-1.7-2.5-1.7-4.2s.6-3 1.7-4.2Q46.35 8 48.9 8c1.5 0 3.1.6 4.2 1.7c1 1.3 1.7 2.8 1.7 4.4c-.1 1.6-.7 3-1.7 4.1"></svg:path><svg:path fill="currentColor" d="M49 11.6c-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4s2.4-1.1 2.4-2.4s-1-2.4-2.4-2.4"></svg:path>`,
})
export class LineiconsInstagramFillIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsInstagramLogotypeIcon],svg[lineicons-instagram-logotype-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.03 9.183c-.41.171-.86.655-1.002 1.263c-.18.77.569 1.095.63.989c.073-.126-.134-.168-.176-.568c-.055-.516.185-1.092.486-1.345c.057-.047.054.018.054.14c0 .216-.012 2.158-.012 2.563c0 .549-.023.722-.063.893c-.042.174-.108.291-.058.336c.056.05.296-.07.435-.263c.166-.232.224-.511.235-.814c.012-.365.012-.944.012-1.274c0-.303.005-1.19-.005-1.724c-.003-.13-.365-.268-.537-.196m18.88 2.881c-.06 0-.086.062-.109.165c-.077.358-.16.439-.265.439c-.117 0-.223-.178-.25-.533c-.022-.279-.018-.793.009-1.304c.006-.105-.023-.21-.305-.312c-.121-.044-.298-.109-.385.103c-.248.599-.345 1.074-.368 1.267c-.002.01-.014.012-.016-.011c-.014-.155-.047-.436-.051-1.026c0-.115-.025-.213-.152-.294c-.083-.052-.333-.144-.423-.034c-.078.09-.169.33-.263.616c-.076.233-.13.39-.13.39l.002-.865c0-.09-.06-.12-.08-.125a1.7 1.7 0 0 0-.317-.065c-.087 0-.108.049-.108.119c0 .009-.013.825-.013 1.396v.08c-.048.263-.202.619-.37.619c-.169 0-.248-.149-.248-.83c0-.396.012-.569.017-.856c.004-.165.01-.292.01-.321c-.001-.088-.154-.133-.225-.15a.7.7 0 0 0-.182-.02c-.069.004-.117.049-.117.111v.096a.66.66 0 0 0-.325-.263c-.255-.076-.52-.009-.72.272c-.16.223-.256.475-.294.838a2.5 2.5 0 0 0 .03.761c-.059.257-.169.362-.29.362c-.175 0-.302-.286-.287-.78c.01-.326.075-.554.146-.884c.03-.14.005-.215-.056-.285c-.057-.065-.178-.098-.351-.057c-.124.029-.301.06-.463.084c0 0 .01-.04.018-.108c.042-.36-.35-.33-.474-.216a.44.44 0 0 0-.145.296c-.03.23.158.34.158.34a3.5 3.5 0 0 1-.37.92a4 4 0 0 1-.23.362l-.001-.126c-.002-.595.006-1.063.01-1.232c.003-.165.01-.289.01-.318c-.002-.064-.04-.089-.118-.12a.8.8 0 0 0-.237-.053c-.107-.008-.172.05-.17.117v.09a.66.66 0 0 0-.325-.263c-.255-.076-.52-.009-.72.272a1.8 1.8 0 0 0-.294.835a2.6 2.6 0 0 0 .015.716c-.04.2-.157.41-.288.41c-.169 0-.265-.149-.265-.83c0-.396.012-.569.018-.856c.003-.165.01-.292.01-.321c-.002-.088-.154-.133-.225-.15a.7.7 0 0 0-.188-.02c-.066.005-.111.064-.111.107v.1a.66.66 0 0 0-.325-.263c-.255-.076-.52-.008-.721.272c-.132.182-.239.384-.293.831q-.024.194-.022.363c-.053.321-.285.692-.475.692c-.11 0-.216-.216-.216-.675c0-.611.038-1.481.044-1.565l.286-.005c.12-.001.228.002.387-.006c.08-.005.157-.291.075-.327a3 3 0 0 0-.407-.032c-.088-.002-.333-.02-.333-.02s.022-.578.027-.639c.005-.05-.061-.077-.099-.093a1.4 1.4 0 0 0-.271-.077c-.134-.028-.195-.001-.207.112c-.018.173-.028.677-.028.677c-.098 0-.435-.02-.534-.02c-.092 0-.19.395-.064.4c.146.006.4.01.569.016c0 0-.008.885-.008 1.158v.084c-.092.483-.419.744-.419.744c.07-.32-.073-.56-.331-.763a25 25 0 0 0-.493-.372s.121-.12.23-.361c.076-.171.08-.367-.109-.41c-.31-.071-.565.157-.641.4a.46.46 0 0 0 .088.473l.027.032c-.07.135-.166.317-.248.458c-.226.39-.397.7-.526.7c-.103 0-.101-.314-.101-.608c0-.253.018-.635.033-1.03c.005-.13-.06-.204-.17-.271c-.066-.041-.208-.122-.29-.122c-.123 0-.478.017-.813.987c-.042.122-.125.345-.125.345l.007-1.166q.002-.043-.048-.072a.8.8 0 0 0-.341-.094q-.096 0-.096.09l-.012 1.823c0 .139.004.3.018.371s.035.129.063.163a.18.18 0 0 0 .111.071c.049.01.314.044.328-.057c.017-.122.017-.254.157-.745c.217-.765.5-1.138.634-1.27c.023-.023.05-.025.049.013c-.006.168-.026.587-.04.943c-.036.952.138 1.129.385 1.129c.19 0 .457-.189.743-.665c.178-.297.352-.588.476-.798c.087.08.184.167.281.26c.227.214.3.418.252.611c-.038.148-.18.3-.432.152c-.074-.043-.105-.076-.18-.125c-.04-.026-.1-.034-.136-.007a.5.5 0 0 0-.18.275c-.03.109.08.166.193.217c.098.043.307.083.441.087c.522.018.94-.252 1.23-.946c.052.6.274.94.659.94c.257 0 .515-.333.628-.66q.049.2.142.347c.296.47.872.368 1.16-.03a.8.8 0 0 0 .104-.168a.544.544 0 0 0 .519.508c.194 0 .395-.092.536-.409a1 1 0 0 0 .054.099c.297.47.872.368 1.161-.03l.036-.051l.008.247l-.266.244c-.446.409-.784.719-.81 1.08c-.031.46.342.631.625.654c.3.023.557-.142.714-.374c.14-.204.23-.643.223-1.077l-.01-.632a5 5 0 0 0 .959-1.673s.165.001.34-.01c.057-.004.073.007.063.049c-.013.05-.223.858-.031 1.397c.13.368.426.487.601.487c.205 0 .4-.155.506-.385q.018.038.04.074c.297.47.87.368 1.161-.03c.066-.09.103-.168.103-.168c.062.39.366.51.54.51c.18 0 .352-.074.491-.403c.006.145.015.263.03.3c.008.024.06.052.097.066a.75.75 0 0 0 .397.02c.043-.009.077-.043.082-.133c.012-.235.004-.63.076-.925c.12-.493.231-.684.284-.779c.03-.053.063-.062.064-.005c.003.113.008.447.055.895c.034.33.08.525.114.586c.1.177.224.185.324.185c.064 0 .197-.018.185-.13c-.005-.054.005-.393.123-.878c.077-.318.206-.604.252-.71c.017-.038.025-.007.025-.001c-.01.218-.032.933.057 1.324c.12.53.47.588.591.588c.26 0 .472-.197.544-.717c.017-.125-.008-.222-.085-.222m-10.876-.321c-.015.275-.07.505-.155.672c-.156.302-.464.398-.6-.039c-.098-.315-.065-.744-.024-.976c.06-.344.212-.588.448-.565c.243.023.362.336.33.908m2.373.004c-.014.26-.081.52-.155.668c-.151.304-.468.4-.6-.039c-.09-.299-.068-.686-.024-.93c.058-.317.198-.611.449-.611c.244 0 .364.267.33.912m.062 1.772c-.003.474-.078.89-.238 1.01c-.227.17-.532.043-.468-.303c.055-.306.32-.619.707-1zm4.097-1.77a1.7 1.7 0 0 1-.155.666c-.151.304-.466.399-.6-.039c-.073-.238-.076-.636-.024-.97c.054-.338.203-.594.449-.571c.243.023.357.336.33.915"></svg:path>`,
})
export class LineiconsInstagramLogotypeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsInstagramOriginalIcon],svg[lineicons-instagram-original-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M62.9 19.2c-.1-3.2-.7-5.5-1.4-7.6S59.7 7.8 58 6.1s-3.4-2.7-5.4-3.5s-4.2-1.3-7.6-1.4C41.5 1 40.5 1 32 1s-9.4 0-12.8.1s-5.5.7-7.6 1.4s-3.8 1.9-5.5 3.6s-2.8 3.4-3.5 5.5c-.8 2-1.3 4.2-1.4 7.6S1 23.5 1 32s0 9.4.1 12.8s.7 5.5 1.4 7.6s1.8 3.8 3.5 5.5s3.5 2.8 5.5 3.5s4.2 1.3 7.6 1.4c3.4.2 4.3.2 12.8.2s9.4 0 12.8-.1s5.5-.7 7.6-1.4s3.8-1.8 5.5-3.5s2.8-3.5 3.5-5.5s1.3-4.2 1.4-7.6c.1-3.2.1-4.2.1-12.7s.2-9.6.1-13m-5.6 25.3c-.1 3-.7 4.6-1.1 5.8c-.6 1.4-1.3 2.5-2.4 3.5c-1.1 1.1-2.1 1.7-3.5 2.4c-1.1.4-2.7 1-5.8 1.1H32.1c-8.2 0-9.3 0-12.5-.1c-3-.1-4.6-.7-5.8-1.1c-1.4-.6-2.5-1.3-3.5-2.4c-1.1-1.1-1.7-2.1-2.4-3.5c-.4-1.1-1-2.7-1.1-5.8V32c0-8.3 0-9.3.1-12.5c.1-3 .7-4.6 1.1-5.8c.6-1.4 1.3-2.5 2.3-3.5c1.1-1.1 2.1-1.7 3.5-2.3c1.1-.4 2.7-1 5.8-1.1c3.2-.1 4.2-.1 12.5-.1s9.3 0 12.5.1c3 .1 4.6.7 5.8 1.1c1.4.6 2.5 1.3 3.5 2.3c1.1 1.1 1.7 2.1 2.4 3.5c.4 1.1 1 2.7 1.1 5.8c.1 3.2.1 4.2.1 12.5s-.1 9.3-.2 12.5"></svg:path><svg:path fill="currentColor" d="M32 16.1c-8.9 0-15.9 7.2-15.9 15.9c0 8.9 7.2 15.9 15.9 15.9s16-7 16-15.9s-7.1-15.9-16-15.9m0 26.3c-5.8 0-10.4-4.7-10.4-10.4S26.3 21.6 32 21.6c5.8 0 10.4 4.6 10.4 10.4S37.8 42.4 32 42.4"></svg:path><svg:circle cx="48.7" cy="15.4" r="3.7" fill="currentColor"></svg:circle>`,
})
export class LineiconsInstagramOriginalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsIntelIcon],svg[lineicons-intel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8.228h1.448v1.448H2zm1.412 7.542v-5.213h-1.37v5.214zm9.108.052v-1.277c-.2 0-.37-.01-.494-.031a.56.56 0 0 1-.325-.144a.6.6 0 0 1-.144-.31a3 3 0 0 1-.031-.505v-1.823h.994v-1.175h-.994V8.522H10.15v5.044q0 .642.109 1.076q.109.428.365.69c.17.176.397.3.67.377q.419.114 1.046.113zm7.873-.051V8.12h-1.376v7.65zM8.826 11.067c-.38-.412-.917-.618-1.597-.618q-.493 0-.901.2c-.268.135-.5.32-.68.557l-.078.098v-.747H4.215v5.214h1.366v-2.777v.098q.022-.734.36-1.082c.242-.247.536-.371.871-.371c.397 0 .7.124.902.36c.195.238.298.572.298 1v2.767h1.386v-2.958c.005-.742-.19-1.329-.572-1.74m9.48 2.087q-.001-.564-.196-1.057a2.8 2.8 0 0 0-.551-.86a2.5 2.5 0 0 0-.85-.577a2.8 2.8 0 0 0-1.092-.206a2.7 2.7 0 0 0-1.922.788c-.242.242-.438.53-.577.86a2.6 2.6 0 0 0-.211 1.062q0 .566.2 1.061q.205.497.562.86c.237.243.53.438.87.578c.341.144.717.216 1.119.216c1.164 0 1.886-.53 2.318-1.025l-.989-.752c-.206.247-.7.582-1.319.582c-.386 0-.706-.088-.948-.268a1.32 1.32 0 0 1-.494-.727l-.016-.046h4.096zm-4.086-.48c0-.38.438-1.045 1.381-1.05c.943 0 1.386.664 1.386 1.045zm7.739 2.417a.5.5 0 0 0-.108-.16a.5.5 0 0 0-.355-.15a.5.5 0 0 0-.356.15a.5.5 0 0 0-.15.356a.5.5 0 0 0 .15.355a.5.5 0 0 0 .355.15a.5.5 0 0 0 .196-.042a.5.5 0 0 0 .16-.108a.5.5 0 0 0 .15-.355a.5.5 0 0 0-.042-.196m-.083.36a.4.4 0 0 1-.222.222a.45.45 0 0 1-.33 0a.4.4 0 0 1-.133-.088a.43.43 0 0 1-.118-.299q0-.086.03-.164a.4.4 0 0 1 .088-.134a.43.43 0 0 1 .299-.119q.086 0 .165.031q.078.032.134.088a.43.43 0 0 1 .119.299a.35.35 0 0 1-.032.164m-.288-.123a.16.16 0 0 0 .098-.047a.15.15 0 0 0 .04-.113q.002-.084-.05-.129c-.031-.03-.088-.046-.155-.046h-.227v.582h.108v-.237h.078l.144.237h.113zm-.057-.083h-.129v-.165h.13q.022.002.046.01a.05.05 0 0 1 .03.027q.01.015.01.046q0 .03-.01.046q-.015.016-.03.026a.2.2 0 0 1-.047.01"></svg:path>`,
})
export class LineiconsIntelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsInventionIcon],svg[lineicons-invention-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43.6 21.9c-3.4-3.2-7.8-4.8-12.6-4.5c-8.7.5-15.6 7.7-15.7 16.3c-.1 5.5 2.5 10.5 6.8 13.6v7.2c0 3.7 3 6.6 6.7 6.6H35c3.7 0 6.7-3 6.7-6.6v-7.1c4.4-3.1 7-8.1 7-13.5c.1-4.5-1.8-8.8-5.1-12m-8.5 34.8h-6.2c-1.2 0-2.2-1-2.2-2.1v-6.1h10.7v6.1c-.1 1.1-1.1 2.1-2.3 2.1m3.8-12.8h-4.7v-2.7c0-1.2-1-2.3-2.3-2.3c-1.2 0-2.3 1-2.3 2.3v2.7H25c-3.4-2.3-5.4-6-5.3-10.2c.1-6.3 5.1-11.5 11.5-11.9h.7c3.3 0 6.2 1.1 8.5 3.3c2.4 2.3 3.8 5.5 3.8 8.8c.1 4.1-1.9 7.8-5.3 10M32 13.1c1.2 0 2.3-1 2.3-2.3V5.1c0-1.2-1-2.3-2.3-2.3c-1.2 0-2.3 1-2.3 2.3v5.8c.1 1.2 1.1 2.2 2.3 2.2m26 3.3c.9-.9.9-2.3 0-3.2s-2.3-.9-3.2 0l-4 3.9c-.9.9-.9 2.3 0 3.2c.4.4 1 .7 1.6.7s1.1-.2 1.6-.6zM9.2 13.2c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l3.9 3.9c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.9.9-2.3 0-3.2zm-.4 22.7H3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h5.8c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3m52.2 0h-5.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3H61c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsInventionIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsInvestMonitorIcon],svg[lineicons-invest-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M35.1 11.9h-5.4c-1 0-1.8-.7-1.8-1.6s.8-1.6 1.8-1.6h8c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-2.3V4c0-1.2-1-2.3-2.3-2.3c-1.2 0-2.3 1-2.3 2.3v.1h-1.2c-3.5 0-6.3 2.8-6.3 6.1s2.8 6.1 6.3 6.1H35c1 0 1.8.7 1.8 1.6s-.8 1.6-1.8 1.6h-9c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h4.9v.1c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3v-.1c3.3-.1 6-2.8 6-6.1c-.1-3.4-2.9-6.1-6.4-6.1M13.8 35.3H9.7c-2.3 0-4.3 1.9-4.3 4.3V58c0 2.3 1.9 4.3 4.3 4.3h4.1c2.3 0 4.3-1.9 4.3-4.3V39.6c-.1-2.4-2-4.3-4.3-4.3m-.3 22.5H9.9v-18h3.6zm20.6-28.2H30c-2.3 0-4.3 1.9-4.3 4.2V58c0 2.3 1.9 4.3 4.3 4.3h4.1c2.3 0 4.3-1.9 4.3-4.3V33.9c-.1-2.4-2-4.3-4.3-4.3m-.3 28.2h-3.6V34.1h3.6zm20.5-22.5h-4.1c-2.3 0-4.3 1.9-4.3 4.3V58c0 2.3 1.9 4.3 4.3 4.3h4.1c2.3 0 4.3-1.9 4.3-4.3V39.6c0-2.4-1.9-4.3-4.3-4.3m-.2 22.5h-3.6v-18h3.6z"></svg:path>`,
})
export class LineiconsInvestMonitorIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsInvestmentIcon],svg[lineicons-investment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32.2 45.1c1.1 0 2-.9 2-2v-1h.7c3.3 0 6.1-2.7 6.1-6s-2.7-6-6.1-6h-5.2c-1.1 0-2.1-.9-2.1-2s.9-2 2.1-2H38c1.1 0 2-.9 2-2s-.9-2-2-2h-3.8v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1h-.5c-3.3 0-6.1 2.7-6.1 6s2.7 6 6.1 6h5.2c1.1 0 2.1.9 2.1 2s-.9 2-2.1 2h-8.6c-1.1 0-2 .9-2 2s.9 2 2 2h3.8v1c.1 1.1 1 2 2.1 2"></svg:path><svg:path fill="currentColor" d="M8.4 31.7c.5 0 .9-.2 1.2-.4l7.1-5.6c.9-.7 1-1.9.3-2.8s-1.9-1-2.8-.3l-3.6 2.9c2.5-10.2 11.6-17.3 22-17.3c10.5 0 19.6 7.1 22.2 17.3c.3 1.1 1.4 1.7 2.4 1.4c1.1-.3 1.7-1.4 1.4-2.4c-3-12-13.8-20.4-26.1-20.4c-12.2 0-22.8 8.2-25.9 20L4.4 21c-.7-.9-1.9-1.1-2.8-.4s-1.1 1.9-.4 2.8l5.6 7.5c.3.4.8.7 1.3.8zM63 44.8l-3.9-8.5c-.2-.5-.6-.9-1.2-1.1c-.5-.2-1.1-.1-1.6.1l-8.1 4c-1 .5-1.4 1.7-.9 2.7s1.7 1.4 2.7.9l4-1.9c-3.4 8.9-11.8 14.8-21.4 14.8c-9.9 0-18.5-6.3-21.6-15.7c-.3-1-1.5-1.6-2.5-1.3s-1.6 1.5-1.3 2.5c3.6 11 13.8 18.4 25.4 18.4c11.1 0 21-6.8 25-17.1l1.7 3.8c.3.7 1.1 1.2 1.8 1.2c.3 0 .6-.1.8-.2c1.2-.4 1.6-1.6 1.1-2.6"></svg:path>`,
})
export class LineiconsInvestmentIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsIosIcon],svg[lineicons-ios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.64 5.396c-.169-.444-.574-1.069-1.148-1.513c-.337-.253-.72-.5-1.26-.658C17.649 3.056 16.928 3 16.05 3h-8.1c-.883 0-1.598.056-2.177.23c-.54.164-.94.406-1.265.659a3.8 3.8 0 0 0-1.154 1.513C3.006 6.296 3 7.309 3 7.95v8.1c0 .641.006 1.654.354 2.554a3.83 3.83 0 0 0 2.42 2.171c.579.169 1.293.225 2.176.225h8.1c.883 0 1.598-.056 2.177-.23c.54-.164.94-.406 1.265-.659a3.8 3.8 0 0 0 1.154-1.513c.354-.894.354-1.912.354-2.554v-8.1c0-.64-.006-1.653-.354-2.553zM6.566 15.375h-.67v-4h.67zm-.332-4.674a.415.415 0 1 1 0-.832a.42.42 0 0 1 .422.415a.424.424 0 0 1-.422.417m4.022 4.775c-1.766 0-2.88-1.26-2.88-3.268s1.114-3.274 2.88-3.274c1.767 0 2.88 1.266 2.88 3.274s-1.113 3.268-2.88 3.268m5.828 0c-1.328 0-2.261-.731-2.323-1.822h.602c.067.76.781 1.277 1.777 1.277c.95 0 1.631-.518 1.631-1.232c0-.59-.41-.945-1.35-1.181l-.787-.203c-1.176-.298-1.699-.793-1.699-1.631c0-1.024.922-1.755 2.171-1.755c1.238 0 2.138.731 2.177 1.738h-.602c-.056-.714-.692-1.193-1.592-1.193c-.877 0-1.53.49-1.53 1.187c0 .546.394.867 1.328 1.103l.686.174c1.277.32 1.811.81 1.811 1.693c0 1.114-.894 1.845-2.3 1.845m-3.56-3.268c0 1.66-.878 2.711-2.268 2.711s-2.261-1.052-2.261-2.71c0-1.666.872-2.718 2.261-2.718s2.267 1.052 2.267 2.717"></svg:path>`,
})
export class LineiconsIosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsIslandIcon],svg[lineicons-island-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52.4 22.8c5.5 0 9.9-4.4 9.9-9.9S57.8 3 52.4 3s-9.9 4.4-9.9 9.9s4.4 9.9 9.9 9.9m0-15.3c3 0 5.4 2.4 5.4 5.4s-2.4 5.4-5.4 5.4s-5.4-2.4-5.4-5.4s2.4-5.4 5.4-5.4m7.6 49c-.7 0-1-.2-1.8-1.2c-1-1.1-2.4-2.7-5.2-2.7c-2.7 0-4.2 1.6-5.2 2.7c-.9 1-1.1 1.2-1.8 1.2s-1-.2-1.8-1.2c-1-1.1-2.4-2.7-5.2-2.7c-2.7 0-4.2 1.6-5.2 2.7c-.9 1-1.1 1.2-1.8 1.2s-1-.2-1.8-1.2c-1-1.1-2.4-2.7-5.2-2.7s-4.2 1.6-5.2 2.7c-.4.5-.7.8-1 1c-.9-2.1-3.6-9.2-2.5-14.8c.2-1.3.8-2.8 1.4-4.4c.6-1.7 1.3-3.5 1.7-5.4c0-.1.1-.2.1-.4c1.8 1 4.2 3.3 5 6c.3 1 1.2 1.7 2.2 1.7c.2 0 .4 0 .6-.1c1.2-.3 1.9-1.6 1.6-2.8c-1-3.6-4-7.1-7.2-8.8c2.7-2.8 7.5-4.2 12.3-3.3c1.2.2 2.4-.6 2.6-1.8s-.6-2.4-1.8-2.6c-6.1-1.1-12 .6-15.8 4c-.6-2.4-1.7-4.5-2.8-6.2c-1.2-1.7-3-3.8-5.5-4.2c-1.2-.2-2.4.6-2.6 1.8s.6 2.4 1.8 2.6c.5.1 1.5.9 2.5 2.3c.8 1.2 1.6 2.9 2.1 4.6c-3.7-1.7-8.2-1.7-11.8.6c-1.1.7-1.4 2.1-.7 3.1s2.1 1.4 3.1.7c3-1.9 7.3-1.3 9.8 1.3v.1c-.3 1.6-.9 3.3-1.6 5c-.6 1.7-1.3 3.5-1.6 5.2c-.8 4.2.1 8.7 1.1 12.3c-.6-.2-1.2-.3-1.9-.3c-2.7 0-4.2 1.6-5.2 2.7c-.9 1-1.2 1.2-1.8 1.2c-1.2 0-2.3 1-2.3 2.3S2.8 61 4 61c2.7 0 4.2-1.6 5.2-2.7c.9-1 1.2-1.2 1.8-1.2c.7 0 1 .2 1.8 1.2c.8.9 2 2.2 4 2.5c.2.1.5.1.7.1h.5c2.7 0 4.2-1.6 5.2-2.7c.9-1 1.2-1.2 1.8-1.2s1 .2 1.8 1.2c1 1.1 2.4 2.7 5.2 2.7c2.7 0 4.2-1.6 5.2-2.7c.9-1 1.2-1.2 1.8-1.2c.7 0 1 .2 1.8 1.2c1 1.1 2.4 2.7 5.2 2.7c2.7 0 4.2-1.6 5.2-2.7c.9-1 1.2-1.2 1.8-1.2s1 .2 1.8 1.2c1 1.1 2.4 2.7 5.2 2.7c1.2 0 2.3-1 2.3-2.3s-1.1-2.1-2.3-2.1"></svg:path>`,
})
export class LineiconsIslandIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsIsland2Icon],svg[lineicons-island-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.967 4.43a4.3 4.3 0 0 0-.286-.679c-.367-.697-.942-1.33-1.667-1.683a.75.75 0 1 0-.657 1.349c.382.185.746.557.997 1.033q.1.194.17.39a4.3 4.3 0 0 0-1.748-.093a4.31 4.31 0 0 0-3.008 1.97a.75.75 0 0 0 1.269.8A2.81 2.81 0 0 1 6.001 6.23a2.8 2.8 0 0 1 1.723.286a5.55 5.55 0 0 0-2.446 2.516a.75.75 0 1 0 1.35.654A4.04 4.04 0 0 1 8.642 7.74c.39.957.71 1.885.913 2.951c.258 1.355.331 2.964.068 5.15a11.3 11.3 0 0 0-6.166 3.667a.75.75 0 0 0 .568 1.24h16a.75.75 0 0 0 .568-1.24a11.3 11.3 0 0 0-9.435-3.89c.223-2.114.145-3.765-.13-5.208c-.21-1.108-.535-2.076-.907-3.012a4.04 4.04 0 0 1 2.435.7a.75.75 0 1 0 .843-1.242a5.55 5.55 0 0 0-3.687-.932c.29-.49.732-.895 1.293-1.14a2.81 2.81 0 0 1 2.347.04a.75.75 0 0 0 .648-1.35a4.31 4.31 0 0 0-3.596-.063a4.3 4.3 0 0 0-1.437 1.02m9.207 14.82H5.877a9.77 9.77 0 0 1 6.148-2.164a9.78 9.78 0 0 1 6.149 2.163"></svg:path><svg:path fill="currentColor" d="M18.025 7.5a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m-1.25 2.75a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path>`,
})
export class LineiconsIsland2Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsItalicIcon],svg[lineicons-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M51.2 1.8H22.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h11.5l-9.2 51.5H12.8c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h30.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H29.7l9.2-51.5h12.3c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsItalicIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsJaguarIcon],svg[lineicons-jaguar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.262 7.492c-.004.008-.015.045-.015.045a1 1 0 0 0 .09-.009c.166-.017.206-.123.206-.123c-.07-.022-.13-.016-.13-.016c-.111.008-.141.08-.15.1zm15.717 5.109c.207-.07.382-.201.423-.304c.033-.069.03-.142-.026-.197c-.09-.09-.294-.002-.445.063l-.088.037s-.457.135-1.085-.16c0 0-.637-.316-1.33-.753c0 0-.927-.465-1.15-.59c-1.152-.648-2.925-1.391-3.809-1.762l-.199-.083c-.524-.221-1.485-.563-1.485-.563C9.503 7.812 8.95 7.72 8.95 7.72c-.152-.03-.163.008-.163.008c-.015.02.011.046.011.046c.133.223.163.376.163.376c-.87-.922-2.417-1.002-2.417-1.002c-.468-.026-.733.216-.733.216c-.038.038.003.065.003.065c.56.186.885.794.885.794c-.669-.545-1.078-.634-1.078-.634c-.454-.084-.447-.253-.447-.253a.74.74 0 0 0 .76-.212c.03-.037.007-.06-.017-.062c-.66-.073-1.032.002-1.032.002c-.665.1-.797.267-.835.316l-.005.006c-.039.038-.048.18.135.153v-.001c.005-.019.065-.227.267-.24c0 0 .217-.032.338.027c0 0-.188.28-.476.301l-.152.011a.56.56 0 0 0-.438.294s-.077.118.013.216l.004.005l.008.008s.088.11.209.102c0 0 .098.027.208-.158c0 0 .125-.215.182-.284c0 0 .073-.115.22-.115c0 0 .315-.029.372.367c.028.198-.021.344-.37.628c0 0-.056.05-.117.088c0 0-.038.031-.015.066c0 0 .052.073.122.068h.007c.067-.005.137-.01.482-.358c0 0 .477-.126.477-.503c0 0 .012-.205-.096-.354c0 0 .219.017.411.377c0 0 .06.159.21.185c0 0 .521.094.88.386c.14.114.297.265.407.444c-.074-.163-.185-.48-.096-.792c0 0 .21.638.434.829c.166.14.364.244.947.385c0 0-.814-.19-1.59-.11c0 0-.73.068-.938.54l-.003.006a.6.6 0 0 0-.064.227s-.024.276.306.292a.7.7 0 0 0 .27-.255c.045-.07-.048-.096-.048-.096c-.083-.038-.062-.119-.062-.119c.038-.169.357-.182.357-.182c.423 0 .968.215.968.215c1.185.383 1.416-.19 1.416-.19c.171-.316-.046-1.068-.046-1.068c.88.711 2.288.78 2.288.78c-.873.112-1.97-.281-1.97-.281c.136.276.098.61.098.61c.342.16.695.266.905.308l.034.007c.208.044.522.109 1.782.071q.046 0 .09-.003q.09-.004.165-.003c.034-.164-.307-.463-.307-.463c.355.156.686.595.748.68q.06.077.128.194l.034.063c.173.315.677 1.24 1.9 1.222l.677.004s.925-.023 1.318.254c.194.137.269.203.35.274l.09.077l.093.08c.224.19.481.412.775.438c.222.032.412-.023.464-.176c0 0 .076-.191-.108-.301a1.4 1.4 0 0 1-.273-.137l-.01-.006c-.19-.122-.198-.127-.367-.279a2 2 0 0 1-.22-.256a2 2 0 0 0-.21-.241c-.125-.107-.297-.234-.699-.25c-.409-.016-.885-.037-1.024-.066a.7.7 0 0 1-.359-.159a.9.9 0 0 1-.229-.282a2 2 0 0 1-.077-.16a4 4 0 0 0-.135-.28a1 1 0 0 0-.21-.245l.026.017c.164.106.256.165.375.346c.261.398.47.518.646.582c.174.062.547.107.862.146c.158.019.301.036.398.053c.277.049.435.21.5.277l.085.09c.118.125.237.25.347.354c.193.183.316.262.697.375c.163.05.212.103.212.103c.233.079.688.077.905.003m.233-.698s.264-.048.346.147c.03.07.013.18-.084.302c-.346.461-1.085.413-1.26.401q-.048-.004-.033.001c.06.143.078.4-.165.543c0 0-.412.227-1.126-.261c-.134-.075-.315-.23-.475-.367c-.127-.109-.24-.206-.306-.242c-.34-.184-.685-.188-1.11-.188l-.698.02c-1.373.035-1.823-.769-2.128-1.314l-.108-.19c-.078-.127-.274-.29-.582-.327c0 0-.223-.016-.413-.002c-.964.074-1.558.011-1.558.011a4.2 4.2 0 0 1-1.027-.243c-.175.398-.9.324-.9.324a3 3 0 0 1-1.13-.35c-.452-.202-.676-.144-.676-.144c-.069.015-.053.092-.053.092a.28.28 0 0 1-.05.237a.8.8 0 0 1-.237.197a.42.42 0 0 1-.367.01a.38.38 0 0 1-.194-.198s-.185-.455.291-.831c0 0 .341-.33 1.187-.32c-.222-.172-1.038-.766-1.61-.726c0 0-.515.054-.88.454c0 0-.142.164-.313.159c-.192 0-.261-.264-.261-.264c-.032-.084.04-.142.04-.142l.022-.019l-.026-.097c-.012-.058-.008-.071-.008-.071s.113.062.163.063h.025c.088-.02.183-.187.183-.187c.085-.212.01-.373-.06-.424c-.089-.062-.207-.023-.255.015a.5.5 0 0 0-.134.197s-.024.058-.019.12c.003.036.024.086.043.132l.026.07s-.134-.005-.211-.084c0 0-.002.019-.077.026c-.167.017-.277-.097-.332-.162a2 2 0 0 1-.141-.219a.19.19 0 0 1 .017-.224c.162-.19.36-.323.36-.323c.017-.015.012-.037.012-.037c-.04-.083.04-.15.04-.15c.452-.521 1.787-.504 1.787-.504c2.575 0 6.156 1.65 6.156 1.65a46 46 0 0 1 3.111 1.432a79 79 0 0 1 2.486 1.315q.118.07.271.168c.282.18.659.418 1.151.642c0 0 .349.158.805.062c.11-.023.203-.068.285-.107c.076-.037.142-.07.2-.073M5.415 7.237a.6.6 0 0 0 .32-.07c0-.009-.19-.027-.19-.027c-.175.007-.246.073-.247.08c0 .008.046.014.117.017m4.386 9.383c-.826 0-1.612-.289-1.612-1.265c0-.317.139-.642.348-.875c.328-.362.827-.506 1.297-.506c.285 0 .614.066.87.198v.302a1.43 1.43 0 0 0-.836-.298c-.68 0-1.149.432-1.149 1.147c0 .647.414 1.09 1.05 1.09c.162 0 .387-.03.54-.09v-.928h.48v1.037l-.111.044a2.7 2.7 0 0 1-.877.144m-4.096-2.116l-.553 1.173h1.08zm.922 2.06l-.315-.714H5.07l-.338.714h-.304l1.249-2.542h.297l1.222 2.542zm10.471-2.06l-.554 1.173h1.081zm.921 2.06l-.315-.714h-1.241l-.338.714h-.304l1.249-2.542h.297l1.222 2.542zm-4.47.056c.63 0 1.006-.213 1.126-.72a2.2 2.2 0 0 0 .045-.524v-1.354h-.294v1.455c0 .176-.015.29-.034.383c-.081.403-.382.551-.833.551c-.213 0-.466-.05-.612-.223c-.13-.147-.157-.347-.157-.682v-1.484h-.478v1.567c.005.286.045.551.241.747c.194.197.57.284.996.284m7.778-1.83c0-.429-.307-.591-.69-.591h-.352v1.216h.307c.258 0 .412-.05.533-.148c.126-.103.202-.262.202-.476m.122 1.774l-.663-.976h-.501v.976h-.479v-2.542h.905c.367 0 .735.054.94.284c.107.12.165.287.165.501c0 .393-.292.631-.551.725L22 16.564zm-19.042.522a.95.95 0 0 1-.407.1c.328-.24.466-.485.514-.89c.028-.226.028-.45.028-.676v-1.598h.478v1.924c0 .47-.178.924-.613 1.14" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsJaguarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsJamstackIcon],svg[lineicons-jamstack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.768 2.283a11.3 11.3 0 0 1 1.996-.277q3.636-.003 7.272 0c.87.008 1.74-.028 2.608.018q.002 4.993 0 9.985a10.3 10.3 0 0 1-1.492 5.338c-1.113 1.825-2.822 3.28-4.807 4.027c-.979.387-2.024.572-3.07.624a9.8 9.8 0 0 1-3.19-.466a9.66 9.66 0 0 1-4.778-3.498A10 10 0 0 1 2.58 14.15a10.35 10.35 0 0 1 .646-6.3C4.414 5.108 6.89 2.969 9.768 2.283M12.2 4.57q-.006 3.608 0 7.214q3.48.005 6.96 0q.003-3.608 0-7.214zm-7.362 7.636c-.021.264.011.528.042.79c.232 1.801 1.131 3.51 2.496 4.687c1.215 1.07 2.799 1.707 4.41 1.74v-7.207c-2.316-.015-4.632.005-6.948-.01m7.363.02q-.01 3.609.001 7.218c.402-.025.805-.06 1.2-.144c1.635-.332 3.127-1.292 4.163-2.613a7.5 7.5 0 0 0 1.592-4.46q-3.477-.003-6.956-.002"></svg:path>`,
})
export class LineiconsJamstackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsJavaIcon],svg[lineicons-java-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.347 14.228c.355-.258.904-.484.904-.484s-1.485.258-3 .42c-1.84.096-3.808.16-4.808 0C6.088 13.84 9.7 12.97 9.7 12.97s-1.42-.097-3.194.774c-2 .968 5.13 1.42 8.84.484m-3.29-1.29c-.775-1.678-3.26-3.13 0-5.679C16.088 4.033 13.991 2 13.991 2c.871 3.323-2.968 4.323-4.323 6.356c-.936 1.355.484 2.871 2.387 4.582m4.452-6.84s-6.872 1.742-3.582 5.484c.968 1.097-.258 2.098-.258 2.098s2.452-1.259 1.323-2.872c-1.032-1.484-1.871-2.226 2.517-4.71m-.226 10.518c-.032.032-.032.032-.032.096c5-1.322 3.194-4.678.774-3.807a.5.5 0 0 0-.323.258c.13-.032.258-.097.452-.129c1.13-.226 2.872 1.646-.871 3.582m1.807 2.452s.548.451-.646.806c-2.258.678-9.388.871-11.389.033c-.742-.323.646-.775 1.033-.872c.451-.096.677-.032.677-.032c-.774-.548-5.13 1.097-2.194 1.549c8.034 1.355 14.616-.517 12.519-1.484m-8.712-1.614c-3.032.872 1.872 2.646 5.776.968a7 7 0 0 1-1.097-.548c-1.775.355-2.55.355-4.13.193c-1.323-.16-.549-.613-.549-.613m7.034 3.808c-3.033.548-6.905.483-9.13.129c0 0 .451.355 2.806.548c3.582.226 9.13-.129 9.26-1.871c0 0-.226.71-2.936 1.194m-1.742-5.485c-2.323.451-3.678.451-5.356.258c-1.323-.13-.452-.774-.452-.774c-3.355 1.129 1.871 2.42 6.647 1c-.29-.097-.549-.258-.84-.484"></svg:path>`,
})
export class LineiconsJavaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsJavascriptIcon],svg[lineicons-javascript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v18h18V3zm9.813 14.023c0 1.77-1.045 2.584-2.555 2.584c-1.335 0-2.12-.697-2.526-1.568l1.394-.871c.232.493.493.87 1.103.87c.58 0 .9-.203.9-1.073v-5.69h1.684zm4.006 2.584c-1.567 0-2.583-.784-3.106-1.713l1.394-.813c.377.58.87 1.016 1.683 1.016c.697 0 1.133-.32 1.133-.871c0-.58-.436-.784-1.22-1.133l-.406-.174c-1.22-.493-2.033-1.19-2.033-2.584c0-1.277.93-2.206 2.468-2.206c1.075 0 1.83.378 2.38 1.364l-1.305.871c-.29-.493-.581-.725-1.104-.725c-.493 0-.813.32-.813.726c0 .493.32.696 1.017 1.016l.406.174c1.422.61 2.264 1.22 2.264 2.67c.03 1.54-1.16 2.381-2.758 2.381"></svg:path>`,
})
export class LineiconsJavascriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsJcbIcon],svg[lineicons-jcb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.097 4.425C3.419 4.425 2 5.759 2 7.442v12.133h16.903c1.742 0 3.097-1.397 3.097-3.049V4.425zM8.58 16.367c0 1.239-1 2.192-2.226 2.192H3.097v-4.67s1 .255 2.258.255c2.129 0 2.774-.794 2.774-1.779v-2.54H6.226v2.604c0 .635-.42 1.08-1.194 1.08c-.645 0-1.258-.19-1.903-.477v-5.4c0-1.238 1-2.19 2.226-2.19H8.58zm6.16 0c0 1.239-1 2.192-2.225 2.192H9.29V13.54c.549.445 1.549.763 3.13.731a9.5 9.5 0 0 0 1.741-.254v-.953c-.451.222-1 .445-1.677.476c-1.194.096-1.903-.476-1.903-1.524c0-1.017.742-1.62 1.903-1.525c.677.032 1.258.223 1.677.508v-.952s-.903-.223-1.742-.254c-1.548-.032-2.548.222-3.129.73V7.665c0-1.24 1-2.192 2.226-2.192h3.226zm6.13 0c0 1.239-1 2.192-2.226 2.192h-3.29v-4.447h3.451c.807 0 1.42-.444 1.42-1.111c0-.636-.549-1.017-1.258-1.017v-.032c.645-.095 1-.476 1-.984c0-.636-.549-.985-1.258-1.017h-3.323V7.665c0-1.24 1-2.192 2.226-2.192h3.258zm-3.097-4.224h.13c.225.032.45.35.45.635c0 .318-.225.54-.45.54h-1.388v-1.175zm-1.258-.508v-1.08h1.258a.53.53 0 0 1 .452.54c0 .254-.226.508-.452.54z"></svg:path>`,
})
export class LineiconsJcbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsJoomlaIcon],svg[lineicons-joomla-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.93 4.711a2.624 2.624 0 0 0-5.222-.37l-.026-.015c-2.146-.967-3.954.747-3.954.747L7.947 9.878l1.89 1.819l3.848-3.781c1.797-1.797 2.775-.58 2.775-.58c1.353 1.142.047 2.495.047 2.495l1.936 1.866c1.58-1.708 1.672-3.198 1.191-4.383a2.624 2.624 0 0 0 2.295-2.603"></svg:path><svg:path fill="currentColor" d="m19.659 16.779l.014-.027c.968-2.146-.746-3.953-.746-3.953l-4.805-4.782l-1.82 1.89l3.781 3.848c1.797 1.797.581 2.776.581 2.776c-1.143 1.353-2.496.046-2.496.046l-1.865 1.936c1.707 1.58 3.197 1.673 4.382 1.192a2.624 2.624 0 1 0 2.974-2.926"></svg:path><svg:path fill="currentColor" d="m14.163 12.303l-3.849 3.78c-1.797 1.798-2.775.582-2.775.582c-1.353-1.143-.047-2.496-.047-2.496l-1.936-1.866c-1.58 1.707-1.672 3.198-1.192 4.383a2.624 2.624 0 1 0 2.927 2.974l.026.014c2.146.968 3.954-.747 3.954-.747l4.78-4.805z"></svg:path><svg:path fill="currentColor" d="M7.915 10.245c-1.797-1.797-.58-2.776-.58-2.776c1.142-1.353 2.495-.046 2.495-.046l1.866-1.936C9.99 3.907 8.5 3.814 7.313 4.295A2.624 2.624 0 1 0 4.34 7.22l-.014.027c-.968 2.146.746 3.953.746 3.953l4.805 4.781l1.82-1.889z"></svg:path>`,
})
export class LineiconsJoomlaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsJoomlaOriginalIcon],svg[lineicons-joomla-original-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.2 32.1L11.1 31c-3.7-3.7-4.8-8.9-3.5-13.7c-3.7-.8-6.5-4.2-6.5-8.2C1.1 4.6 4.8.9 9.3.9c4.2 0 7.6 3 8.2 6.9c4.5-1.1 9.3.1 12.8 3.7l.4.4l-6.1 6.1l-.4-.4c-2-2-5.2-2-7.2 0s-2 5.2 0 7.2l13.7 13.7l-6.1 6.1l-6.5-6.2z"></svg:path><svg:path fill="currentColor" d="m19.1 25.4l6.5-6.5l6.1-6.1l1.1-1.1c3.7-3.7 8.9-4.8 13.5-3.5c.6-4.1 4.1-7 8.2-7c4.5 0 8.2 3.7 8.2 8.2c0 4.2-3.1 7.6-7.2 8.2c1.4 4.6.1 9.9-3.5 13.4l-.4.4l-5.9-6.1l.4-.4c2-2 2-5.2 0-7.2s-5.2-2-7.2 0l-1 1.3l-6.1 6l-6.5 6.5z"></svg:path><svg:path fill="currentColor" d="M46.6 56.2c-4.8 1.4-10 .3-13.7-3.4l-.4-.4l6.1-6.1l.4.4c2 2 5.2 2 7.2 0s2-5.2 0-7.2l-1.3-1.1l-6.1-6.2l-6.5-6.5l6.1-6.1l13.8 13.8c3.5 3.5 4.8 8.5 3.7 13c4.1.6 7 4.1 7 8.2c0 4.5-3.7 8.2-8.2 8.2c-3.9.1-7.3-2.9-8.1-6.6"></svg:path><svg:path fill="currentColor" d="m44.3 39l-6.5 6.5l-6.1 6.1l-1.1 1.1c-3.5 3.5-8.5 4.8-13 3.7c-1 3.8-4.2 6.6-8.2 6.6c-4.5 0-8.2-3.7-8.2-8.2c0-3.8 2.7-7.2 6.3-8c-1.1-4.7 0-9.6 3.5-13.1l.4-.4l6.1 6.1l-.4.4c-2 2-2 5.2 0 7.2s5.2 2 7.2 0l1.1-1.1l6.1-6.1l6.5-6.5z"></svg:path>`,
})
export class LineiconsJoomlaOriginalIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsJsfiddleIcon],svg[lineicons-jsfiddle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.676 13.703c0-1.327 1.148-2.351 2.49-2.351c.719 0 1.357.378 1.892.812c.348.283.684.619.996.94l.004.005l.369.382c.344.36.69.723 1.056 1.03c.5.421.947.656 1.35.656c.918 0 1.613-.689 1.613-1.474c0-.786-.688-1.473-1.613-1.473c-.749 0-1.128.409-1.421.725l-.067.072a.439.439 0 0 1-.639-.603q.03-.03.065-.07c.3-.327.918-1.002 2.063-1.002c1.352 0 2.49 1.025 2.49 2.351c0 1.328-1.148 2.351-2.49 2.351c-.727 0-1.377-.408-1.915-.86c-.36-.302-.71-.66-1.03-.995l-.256-.265c-.37-.387-.74-.772-1.129-1.088c-.486-.395-.926-.616-1.338-.616c-.917 0-1.612.688-1.612 1.473s.687 1.474 1.612 1.474c.746 0 1.125-.409 1.42-.726l.069-.075a.439.439 0 1 1 .639.602l-.067.072c-.3.328-.918 1.004-2.06 1.004c-1.353 0-2.49-1.025-2.49-2.35"></svg:path><svg:path d="M8.273 8.011a6.12 6.12 0 0 1 5.292-3.034c3.385 0 6.132 2.722 6.132 6.088l-.001.066A4.18 4.18 0 0 1 22 14.859a4.16 4.16 0 0 1-4.209 4.164H6.227C3.891 18.993 2 17.1 2 14.759c0-1.436.725-2.71 1.826-3.482a3 3 0 0 1-.057-.577a3.054 3.054 0 0 1 3.06-3.046a3.05 3.05 0 0 1 1.444.357m5.292-2.157A5.24 5.24 0 0 0 8.832 8.83a.44.44 0 0 1-.667.156a2.15 2.15 0 0 0-1.337-.454A2.176 2.176 0 0 0 4.647 10.7c0 .222.036.438.1.64a.44.44 0 0 1-.194.511a3.39 3.39 0 0 0-1.675 2.908a3.393 3.393 0 0 0 3.358 3.386h11.56a3.283 3.283 0 0 0 3.326-3.286c0-1.37-.842-2.55-2.05-3.05a.44.44 0 0 1-.27-.438l.002-.018c.008-.108.015-.191.015-.288c0-2.875-2.347-5.21-5.254-5.21"></svg:path></svg:g>`,
})
export class LineiconsJsfiddleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsJuiceIcon],svg[lineicons-juice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M50.9 16.1c-.9-1.1-2.3-1.7-3.7-1.7h-12l3.3-8.2h8.7c1.2 0 2.2-1 2.3-2.2c0-1.2-1-2.3-2.2-2.3h-9.2c-1.6 0-3 1-3.5 2.4l-4.2 10.3H16.8c-1.4 0-2.8.6-3.7 1.7s-1.4 2.5-1.2 3.9l4 35.4c.4 3.9 3.7 6.8 7.6 6.8h17.1c3.9 0 7.2-2.9 7.6-6.8l4-35.4c.1-1.4-.3-2.8-1.3-3.9m-34.5 3c.1-.1.2-.2.3-.2h30.4c.2 0 .3.1.3.2s.1.2.1.4l-1.3 11.2l-1-.5c-3-1.5-6.4-1.6-9.4-.3l-1.2.5c-1.7.8-3.6.7-5.3-.1l-.3-.2c-3.1-1.5-6.8-1.4-9.7.2l-1.6.8l-1.3-11.6c-.1-.2 0-.3 0-.4m24.1 38.7h-17c-1.6 0-3-1.2-3.2-2.8l-2.1-19l3.2-1.6c1.8-.9 3.9-1 5.7-.1l.5.3c2.9 1.4 6.2 1.4 9.1.1l1.2-.5c1.8-.8 3.8-.7 5.5.2l2.5 1.3l-2.2 19.5c-.2 1.3-1.5 2.6-3.2 2.6"></svg:path>`,
})
export class LineiconsJuiceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsKeyIcon],svg[lineicons-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60.1 43.3L48.6 31.9c-3-2.9-7.5-2.9-10.4 0l-1.5 1.5L7 2.4c-.8-.9-2.3-.9-3.2 0c-.9.8-.9 2.3 0 3.2l3.4 3.6l-4.8 5c-.9.9-.8 2.3.1 3.2c.4.4 1 .6 1.6.6s1.2-.2 1.6-.7l4.7-4.9l5.6 5.9l-7 7.4c-.9.9-.8 2.3.1 3.2c.4.4 1 .6 1.6.6s1.2-.2 1.6-.7l6.9-7.2l14.5 15.1l-1.5 1.5c-2.9 3-2.9 7.5 0 10.4l11.4 11.6c1.5 1.4 3.4 2.1 5.2 2.1c1.9 0 3.8-.7 5.2-2.2l6.2-6.2c1.4-1.4 2.2-3.3 2.2-5.3c-.2-2-.9-3.9-2.3-5.3m-3.2 7.4l-6.2 6.2c-1.2 1.2-2.9 1.2-4.1 0L35.1 45.4c-1.2-1.2-1.2-2.9 0-4.1l3-3l.1-.1l.1-.1l3.1-3.1c.6-.6 1.3-.9 2-.9s1.5.3 2.1.9l11.4 11.5q.9.9.9 2.1q-.15 1.2-.9 2.1"></svg:path>`,
})
export class LineiconsKeyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsKey1Icon],svg[lineicons-key-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m14.986 4.528l2.104 2.104l-1.059 1.06l-1.043-1.044a.75.75 0 1 0-1.06 1.06l1.043 1.044l-2.334 2.334a5.374 5.374 0 1 0 1.06 1.06l6.044-6.043a.75.75 0 1 0-1.06-1.061l-.53.53l-2.104-2.104a.75.75 0 0 0-1.06 1.06m-2.858 8.098l.015.014l.015.015a3.873 3.873 0 1 1-.03-.03" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsKey1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsKeyboardIcon],svg[lineicons-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.441 8.192a.8.8 0 1 0 0 1.6h.01a.8.8 0 0 0 0-1.6zm-.801 4.175a.8.8 0 0 1 .8-.8h.01a.8.8 0 0 1 0 1.6h-.01a.8.8 0 0 1-.8-.8m4.505-4.175a.8.8 0 0 0 0 1.6h.01a.8.8 0 1 0 0-1.6zm-.787 4.175a.8.8 0 0 1 .8-.8h.01a.8.8 0 0 1 0 1.6h-.01a.8.8 0 0 1-.8-.8M8 14.992a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm5.046-6a.8.8 0 0 1 .8-.8h.01a.8.8 0 0 1 0 1.6h-.01a.8.8 0 0 1-.8-.8m4.502-.8a.8.8 0 1 0 0 1.6h.01a.8.8 0 0 0 0-1.6zm-4.511 4.175a.8.8 0 0 1 .8-.8h.01a.8.8 0 0 1 0 1.6h-.01a.8.8 0 0 1-.8-.8m4.519-.8a.8.8 0 1 0 0 1.6h.01a.8.8 0 0 0 0-1.6z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 4.867A2.25 2.25 0 0 0 2 7.117v10.5a2.25 2.25 0 0 0 2.25 2.25h15.5a2.25 2.25 0 0 0 2.25-2.25v-10.5a2.25 2.25 0 0 0-2.25-2.25zm-.75 2.25a.75.75 0 0 1 .75-.75h15.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H4.25a.75.75 0 0 1-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsKeyboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsKeywordResearchIcon],svg[lineicons-keyword-research-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60.7 50.6L47.6 37.5c-1.9-1.9-5-2-7.1-.3l-5.1-5.1c5.8-7.4 5.3-18.1-1.5-24.9c-7.3-7.3-19.3-7.3-26.6 0S0 26.5 7.3 33.8c3.7 3.7 8.5 5.5 13.3 5.5c4.1 0 8.2-1.3 11.6-4l5.1 5.1c-1.8 2.1-1.7 5.2.3 7.1l13.1 13.1c1 1 2.4 1.5 3.7 1.5s2.7-.5 3.7-1.5l2.6-2.6c2-2 2-5.3 0-7.4M10.4 30.7c-5.6-5.6-5.6-14.7 0-20.3c2.8-2.8 6.5-4.2 10.1-4.2s7.3 1.4 10.1 4.2c5.6 5.6 5.6 14.7 0 20.3c-5.5 5.6-14.6 5.6-20.2 0m47.1 24.2l-2.6 2.6c-.3.3-.8.3-1.1 0L40.7 44.4c-.3-.3-.3-.8 0-1.1l2.6-2.6c.1-.1.3-.2.5-.2s.4.1.5.2l13.1 13.1c.4.3.4.8.1 1.1"></svg:path><svg:path fill="currentColor" d="M15.6 19.2h4.9c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-4.9c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3m10.2 2.9H15.6c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h10.2c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsKeywordResearchIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsKnifeFork1Icon],svg[lineicons-knife-fork-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 5.75A3.75 3.75 0 0 1 8.25 2H9a.75.75 0 0 1 .75.75v18.5a.75.75 0 0 1-1.5 0v-6.5h-1.5A2.25 2.25 0 0 1 4.5 12.5zM8.25 3.5A2.25 2.25 0 0 0 6 5.75v6.75c0 .414.336.75.75.75h1.5z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13.5 2.75a.75.75 0 0 0-1.5 0v5a3.75 3.75 0 0 0 3 3.675v9.825a.75.75 0 0 0 1.5 0v-9.825a3.75 3.75 0 0 0 3-3.675v-5a.75.75 0 0 0-1.5 0v5a2.25 2.25 0 0 1-4.5 0z"></svg:path><svg:path fill="currentColor" d="M15.75 2a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class LineiconsKnifeFork1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsKubernetesIcon],svg[lineicons-kubernetes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.003 13.121l.605-.289l.138-.646l-.413-.523h-.674l-.413.523l.152.646zm4.292-.331c.043-.464.01-.934-.096-1.389a4.4 4.4 0 0 0-.523-1.307l-1.664 1.5a.33.33 0 0 0-.083.151a.373.373 0 0 0 .261.44zm-3.081-2.242l1.802-1.279a4.18 4.18 0 0 0-2.476-1.197l.123 2.243c.014.054.028.11.07.15c.123.152.33.18.48.083M11.246 8.1l-.22.04a4.2 4.2 0 0 0-2.05 1.129l1.83 1.307c.041.027.11.041.165.041a.377.377 0 0 0 .372-.358l.123-2.2zm-1.293 3.453l-1.637-1.459a4.43 4.43 0 0 0-.619 2.697l2.132-.62a.27.27 0 0 0 .165-.11a.366.366 0 0 0-.04-.508m.178 1.898l-2.187.372a4.34 4.34 0 0 0 1.72 2.16l.839-2.023a.4.4 0 0 0 .013-.22a.37.37 0 0 0-.385-.289m1.871 3.219c.33 0 .647-.04.963-.11q.092-.027.182-.049q.113-.028.217-.06l-1.06-1.913a.6.6 0 0 0-.164-.151c-.152-.083-.33-.028-.44.096l-1.087 1.967c.44.138.908.22 1.389.22m2.325-.687a4.4 4.4 0 0 0 1.32-1.335c.18-.261.317-.537.4-.84l-2.201-.37a.44.44 0 0 0-.193.04a.37.37 0 0 0-.193.427z"></svg:path><svg:path fill="currentColor" d="M12.003 2.294c.193 0 .385.041.564.124l6.961 3.315c.358.18.633.51.716.895l1.72 7.47c.096.399 0 .811-.262 1.128l-4.815 5.984a1.31 1.31 0 0 1-1.032.496H8.137a1.31 1.31 0 0 1-1.032-.495L2.29 15.226a1.38 1.38 0 0 1-.261-1.128l1.72-7.47c.096-.4.357-.73.715-.895l6.961-3.329c.18-.069.385-.11.578-.11m6.961 11.212c-.013 0-.027 0-.027-.014a.2.2 0 0 1-.041-.006q-.021-.006-.042-.007l-.036-.005a2 2 0 0 0-.225-.023c-.041 0-.083 0-.138-.014h-.013c-.29-.027-.523-.054-.743-.123a.27.27 0 0 1-.152-.152q0-.01-.007-.013q-.005-.005-.006-.014l-.18-.055a5.4 5.4 0 0 0-.096-1.94a5.7 5.7 0 0 0-.77-1.802l.138-.124v-.028a.3.3 0 0 1 .068-.206c.158-.145.354-.264.588-.407l.032-.02l.061-.034q.031-.014.062-.034a2 2 0 0 0 .234-.138l.023-.018q.022-.013.046-.037l.015-.011q.011-.006.012-.016c.193-.165.234-.44.097-.62a.39.39 0 0 0-.317-.15a.5.5 0 0 0-.302.11l-.028.027q-.02.011-.034.027t-.035.028v.001a2 2 0 0 0-.205.22a.4.4 0 0 1-.07.068a3.5 3.5 0 0 1-.55.495a.22.22 0 0 1-.124.041c-.027 0-.055 0-.082-.014h-.028l-.165.11a7 7 0 0 0-.564-.522a5.5 5.5 0 0 0-2.875-1.142l-.014-.179l-.028-.027l-.015-.016a.26.26 0 0 1-.095-.163c-.013-.205.01-.434.036-.687l.005-.056v-.014c0-.041.014-.096.028-.138c.014-.082.028-.165.041-.26v-.125c0-.247-.192-.454-.426-.454c-.11 0-.22.055-.303.138a.44.44 0 0 0-.124.316v.11c0 .097.014.18.042.262q.01.032.014.069q.004.03.013.068v.014l.018.166c.024.21.045.402.023.577a.26.26 0 0 1-.094.163l-.016.016l-.027.027l-.014.18a5.3 5.3 0 0 0-3.467 1.65l-.137-.096h-.028q-.02 0-.041.007a.2.2 0 0 1-.041.006a.22.22 0 0 1-.124-.04a3.7 3.7 0 0 1-.577-.54c-.02-.022-.042-.047-.07-.066a2 2 0 0 0-.179-.193l-.023-.018q-.021-.013-.045-.037l-.015-.011q-.013-.005-.013-.016a.48.48 0 0 0-.303-.11a.39.39 0 0 0-.316.151c-.138.179-.096.454.096.62q.01 0 .014.006t.014.007q.02.011.034.027t.034.028c.083.055.152.096.234.138a.6.6 0 0 1 .124.068l.03.019c.235.143.431.263.59.408c.068.069.068.137.068.206v.028l.138.123l-.025.034q-.028.036-.044.077a5.36 5.36 0 0 0-.77 3.632l-.18.055q0 .009-.006.013q-.006.005-.007.014a.32.32 0 0 1-.152.151c-.206.07-.453.097-.742.124h-.014c-.041 0-.096 0-.138.014c-.072 0-.144.01-.225.022l-.036.005q-.021.001-.041.007a.2.2 0 0 1-.042.007c-.013 0-.027 0-.041.014a.45.45 0 0 0-.358.509c.042.193.22.316.44.316c.042 0 .07 0 .11-.013c.042 0 .07-.028.11-.028a1.3 1.3 0 0 0 .248-.096l.062-.027q.03-.016.062-.028h.014c.261-.097.495-.179.715-.207h.028c.077 0 .13.036.17.063l.009.006q.01.001.013.007q.005.007.014.007l.193-.027a5.44 5.44 0 0 0 1.802 2.586c.193.151.385.275.592.399l-.083.179q.001.01.007.014t.007.013c.027.055.055.124.027.22a4 4 0 0 1-.357.647v.014q-.021.03-.042.055l-.04.055c-.042.05-.075.102-.112.159l-.04.06a.3.3 0 0 0-.042.07c0 .013-.013.027-.013.027c-.11.234-.028.495.179.592q.082.04.165.041c.165 0 .33-.11.412-.261c0-.014.014-.028.014-.028c.014-.027.028-.055.041-.069c.028-.064.043-.116.059-.168l.024-.08l.041-.123l.033-.093c.08-.233.147-.425.256-.595a.3.3 0 0 1 .143-.108l.036-.016c.014 0 .014 0 .027-.014l.097-.178a5.4 5.4 0 0 0 1.926.357c.399 0 .812-.041 1.197-.137q.363-.082.715-.207l.083.152c.014 0 .014 0 .027.013a.26.26 0 0 1 .179.124c.101.178.18.39.266.627l.023.061v.014l.041.124q.014.041.025.082c.015.055.03.11.058.165l.02.035q.01.014.021.034c0 .014.014.028.014.028a.47.47 0 0 0 .412.261q.083 0 .166-.041a.4.4 0 0 0 .206-.248a.5.5 0 0 0-.027-.344q-.001-.01-.007-.014q-.007-.004-.007-.013a.3.3 0 0 0-.042-.07a1.2 1.2 0 0 0-.15-.22l-.042-.054l-.041-.055v-.014l-.025-.039c-.142-.218-.268-.413-.333-.608a.3.3 0 0 1 .004-.178l.01-.042q0-.01.006-.014q.006-.003.007-.013l-.068-.165a5.3 5.3 0 0 0 1.816-1.775a5.3 5.3 0 0 0 .577-1.238l.165.027q.01 0 .014-.007q.005-.005.014-.006l.04-.023a.25.25 0 0 1 .139-.046h.027c.22.027.454.11.716.206h.013q.032.011.062.027q.031.016.062.028c.083.041.152.069.248.096a.2.2 0 0 1 .041.007q.021.007.041.007c.014 0 .028 0 .042.014a.463.463 0 0 0 .55-.303c0-.165-.151-.385-.399-.454z"></svg:path>`,
})
export class LineiconsKubernetesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLabelDollar2Icon],svg[lineicons-label-dollar-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8.25a.75.75 0 0 1 .75.75v.437a2.065 2.065 0 0 1 1.75 2.04a.75.75 0 0 1-1.5 0a.563.563 0 0 0-.563-.563h-.687a.75.75 0 0 0-.75.75v.265a.75.75 0 0 0 .487.702l1.553.583a2.25 2.25 0 0 1 1.46 2.106v.265a2.25 2.25 0 0 1-1.75 2.195v.47a.75.75 0 0 1-1.5 0v-.438a2.06 2.06 0 0 1-1.75-2.04a.75.75 0 0 1 1.5 0c0 .312.252.563.563.563h.687a.75.75 0 0 0 .75-.75v-.265a.75.75 0 0 0-.487-.702l-1.553-.582a2.25 2.25 0 0 1-1.46-2.107v-.265a2.25 2.25 0 0 1 1.75-2.194V9a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.093 3.014a2 2 0 0 0-.193-.095v-.92a.9.9 0 1 0-1.8 0v.92q-.098.043-.193.095l-5.25 2.917A2.25 2.25 0 0 0 4.5 7.898V19.75A2.25 2.25 0 0 0 6.75 22h10.5a2.25 2.25 0 0 0 2.25-2.25V7.898a2.25 2.25 0 0 0-1.157-1.967zM12 6.65a.9.9 0 0 0 .9-.9V4.623l4.714 2.62a.75.75 0 0 1 .386.655V19.75a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V7.898a.75.75 0 0 1 .386-.656L11.1 4.623V5.75a.9.9 0 0 0 .9.9" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsLabelDollar2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLaptopIcon],svg[lineicons-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m62.2 53.7l-4-17.3c.2-.3.3-.7.3-1v-23c0-3.4-2.8-6.3-6.3-6.3H11.8c-3.4 0-6.3 2.8-6.3 6.3v23c0 .3.1.7.2.9l-4 17.5c-.2 1 .1 2 .8 2.8s1.7 1.3 2.8 1.3h53.4c1.1 0 2.2-.5 2.8-1.4c.7-.8.9-1.9.7-2.8M10.1 12.4c0-1 .8-1.8 1.8-1.8h40.3c1 0 1.8.8 1.8 1.8v20.8H10.1zm-3.6 41l3.6-15.7h43.7l3.6 15.7z"></svg:path>`,
})
export class LineiconsLaptopIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLaptop2Icon],svg[lineicons-laptop-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4.5a2.25 2.25 0 0 0-2.25 2.25V15h-1a.75.75 0 0 0-.67 1.085l1.085 2.171A2.25 2.25 0 0 0 5.177 19.5h13.646a2.25 2.25 0 0 0 2.012-1.244l1.086-2.17A.75.75 0 0 0 21.25 15h-1V6.75A2.25 2.25 0 0 0 18 4.5zm14.037 12l-.543 1.085a.75.75 0 0 1-.671.415H5.177a.75.75 0 0 1-.67-.415L3.963 16.5zM18.75 15H5.25V6.75A.75.75 0 0 1 6 6h12a.75.75 0 0 1 .75.75z"></svg:path>`,
})
export class LineiconsLaptop2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLaptopPhoneIcon],svg[lineicons-laptop-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.247 3.25a2.25 2.25 0 0 0-2.25 2.25v8.174q-.196.267-.308.59l-1.212 3.5a2.25 2.25 0 0 0 2.126 2.986h5.144v-1.5H4.603a.75.75 0 0 1-.708-.995l1.211-3.5a.75.75 0 0 1 .709-.505h3.932v-1.5h-4.25V5.5a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75v4.25h1.5V5.5a2.25 2.25 0 0 0-2.25-2.25zm9.565 15a.8.8 0 0 1 .8-.8h.01a.8.8 0 0 1 0 1.6h-.01a.8.8 0 0 1-.8-.8"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.592 13.5a2.25 2.25 0 0 1 2.25-2.25h3.56a2.25 2.25 0 0 1 2.25 2.25v6.25a2.25 2.25 0 0 1-2.25 2.25h-3.56a2.25 2.25 0 0 1-2.25-2.25zm2.25-.75a.75.75 0 0 0-.75.75v6.25c0 .414.336.75.75.75h3.56a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsLaptopPhoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLaravelIcon],svg[lineicons-laravel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.705 6.556l-.02-.044l-.02-.052c-.012-.02-.024-.032-.04-.052q-.012-.022-.036-.044c-.008-.008-.02-.016-.044-.036a.2.2 0 0 0-.044-.032l-3.715-2.14a.45.45 0 0 0-.428 0L13.64 6.3s-.024.016-.048.036l-.036.028l-.044.056l-.024.036s-.02.036-.032.068l-.012.032q-.014.059-.016.112v3.995l-2.855 1.643V4.564c0-.036 0-.076-.012-.108a.3.3 0 0 0-.02-.048a.3.3 0 0 0-.024-.052c-.008-.02-.02-.032-.036-.052a.3.3 0 0 0-.036-.044c-.008-.008-.02-.016-.044-.036c-.012-.008-.024-.02-.04-.028l-3.72-2.139a.43.43 0 0 0-.428 0L2.498 4.192s-.032.024-.052.044l-.04.028s-.02.028-.04.052l-.024.036s-.02.044-.028.068l-.016.036c-.008.036-.016.072-.016.112v12.725c0 .072.02.148.06.212c.036.068.092.12.156.16l7.434 4.279l.064.028l.036.012q.053.014.112.016q.054-.002.108-.016l.036-.012q.037-.01.068-.032l7.434-4.275a.44.44 0 0 0 .212-.372v-3.995l3.5-2.015a.43.43 0 0 0 .16-.156a.46.46 0 0 0 .055-.216V6.668c0-.036 0-.072-.012-.112m-4.13 1.755l-2.856-1.643l2.855-1.64l2.856 1.64zM6.428 2.925L9.28 4.568L6.43 6.212L3.573 4.568zm3.283 2.383v7.494l-1.735 1l-1.12.644v-7.49zm0 15.516l-6.57-3.783V5.308l2.855 1.648v8.234l.008.056q.001.025.008.056c.004.016.012.028.02.052q.012.03.024.048a.4.4 0 0 0 .036.056l.032.036s.02.02.048.04l3.54 2.007zm.432-4.027l-2.851-1.611l6.566-3.78l2.852 1.644zm6.998.244l-6.57 3.787v-3.287l6.57-3.75zm0-4.735l-2.855-1.643V7.412l2.855 1.643zm3.716-1.643l-2.856 1.643v-3.25l2.856-1.644z"></svg:path>`,
})
export class LineiconsLaravelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLayersIcon],svg[lineicons-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m53.5 38.8l-.8-.4l1-.6c2-1.2 3.1-3.3 3.1-5.7c0-2.3-1.3-4.4-3.3-5.6l-2.1-1.2l2.3-1.4c2-1.2 3.1-3.3 3.1-5.7c0-2.3-1.3-4.4-3.3-5.5L35.4 2.6c-2-1.1-4.5-1.1-6.4 0L10.4 13.4c-2 1.2-3.2 3.3-3.2 5.6s1.2 4.5 3.2 5.6l2.2 1.3l-2.2 1.3c-2 1.2-3.2 3.3-3.2 5.6s1.2 4.5 3.2 5.6l.9.5l-.9.5c-2 1.2-3.3 3.3-3.3 5.6c0 2.4 1.2 4.5 3.2 5.6l18.4 10.7q1.5.9 3.3.9c1.2 0 2.4-.3 3.4-1L53.8 50c2-1.2 3.1-3.3 3.1-5.7c-.1-2.3-1.3-4.4-3.4-5.5M11.6 19c0-.3.1-1.2 1-1.7L31.2 6.5c.6-.4 1.4-.4 2 0l18.2 10.1c.9.5 1 1.4 1 1.7s-.1 1.2-1 1.8L33.1 31.4c-.6.4-1.4.4-2.1 0L12.6 20.7c-.9-.5-1-1.4-1-1.7m1 12.1l4.4-2.6l11.7 6.8q1.5.9 3.3.9c1.2 0 2.4-.3 3.4-1L47 28.1l4.3 2.4c.9.5 1 1.4 1 1.7s-.1 1.2-1 1.8L33.1 45.2c-.6.4-1.4.4-2.1 0L12.6 34.5c-.9-.5-1-1.4-1-1.7s.1-1.2 1-1.7m38.8 15.1L33.1 57.5c-.6.4-1.4.4-2.1 0L12.6 46.8c-.9-.5-1-1.4-1-1.7s.1-1.2 1-1.7l3.1-1.8l13.1 7.6q1.5.9 3.3.9c1.2 0 2.4-.3 3.4-1l12.9-7.9l3 1.6c.9.5 1 1.4 1 1.7s-.1 1.2-1 1.7"></svg:path>`,
})
export class LineiconsLayersIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLayers1Icon],svg[lineicons-layers-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.86 4.969a2.48 2.48 0 0 0-1.675 0L2.911 7.935c-1.173.42-1.173 2.079 0 2.5l8.274 2.966a2.48 2.48 0 0 0 1.676 0l8.274-2.967c1.173-.42 1.173-2.079 0-2.499zM11.693 6.38a.98.98 0 0 1 .663 0l7.821 2.804l-7.821 2.804a.98.98 0 0 1-.664 0L3.87 9.185z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m2.91 13.565l2.144-.769l2.223.797l-3.407 1.221l7.821 2.804a.98.98 0 0 0 .664 0l7.821-2.804l-3.406-1.22l2.222-.798l2.143.769c1.173.42 1.173 2.079 0 2.5l-8.274 2.965a2.48 2.48 0 0 1-1.676 0l-8.274-2.966c-1.173-.42-1.173-2.079 0-2.5"></svg:path>`,
})
export class LineiconsLayers1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLayoutIcon],svg[lineicons-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M55.8 1.9H8.1c-3.4 0-6.2 2.8-6.2 6.2v47.6c0 3.4 2.8 6.2 6.2 6.2h47.6c3.4 0 6.2-2.8 6.2-6.2V8.1c.1-3.4-2.7-6.2-6.1-6.2M8.1 6.4h47.6c1 0 1.8.8 1.8 1.8V17H6.4V8.1c0-1 .8-1.7 1.7-1.7m13.4 15h36v15.9h-36zM6.4 55.8V21.4H17v36.1H8.1c-.9 0-1.7-.8-1.7-1.7m49.4 1.7H21.5V41.8h36v14c0 .9-.7 1.7-1.7 1.7"></svg:path>`,
})
export class LineiconsLayoutIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLayout26Icon],svg[lineicons-layout-26-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.773 2.75a.75.75 0 1 0-1.5 0V4.5h-5.25V2.75a.75.75 0 0 0-1.5 0V4.5h-1.75a.75.75 0 1 0 0 1.5h1.75v5.25h-1.75a.75.75 0 0 0 0 1.5h1.75V18h-1.75a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0V19.5h5.25v1.75a.75.75 0 0 0 1.5 0V19.5h5.25v1.75a.75.75 0 0 0 1.5 0V19.5h1.75a.75.75 0 1 0 0-1.5h-1.75v-5.25h1.75a.75.75 0 1 0 0-1.5h-1.75V6h1.75a.75.75 0 1 0 0-1.5h-1.75V2.75a.75.75 0 1 0-1.5 0V4.5h-5.25zM18.023 18h-5.25v-5.25h5.25zm-6.75 0h-5.25v-5.25h5.25zm-5.25-6.75V6h5.25v5.25zm12 0h-5.25V6h5.25z"></svg:path>`,
})
export class LineiconsLayout26Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLayout9Icon],svg[lineicons-layout-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.523 3.25a2.25 2.25 0 0 0-2.25 2.25v13a2.25 2.25 0 0 0 2.25 2.25h13a2.25 2.25 0 0 0 2.25-2.25v-13a2.25 2.25 0 0 0-2.25-2.25zm-.75 2.25a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 .75.75v3.083h-14.5zm0 4.583h3.833v9.167H5.523a.75.75 0 0 1-.75-.75zm5.333 0h9.167v3.833h-9.167zm0 5.333h9.167V18.5a.75.75 0 0 1-.75.75h-8.417z"></svg:path>`,
})
export class LineiconsLayout9Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLeafIcon],svg[lineicons-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m61.6 58.2l-13-12.9c3-3.7 4.5-8.1 4.5-12.9c0-7.1-3.5-14.5-9.9-20.8C26.6-5 6 4.9 5.8 5l-.6.3l-.4.7c-.1.2-10 20.7 6.7 37.2c6.5 6.5 14.1 9.8 21 9.8c4.7 0 9.1-1.5 12.9-4.6l13 12.9c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.9-.8.9-2.2 0-3.1M14.6 40C1.8 27.2 7.1 12.1 8.5 8.7C12 7.2 27.2 2 40.1 14.8c5.5 5.5 8.5 11.7 8.5 17.7c0 3.6-1.1 6.9-3.3 9.7L38 34.9V22.2c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v8.2l-8.2-8.2c-.9-.9-2.3-.9-3.2 0s-.9 2.3 0 3.2l5.8 5.8h-8.2c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3h12.7l9.7 9.6C34.7 51 23.7 49 14.6 40"></svg:path>`,
})
export class LineiconsLeafIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLeaf1Icon],svg[lineicons-leaf-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.523 2a6.25 6.25 0 0 1 5.5 3.279A6.25 6.25 0 0 1 17.523 2h2.5a.75.75 0 0 1 .75.75v2.5a6.25 6.25 0 0 1-6.25 6.25h-1.75v9.75a.75.75 0 1 1-1.5 0V11.5h-1.75a6.25 6.25 0 0 1-6.25-6.25v-2.5a.75.75 0 0 1 .75-.75zm4.75 8V8.25a4.75 4.75 0 0 0-4.75-4.75h-1.75v1.75A4.75 4.75 0 0 0 9.523 10zm1.5 0h1.75a4.75 4.75 0 0 0 4.75-4.75V3.5h-1.75a4.75 4.75 0 0 0-4.75 4.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsLeaf1Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLeaf6Icon],svg[lineicons-leaf-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.024 2.738l.347-.664a.75.75 0 0 0-.695 0z"></svg:path><svg:path fill="currentColor" d="M12.773 19.464A7.5 7.5 0 0 0 19.523 12c0-3.168-1.861-5.668-3.608-7.324a18.3 18.3 0 0 0-3.223-2.423a11 11 0 0 0-.294-.166l-.018-.01l-.006-.003h-.001s-.002-.001-.35.663l-.347-.664h-.002l-.001.001l-.006.003l-.018.01a7 7 0 0 0-.294.166a18.3 18.3 0 0 0-3.223 2.423C6.385 6.332 4.523 8.832 4.523 12a7.5 7.5 0 0 0 6.75 7.463v1.785a.75.75 0 0 0 1.5 0zm0-1.51v-2.172l2.897-1.997a.75.75 0 0 0-.852-1.235l-2.045 1.41v-2.899l2.284-1.709a.75.75 0 0 0-.899-1.2l-1.385 1.036V6.984a.75.75 0 1 0-1.5 0v2.204L9.89 8.152a.75.75 0 0 0-.899 1.2l2.283 1.71v2.899l-2.045-1.41a.75.75 0 0 0-.851 1.234l2.896 1.998v2.171a6 6 0 0 1-5.25-5.953c0-2.561 1.513-4.692 3.141-6.235a16.8 16.8 0 0 1 2.86-2.165a16.8 16.8 0 0 1 2.86 2.165c1.627 1.543 3.14 3.674 3.14 6.235a6 6 0 0 1-5.25 5.953"></svg:path>`,
})
export class LineiconsLeaf6Icon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLemonSqueezyIcon],svg[lineicons-lemon-squeezy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.633 14.275L15 16.755a2.75 2.75 0 0 1 1.388 1.417c.64 1.5-.236 3.033-1.611 3.584s-2.842.197-3.509-1.363L8.932 14.92c-.18-.425.274-.842.701-.644m.321-1.606l5.539-2.094c1.84-.695 3.851.621 3.824 2.534l-.002.075c-.04 1.863-1.994 3.115-3.794 2.456L9.96 13.606a.496.496 0 0 1-.006-.936m-.31-.725l5.444-2.314c1.81-.769 2.268-3.076.851-4.41l-.056-.051c-1.389-1.29-3.685-.836-4.476.862L8.964 11.28c-.195.418.245.85.68.665m-1.401-.915l1.98-5.427c.245-.673.2-1.36-.054-1.951c-.643-1.5-2.382-1.983-3.758-1.43c-1.375.552-2.152 1.807-1.484 3.366l2.35 5.468c.182.424.808.407.966-.025" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsLemonSqueezyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLibraryIcon],svg[lineicons-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M57.2 9.4h-22c-1.2 0-2.3.4-3.2 1c-.9-.6-2-1-3.2-1h-22c-2.8 0-5 2.3-5 5V47c0 2.8 2.3 5 5 5h23v.3c0 1.2 1 2.3 2.3 2.3c1.2 0 2.3-1 2.3-2.3V52h23c2.8 0 5-2.3 5-5V14.4c-.1-2.8-2.4-5-5.2-5M6.8 47.6c-.3 0-.5-.2-.5-.5V14.4c0-.3.2-.5.5-.5h22.1c.5 0 .9.4.9.9v32.8zm51-.6c0 .3-.2.5-.5.5h-23V14.8c0-.5.4-.9.9-.9h22.1c.3 0 .5.2.5.5z"></svg:path><svg:path fill="currentColor" d="M14.3 23.7h7.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-7.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3m27.7 0h7.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H42c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3m7.6 3.7h-7.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h7.4c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3m-27.8 0h-7.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h7.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3m0 8.8h-7.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h7.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3m27.8 0h-7.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h7.4c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsLibraryIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLicenseIcon],svg[lineicons-license-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48.4 40.6H14.3c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h34.2c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.4-2.3m0-18.8H39c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h9.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3m0 9.4H39c-1.2 0-2.3 1-2.3 2.3c0 1.2 1 2.3 2.3 2.3h9.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3"></svg:path><svg:path fill="currentColor" d="M56 11H8c-3.4 0-6.3 2.8-6.3 6.3v29.5C1.8 50.2 4.6 53 8 53h48c3.4 0 6.3-2.8 6.3-6.3V17.3c0-3.5-2.9-6.3-6.3-6.3m1.8 35.7c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V17.3c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8z"></svg:path><svg:path fill="currentColor" d="M18.3 35.7c3.9 0 7.1-3.2 7.1-7.1s-3.2-7.1-7.1-7.1s-7.1 3.2-7.1 7.1c.1 4 3.2 7.1 7.1 7.1m0-9.6c1.4 0 2.6 1.2 2.6 2.6s-1.2 2.6-2.6 2.6s-2.6-1.2-2.6-2.6c.1-1.5 1.2-2.6 2.6-2.6"></svg:path>`,
})
export class LineiconsLicenseIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLifeGuardTube1Icon],svg[lineicons-life-guard-tube-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.898 7.537a2.25 2.25 0 0 1 .16-3.005l.337-.337A2.25 2.25 0 0 1 7.355 4a9.27 9.27 0 0 1 9.211-.045a2.25 2.25 0 0 1 2.9.24l.337.337c.79.79.87 2.02.24 2.9A9.27 9.27 0 0 1 20 16.645a2.25 2.25 0 0 1-.2 2.953l-.338.338a2.25 2.25 0 0 1-2.998.165a9.27 9.27 0 0 1-9.011-.046a2.25 2.25 0 0 1-3.055-.118L4.06 19.6a2.25 2.25 0 0 1-.117-3.055a9.27 9.27 0 0 1-.045-9.008m1.151 7.892l2.938-2.938a4 4 0 0 1-.013-.86L5.006 8.663a7.77 7.77 0 0 0 .044 6.767m3.52 3.52a7.77 7.77 0 0 0 6.769.046l-2.972-2.972a4 4 0 0 1-.859-.013zm5.414-3.43l3.358 3.358a.75.75 0 0 0 1.06 0l.338-.338a.75.75 0 0 0 0-1.06l-3.323-3.324a4.06 4.06 0 0 1-1.433 1.364m2.008-2.91l2.913 2.913a7.77 7.77 0 0 0 .045-6.954l-2.942 2.942a4 4 0 0 1-.016 1.099m-.524-2.68l3.276-3.275a.75.75 0 0 0 0-1.06l-.338-.339a.75.75 0 0 0-1.06 0L14.07 8.532a4.05 4.05 0 0 1 1.398 1.398m-2.98-1.939l2.942-2.94a7.77 7.77 0 0 0-6.95.046l2.91 2.91c.364-.055.734-.06 1.099-.016m-2.644.592L6.516 5.255a.75.75 0 0 0-1.06 0l-.338.338a.75.75 0 0 0 0 1.06l3.36 3.361a4.04 4.04 0 0 1 1.365-1.432m-1.315 5.49L5.12 17.479a.75.75 0 0 0 0 1.06l.338.338a.75.75 0 0 0 1.06 0l3.409-3.407a4.04 4.04 0 0 1-1.399-1.399m1.674-3.868a2.54 2.54 0 1 0 3.591 3.592a2.54 2.54 0 0 0-3.591-3.592"></svg:path>`,
})
export class LineiconsLifeGuardTube1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLiferingIcon],svg[lineicons-lifering-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 62.2c-7.7 0-15.5-2.9-21.4-8.8C4.9 47.7 1.8 40.1 1.8 32s3.1-15.7 8.9-21.4C16.3 4.9 23.9 1.8 32 1.8s15.7 3.1 21.4 8.9c11.8 11.8 11.8 31 0 42.8c-5.9 5.8-13.7 8.7-21.4 8.7m-10.8-6.8c6.8 3.1 14.7 3.1 21.6 0L32 44.6zm-10.3-8.6c.8 1.2 1.8 2.3 2.9 3.4s2.2 2 3.4 2.9l10.9-10.9c-1.4-.5-2.7-1.4-3.8-2.5s-1.9-2.4-2.5-3.8zm25-4.6l10.9 10.9c1.2-.8 2.3-1.8 3.4-2.9s2-2.2 2.9-3.4L42.2 35.9c-.5 1.4-1.4 2.7-2.5 3.8s-2.4 1.9-3.8 2.5m-27.3-21c-1.5 3.3-2.4 7-2.4 10.8s.8 7.4 2.4 10.8L19.4 32zm36 10.8l10.8 10.8c3.1-6.8 3.1-14.7 0-21.6zM32 25.6c-1.7 0-3.3.7-4.5 1.9s-1.9 2.8-1.9 4.5s.7 3.3 1.9 4.5s2.8 1.9 4.5 1.9s3.3-.7 4.5-1.9s1.9-2.8 1.9-4.5s-.7-3.3-1.9-4.5s-2.8-1.9-4.5-1.9m-21.1-8.4l10.9 10.9c.5-1.4 1.4-2.7 2.5-3.8s2.4-1.9 3.8-2.5L17.2 10.9c-1.2.8-2.3 1.8-3.4 2.9s-2 2.2-2.9 3.4m28.8 7.1c1.1 1.1 1.9 2.4 2.5 3.8l10.9-10.9c-.8-1.2-1.8-2.3-2.9-3.4s-2.2-2-3.4-2.9L35.9 21.8c1.4.6 2.7 1.4 3.8 2.5M21.2 8.6L32 19.4L42.8 8.6c-3.3-1.5-7-2.4-10.8-2.4s-7.4.9-10.8 2.4"></svg:path>`,
})
export class LineiconsLiferingIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLineIcon],svg[lineicons-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10.622c0-4.484-4.516-8.161-10-8.161S2 6.106 2 10.622c0 4 3.548 7.355 8.355 8c.322.032.774.226.87.484c.098.226.033.645.033.903c0 0-.129.742-.129.871c-.032.226-.194 1 .871.484c1.032-.451 5.742-3.42 7.871-5.806C21.323 14.009 22 12.396 22 10.622M8.452 12.977a.21.21 0 0 1-.194.194H5.452c-.033 0-.097-.033-.13-.033c-.032-.032-.032-.096-.032-.129V8.622c0-.097.097-.193.194-.193h.677c.097 0 .194.096.194.193v3.452h1.903c.097 0 .194.097.194.193zm1.677 0a.21.21 0 0 1-.194.194h-.677a.21.21 0 0 1-.193-.194V8.622c0-.097.096-.193.193-.193h.677c.097 0 .194.096.194.193zm4.871 0a.21.21 0 0 1-.194.194h-.709c-.032 0-.032-.033-.032-.033L12 10.428v2.581a.21.21 0 0 1-.194.194h-.677a.21.21 0 0 1-.194-.194V8.654c0-.096.097-.193.194-.193h.678l.032.032l2 2.678V8.59c0-.097.096-.194.193-.194h.774c.097 0 .194.097.194.194zm3.871-3.645a.21.21 0 0 1-.194.193h-1.903v.742h1.903c.097 0 .194.097.194.194v.677a.21.21 0 0 1-.194.194h-1.903v.677h1.903c.097 0 .194.097.194.194v.677a.21.21 0 0 1-.194.194h-2.806c-.032 0-.097-.032-.13-.032c-.031-.033-.031-.097-.031-.13V8.559c0-.033.032-.097.032-.13c.032-.032.097-.032.129-.032h2.806c.097 0 .194.097.194.194z"></svg:path>`,
})
export class LineiconsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLineDashedIcon],svg[lineicons-line-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 12a.75.75 0 0 1 .75-.75h4.167a.75.75 0 0 1 0 1.5H3.25A.75.75 0 0 1 2.5 12m7.167 0a.75.75 0 0 1 .75-.75h4.167a.75.75 0 0 1 0 1.5h-4.167a.75.75 0 0 1-.75-.75m7.917-.75a.75.75 0 0 0 0 1.5h4.166a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class LineiconsLineDashedIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLineDottedIcon],svg[lineicons-line-dotted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.252 11.1a.9.9 0 1 0 0 1.8a.9.9 0 0 0 0-1.8m7.399 0a.9.9 0 1 0 0 1.8a.9.9 0 0 0 0-1.8m2.799.9a.9.9 0 1 1 1.8 0a.9.9 0 0 1-1.8 0m-6.499-.9a.9.9 0 1 0 0 1.8a.9.9 0 0 0 0-1.8m10.199.9a.9.9 0 1 1 1.8 0a.9.9 0 0 1-1.8 0m4.6-.9a.9.9 0 1 0 0 1.8a.9.9 0 0 0 0-1.8"></svg:path>`,
})
export class LineiconsLineDottedIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLineDoubleIcon],svg[lineicons-line-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 26.6h56c1.2 0 2.3-1 2.3-2.3S61.3 22 60 22H4c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3m56 10.8H4c-1.2 0-2.3 1-2.3 2.3S2.7 42 4 42h56c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsLineDoubleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineiconsLineHeightIcon],svg[lineicons-line-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.754 4a.75.75 0 0 1 .75-.75H20.5a.75.75 0 0 1 0 1.5h-6.996a.75.75 0 0 1-.75-.75m7.746 9.917h-6.996a.75.75 0 0 0 0 1.5H20.5a.75.75 0 0 0 0-1.5m-6.996 5.333a.75.75 0 0 0 0 1.5H20.5a.75.75 0 0 0 0-1.5zm6.996-9.167h-6.996a.75.75 0 0 1 0-1.5H20.5a.75.75 0 0 1 0 1.5M9.974 16.47l-1.722 1.72V5.81l1.722 1.72a.75.75 0 0 0 1.06-1.06l-3.002-3a.75.75 0 0 0-1.06 0l-3.002 3a.75.75 0 0 0 1.06 1.06l1.722-1.72v12.38L5.03 16.47a.75.75 0 0 0-1.06 1.06l3.002 3a.75.75 0 0 0 1.06 0l3.002-3a.75.75 0 0 0-1.06-1.06"></svg:path>`,
})
export class LineiconsLineHeightIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
